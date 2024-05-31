import * as ts from "../../_namespaces/ts.js";
import { jsonToReadableText } from "../helpers.js";
import { compilerOptionsToConfigJson } from "../helpers/contents.js";
import {
    noChangeRun,
    TestTscEdit,
    verifyTsc,
} from "../helpers/tsc.js";
import {
    appendText,
    loadProjectFromFiles,
    replaceText,
} from "../helpers/vfs.js";

describe("unittests:: tsbuild:: commandLine::", () => {
    function scenarioName(text: string, options: ts.CompilerOptions) {
        return `${options.outFile ? "outFile" : "multiFile"}/${text}`;
    }
    describe("different options::", () => {
        function withOptionChange(caption: string, ...options: readonly string[]): TestTscEdit {
            return {
                caption,
                edit: ts.noop,
                commandLineArgs: ["--b", "/src/project", "--verbose", ...options],
            };
        }
        function noChangeWithSubscenario(caption: string): TestTscEdit {
            return { ...noChangeRun, caption };
        }
        function withOptionChangeAndDiscrepancyExplanation(caption: string, option: string): TestTscEdit {
            return {
                ...withOptionChange(caption, option),
                discrepancyExplanation: () => [
                    `Clean build tsbuildinfo will have compilerOptions with composite and ${option.replace(/-/g, "")}`,
                    `Incremental build will detect that it doesnt need to rebuild so tsbuild info is from before which has option composite only`,
                ],
            };
        }
        function nochangeWithIncrementalDeclarationFromBeforeExplaination(): TestTscEdit {
            return {
                ...noChangeRun,
                discrepancyExplanation: () => [
                    `Clean build tsbuildinfo will have compilerOptions {}`,
                    `Incremental build will detect that it doesnt need to rebuild so tsbuild info is from before which has option declaration and declarationMap`,
                ],
            };
        }
        function localChange(): TestTscEdit {
            return {
                caption: "local change",
                edit: fs => replaceText(fs, "/src/project/a.ts", "Local = 1", "Local = 10"),
            };
        }
        function fs(options: ts.CompilerOptions) {
            return loadProjectFromFiles({
                "/src/project/tsconfig.json": jsonToReadableText({ compilerOptions: compilerOptionsToConfigJson(options) }),
                "/src/project/a.ts": `export const a = 10;const aLocal = 10;`,
                "/src/project/b.ts": `export const b = 10;const bLocal = 10;`,
                "/src/project/c.ts": `import { a } from "./a";export const c = a;`,
                "/src/project/d.ts": `import { b } from "./b";export const d = b;`,
            });
        }
        function verify(options: ts.CompilerOptions) {
            verifyTsc({
                scenario: "commandLine",
                subScenario: scenarioName("different options", options),
                fs: () => fs({ composite: true, ...options }),
                commandLineArgs: ["--b", "/src/project", "--verbose"],
                edits: [
                    withOptionChange("with sourceMap", "--sourceMap"),
                    noChangeWithSubscenario("should re-emit only js so they dont contain sourcemap"),
                    withOptionChangeAndDiscrepancyExplanation("with declaration should not emit anything", "--declaration"),
                    noChangeRun,
                    withOptionChange("with declaration and declarationMap", "--declaration", "--declarationMap"),
                    noChangeWithSubscenario("should re-emit only dts so they dont contain sourcemap"),
                    withOptionChangeAndDiscrepancyExplanation("with emitDeclarationOnly should not emit anything", "--emitDeclarationOnly"),
                    noChangeRun,
                    localChange(),
                    withOptionChangeAndDiscrepancyExplanation("with declaration should not emit anything", "--declaration"),
                    withOptionChange("with inlineSourceMap", "--inlineSourceMap"),
                    withOptionChange("with sourceMap", "--sourceMap"),
                ],
                baselinePrograms: true,
            });
            verifyTsc({
                scenario: "commandLine",
                subScenario: scenarioName("different options with incremental", options),
                fs: () => fs({ incremental: true, ...options }),
                commandLineArgs: ["--b", "/src/project", "--verbose"],
                edits: [
                    withOptionChange("with sourceMap", "--sourceMap"),
                    withOptionChange("should re-emit only js so they dont contain sourcemap"),
                    withOptionChange("with declaration, emit Dts and should not emit js", "--declaration"),
                    withOptionChange("with declaration and declarationMap", "--declaration", "--declarationMap"),
                    nochangeWithIncrementalDeclarationFromBeforeExplaination(),
                    localChange(),
                    withOptionChange("with declaration and declarationMap", "--declaration", "--declarationMap"),
                    nochangeWithIncrementalDeclarationFromBeforeExplaination(),
                    withOptionChange("with inlineSourceMap", "--inlineSourceMap"),
                    withOptionChange("with sourceMap", "--sourceMap"),
                    noChangeWithSubscenario("emit js files"),
                    withOptionChange("with declaration and declarationMap", "--declaration", "--declarationMap"),
                    withOptionChange("with declaration and declarationMap, should not re-emit", "--declaration", "--declarationMap"),
                ],
                baselinePrograms: true,
            });
        }
        verify({});
        verify({ outFile: "../outFile.js", module: ts.ModuleKind.AMD });
    });
    describe("emitDeclarationOnly::", () => {
        function fs(options: ts.CompilerOptions) {
            return loadProjectFromFiles({
                "/src/project1/src/tsconfig.json": jsonToReadableText({
                    compilerOptions: compilerOptionsToConfigJson(options),
                }),
                "/src/project1/src/a.ts": `export const a = 10;const aLocal = 10;`,
                "/src/project1/src/b.ts": `export const b = 10;const bLocal = 10;`,
                "/src/project1/src/c.ts": `import { a } from "./a";export const c = a;`,
                "/src/project1/src/d.ts": `import { b } from "./b";export const d = b;`,
                "/src/project2/src/tsconfig.json": jsonToReadableText({
                    compilerOptions: compilerOptionsToConfigJson(options),
                    references: [{ path: "../../project1/src" }],
                }),
                "/src/project2/src/e.ts": `export const e = 10;`,
                "/src/project2/src/f.ts": `import { a } from "${options.outFile ? "a" : "../../project1/src/a"}"; export const f = a;`,
                "/src/project2/src/g.ts": `import { b } from "${options.outFile ? "b" : "../../project1/src/b"}"; export const g = b;`,
            });
        }
        function verifyWithIncremental(options: ts.CompilerOptions) {
            verifyTsc({
                scenario: "commandLine",
                subScenario: subScenario("emitDeclarationOnly on commandline"),
                fs: () => fs(options),
                commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly"],
                edits: [
                    noChangeRun,
                    {
                        caption: "local change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "const aa = 10;"),
                    },
                    {
                        caption: "non local change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "export const aaa = 10;"),
                    },
                    {
                        caption: "emit js files",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                    {
                        ...noChangeRun,
                        discrepancyExplanation: () => [
                            `Clean build tsbuildinfo for both projects will have compilerOptions with composite and emitDeclarationOnly`,
                            `Incremental build will detect that it doesnt need to rebuild so tsbuild info for projects is from before which has option composite only`,
                        ],
                    },
                    {
                        caption: "js emit with change without emitDeclarationOnly",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const alocal = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                    {
                        caption: "local change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const aaaa = 10;"),
                        // --out without composite doesnt emit buildInfo without emitting program so it wouldnt have project2 tsbuildInfo so no mismatch
                        discrepancyExplanation: options.incremental && options.outFile ? undefined : () => [
                            `Clean build tsbuildinfo for project2 will have compilerOptions with composite and emitDeclarationOnly`,
                            `Incremental build will detect that it doesnt need to rebuild project2 so tsbuildinfo for it is from before which has option composite only`,
                        ],
                    },
                    {
                        caption: "non local change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "export const aaaaa = 10;"),
                    },
                    {
                        caption: "js emit with change without emitDeclarationOnly",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "export const a2 = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                ],
                baselinePrograms: true,
            });
            verifyTsc({
                scenario: "commandLine",
                subScenario: subScenario("emitDeclarationOnly false on commandline"),
                fs: () => fs({ ...options, emitDeclarationOnly: true }),
                commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                edits: [
                    noChangeRun,
                    {
                        caption: "change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "const aa = 10;"),
                    },
                    {
                        caption: "emit js files",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                    {
                        ...noChangeRun,
                        discrepancyExplanation: () => [
                            `Clean build tsbuildinfo for both projects will have compilerOptions with composite and emitDeclarationOnly`,
                            `Incremental build will detect that it doesnt need to rebuild so tsbuild info for projects is from before which has option composite as true but emitDeclrationOnly as false`,
                        ],
                    },
                    {
                        caption: "no change run with js emit",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                    {
                        caption: "js emit with change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const blocal = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                ],
                baselinePrograms: true,
            });
            function subScenario(text: string) {
                return scenarioName(`${text}${options.composite ? "" : " with declaration and incremental"}`, options);
            }
        }
        verifyWithIncremental({ composite: true });
        verifyWithIncremental({ incremental: true, declaration: true });
        verifyWithIncremental({ composite: true, outFile: "../outFile.js", module: ts.ModuleKind.AMD });
        verifyWithIncremental({ incremental: true, declaration: true, outFile: "../outFile.js", module: ts.ModuleKind.AMD });

        function verifyNonIncremental(options: ts.CompilerOptions) {
            verifyTsc({
                scenario: "commandLine",
                subScenario: scenarioName("emitDeclarationOnly on commandline with declaration", options),
                fs: () => fs({ declaration: true, ...options }),
                commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly"],
                edits: [
                    noChangeRun,
                    {
                        caption: "local change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "const aa = 10;"),
                    },
                    {
                        caption: "non local change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "export const aaa = 10;"),
                    },
                    {
                        caption: "emit js files",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                    noChangeRun,
                    {
                        caption: "js emit with change without emitDeclarationOnly",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const alocal = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                    {
                        caption: "local change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const aaaa = 10;"),
                    },
                    {
                        caption: "non local change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "export const aaaaa = 10;"),
                    },
                    {
                        caption: "js emit with change without emitDeclarationOnly",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "export const a2 = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                    },
                ],
                baselinePrograms: true,
            });

            verifyTsc({
                scenario: "commandLine",
                subScenario: scenarioName("emitDeclarationOnly false on commandline with declaration", options),
                fs: () => fs({ declaration: true, emitDeclarationOnly: true, ...options }),
                commandLineArgs: ["--b", "/src/project2/src", "--verbose"],
                edits: [
                    noChangeRun,
                    {
                        caption: "change",
                        edit: fs => appendText(fs, "/src/project1/src/a.ts", "const aa = 10;"),
                    },
                    {
                        caption: "emit js files",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                    noChangeRun,
                    {
                        caption: "no change run with js emit",
                        edit: ts.noop,
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                    {
                        caption: "js emit with change",
                        edit: fs => appendText(fs, "/src/project1/src/b.ts", "const blocal = 10;"),
                        commandLineArgs: ["--b", "/src/project2/src", "--verbose", "--emitDeclarationOnly", "false"],
                    },
                ],
                baselinePrograms: true,
            });
        }
        verifyNonIncremental({});
        verifyNonIncremental({ outFile: "../outFile.js", module: ts.ModuleKind.AMD });
    });
});
