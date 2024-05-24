0:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
1:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
5:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
6:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
10:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/directuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/indirectuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/directuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/indirectuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
11:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/directuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/indirectuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/directuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/indirectuse.ts",
        [
          {
            "start": 76,
            "length": 4,
            "code": 2551,
            "category": 1,
            "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
            "relatedInformation": [
              {
                "file": "./project/src/class.ts",
                "start": 26,
                "length": 5,
                "messageText": "'prop1' is declared here.",
                "category": 3,
                "code": 2728
              }
            ]
          }
        ]
      ],
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
15:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}
16:: No Change run with noEmit
*** Needs explanation
TsBuild info text without affectedFilesPendingEmit:: /src/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ],
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
      "../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "commonjs"
      },
      "./project/src/class.ts": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectclass.ts": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/directuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/indirectuse.ts": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefile.ts": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": "commonjs"
      },
      "./project/src/nochangefilewithemitspecificerror.ts": {
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
      "declaration": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "semanticDiagnosticsPerFile": [
      [
        "./project/src/nochangefilewithemitspecificerror.ts",
        [
          {
            "start": 18,
            "length": 18,
            "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
            "category": 1,
            "code": 2396,
            "skippedOn": "noEmit"
          }
        ]
      ]
    ]
  },
  "version": "FakeTSVersion"
}