1:: no-change-run
Clean tsbuildinfo will have pendingEmit as after dts diagnostics files are not emitted
Incremental tsbuildinfo through tsc --p will emit files but will have emitDiagnostics and no pendingEmit value since emit isnt pending
TsBuild info text without affectedFilesPendingEmit:: /src/project/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./ky.d.ts": {
        "version": "10101889135-type KyInstance = {\n    extend(options: Record<string,unknown>): KyInstance;\n}\ndeclare const ky: KyInstance;\nexport default ky;\n",
        "impliedFormat": "commonjs"
      },
      "./src/index.ts": {
        "version": "-383421929-import ky from 'ky';\nexport const api = ky.extend({});\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        3,
        "./src/index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js",
      "skipDefaultLibCheck": true,
      "skipLibCheck": true
    },
    "pendingEmit": [
      "Js | Dts",
      false
    ]
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./ky.d.ts": {
        "version": "10101889135-type KyInstance = {\n    extend(options: Record<string,unknown>): KyInstance;\n}\ndeclare const ky: KyInstance;\nexport default ky;\n",
        "impliedFormat": "commonjs"
      },
      "./src/index.ts": {
        "version": "-383421929-import ky from 'ky';\nexport const api = ky.extend({});\n",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        3,
        "./src/index.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js",
      "skipDefaultLibCheck": true,
      "skipLibCheck": true
    }
  },
  "version": "FakeTSVersion"
}