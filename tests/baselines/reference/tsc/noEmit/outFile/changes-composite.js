currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}

//// [/src/project/src/directUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/indirectClass.ts]
import { classC } from './class';
export class indirectClass {
    classC = new classC();
}

//// [/src/project/src/indirectUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/noChangeFile.ts]
export function writeLog(s: string) {
}

//// [/src/project/src/noChangeFileWithEmitSpecificError.ts]
function someFunc(arguments: boolean, ...rest: any[]) {
}

//// [/src/project/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outFile": "../outFile.js",
    "module": "amd"
  }
}



Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/outFile.d.ts]
declare module "src/class" {
    export class classC {
        prop: number;
    }
}
declare module "src/indirectClass" {
    import { classC } from "src/class";
    export class indirectClass {
        classC: classC;
    }
}
declare module "src/directUse" { }
declare module "src/indirectUse" { }
declare module "src/noChangeFile" {
    export function writeLog(s: string): void;
}
declare function someFunc(arguments: boolean, ...rest: any[]): void;


//// [/src/outFile.js]
define("src/class", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.classC = void 0;
    var classC = /** @class */ (function () {
        function classC() {
            this.prop = 1;
        }
        return classC;
    }());
    exports.classC = classC;
});
define("src/indirectClass", ["require", "exports", "src/class"], function (require, exports, class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indirectClass = void 0;
    var indirectClass = /** @class */ (function () {
        function indirectClass() {
            this.classC = new class_1.classC();
        }
        return indirectClass;
    }());
    exports.indirectClass = indirectClass;
});
define("src/directUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_1.indirectClass().classC.prop;
});
define("src/indirectUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_2.indirectClass().classC.prop;
});
define("src/noChangeFile", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeLog = writeLog;
    function writeLog(s) {
    }
});
function someFunc(arguments) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}


//// [/src/outFile.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./project/src/class.ts","./project/src/indirectclass.ts","./project/src/directuse.ts","./project/src/indirectuse.ts","./project/src/nochangefile.ts","./project/src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","impliedFormat":1}],"root":[[2,7]],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"8998999540-declare module \"src/class\" {\n    export class classC {\n        prop: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/src/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./project/src/class.ts",
      "./project/src/indirectclass.ts",
      "./project/src/directuse.ts",
      "./project/src/indirectuse.ts",
      "./project/src/nochangefile.ts",
      "./project/src/nochangefilewithemitspecificerror.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "original": {
          "version": "545032748-export class classC {\n    prop = 1;\n}",
          "impliedFormat": 1
        },
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "original": {
          "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
          "impliedFormat": 1
        },
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "original": {
          "version": "6714567633-export function writeLog(s: string) {\n}",
          "impliedFormat": 1
        },
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
        "original": {
          "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
          "impliedFormat": 1
        },
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          7
        ],
        [
          "./project/src/class.ts",
          "./project/src/indirectclass.ts",
          "./project/src/directuse.ts",
          "./project/src/indirectuse.ts",
          "./project/src/nochangefile.ts",
          "./project/src/nochangefilewithemitspecificerror.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "8998999540-declare module \"src/class\" {\n    export class classC {\n        prop: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2052
}



Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: Introduce error but still noEmit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop1 = 1;
}



Output::
/lib/tsc --p src/project --noEmit
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.


Found 2 errors in 2 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped




Change:: Fix error and emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}



Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: Introduce error and emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop1 = 1;
}



Output::
/lib/tsc --p src/project
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 3 errors in 3 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
     1  src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/outFile.d.ts]
declare module "src/class" {
    export class classC {
        prop1: number;
    }
}
declare module "src/indirectClass" {
    import { classC } from "src/class";
    export class indirectClass {
        classC: classC;
    }
}
declare module "src/directUse" { }
declare module "src/indirectUse" { }
declare module "src/noChangeFile" {
    export function writeLog(s: string): void;
}
declare function someFunc(arguments: boolean, ...rest: any[]): void;


//// [/src/outFile.js]
define("src/class", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.classC = void 0;
    var classC = /** @class */ (function () {
        function classC() {
            this.prop1 = 1;
        }
        return classC;
    }());
    exports.classC = classC;
});
define("src/indirectClass", ["require", "exports", "src/class"], function (require, exports, class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indirectClass = void 0;
    var indirectClass = /** @class */ (function () {
        function indirectClass() {
            this.classC = new class_1.classC();
        }
        return indirectClass;
    }());
    exports.indirectClass = indirectClass;
});
define("src/directUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_1.indirectClass().classC.prop;
});
define("src/indirectUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_2.indirectClass().classC.prop;
});
define("src/noChangeFile", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeLog = writeLog;
    function writeLog(s) {
    }
});
function someFunc(arguments) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}


//// [/src/outFile.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./project/src/class.ts","./project/src/indirectclass.ts","./project/src/directuse.ts","./project/src/indirectuse.ts","./project/src/nochangefile.ts","./project/src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"1786859709-export class classC {\n    prop1 = 1;\n}","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","impliedFormat":1}],"root":[[2,7]],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"-1966987419-declare module \"src/class\" {\n    export class classC {\n        prop1: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/src/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./project/src/class.ts",
      "./project/src/indirectclass.ts",
      "./project/src/directuse.ts",
      "./project/src/indirectuse.ts",
      "./project/src/nochangefile.ts",
      "./project/src/nochangefilewithemitspecificerror.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "original": {
          "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
          "impliedFormat": 1
        },
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "original": {
          "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
          "impliedFormat": 1
        },
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "original": {
          "version": "6714567633-export function writeLog(s: string) {\n}",
          "impliedFormat": 1
        },
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
        "original": {
          "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
          "impliedFormat": 1
        },
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          7
        ],
        [
          "./project/src/class.ts",
          "./project/src/indirectclass.ts",
          "./project/src/directuse.ts",
          "./project/src/indirectuse.ts",
          "./project/src/nochangefile.ts",
          "./project/src/nochangefilewithemitspecificerror.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "-1966987419-declare module \"src/class\" {\n    export class classC {\n        prop1: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2056
}



Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 3 errors in 3 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
     1  src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.


Found 2 errors in 2 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.


Found 2 errors in 2 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped




Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 3 errors in 3 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
     1  src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated




Change:: Fix error and no emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}



Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/outFile.d.ts]
declare module "src/class" {
    export class classC {
        prop: number;
    }
}
declare module "src/indirectClass" {
    import { classC } from "src/class";
    export class indirectClass {
        classC: classC;
    }
}
declare module "src/directUse" { }
declare module "src/indirectUse" { }
declare module "src/noChangeFile" {
    export function writeLog(s: string): void;
}
declare function someFunc(arguments: boolean, ...rest: any[]): void;


//// [/src/outFile.js]
define("src/class", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.classC = void 0;
    var classC = /** @class */ (function () {
        function classC() {
            this.prop = 1;
        }
        return classC;
    }());
    exports.classC = classC;
});
define("src/indirectClass", ["require", "exports", "src/class"], function (require, exports, class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.indirectClass = void 0;
    var indirectClass = /** @class */ (function () {
        function indirectClass() {
            this.classC = new class_1.classC();
        }
        return indirectClass;
    }());
    exports.indirectClass = indirectClass;
});
define("src/directUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_1.indirectClass().classC.prop;
});
define("src/indirectUse", ["require", "exports", "src/indirectClass"], function (require, exports, indirectClass_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new indirectClass_2.indirectClass().classC.prop;
});
define("src/noChangeFile", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeLog = writeLog;
    function writeLog(s) {
    }
});
function someFunc(arguments) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}


//// [/src/outFile.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./project/src/class.ts","./project/src/indirectclass.ts","./project/src/directuse.ts","./project/src/indirectuse.ts","./project/src/nochangefile.ts","./project/src/nochangefilewithemitspecificerror.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","impliedFormat":1}],"root":[[2,7]],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"8998999540-declare module \"src/class\" {\n    export class classC {\n        prop: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/src/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./project/src/class.ts",
      "./project/src/indirectclass.ts",
      "./project/src/directuse.ts",
      "./project/src/indirectuse.ts",
      "./project/src/nochangefile.ts",
      "./project/src/nochangefilewithemitspecificerror.ts"
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "original": {
          "version": "545032748-export class classC {\n    prop = 1;\n}",
          "impliedFormat": 1
        },
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "original": {
          "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
          "impliedFormat": 1
        },
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "original": {
          "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
          "impliedFormat": 1
        },
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "original": {
          "version": "6714567633-export function writeLog(s: string) {\n}",
          "impliedFormat": 1
        },
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
        "original": {
          "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
          "impliedFormat": 1
        },
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          2,
          7
        ],
        [
          "./project/src/class.ts",
          "./project/src/indirectclass.ts",
          "./project/src/directuse.ts",
          "./project/src/indirectuse.ts",
          "./project/src/nochangefile.ts",
          "./project/src/nochangefilewithemitspecificerror.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "8998999540-declare module \"src/class\" {\n    export class classC {\n        prop: number;\n    }\n}\ndeclare module \"src/indirectClass\" {\n    import { classC } from \"src/class\";\n    export class indirectClass {\n        classC: classC;\n    }\n}\ndeclare module \"src/directUse\" { }\ndeclare module \"src/indirectUse\" { }\ndeclare module \"src/noChangeFile\" {\n    export function writeLog(s: string): void;\n}\ndeclare function someFunc(arguments: boolean, ...rest: any[]): void;\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2052
}



Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with noEmit
Input::


Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success




Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


