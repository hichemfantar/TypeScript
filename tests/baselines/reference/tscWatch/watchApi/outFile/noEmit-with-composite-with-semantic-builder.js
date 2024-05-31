currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "outFile": "../outFile.js",
    "module": "amd"
  }
}

//// [/user/username/projects/myproject/main.ts]
export const x = 10;

//// [/user/username/projects/myproject/other.ts]
export const y = 10;

//// [/a/lib/lib.d.ts]
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


tsc --w --noEmit
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./myproject/main.ts","./myproject/other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"pendingEmit":false},"version":"FakeTSVersion"}

//// [/user/username/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./myproject/main.ts",
      "./myproject/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./myproject/main.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./myproject/other.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./myproject/main.ts"
      ],
      [
        3,
        "./myproject/other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "pendingEmit": [
      "Js | Dts",
      false
    ]
  },
  "version": "FakeTSVersion",
  "size": 759
}


PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/main.ts: *new*
  {}
/user/username/projects/myproject/other.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Program root files: [
  "/user/username/projects/myproject/main.ts",
  "/user/username/projects/myproject/other.ts"
]
Program options: {
  "composite": true,
  "outFile": "/user/username/projects/outFile.js",
  "module": 2,
  "noEmit": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Checking if output is same as EmitAndSemanticDiagnosticsBuilderProgram::
Output file text for /user/username/projects/myproject/main.js is same:: true
Output file text for /user/username/projects/myproject/main.d.ts is same:: true
Output file text for /user/username/projects/myproject/other.js is same:: true
Output file text for /user/username/projects/myproject/other.d.ts is same:: true
Output file text for /user/username/projects/myproject/tsconfig.tsbuildinfo is same:: true

tsc --w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./myproject/main.ts","./myproject/other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./myproject/main.ts",
      "./myproject/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./myproject/main.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "./myproject/other.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./myproject/main.ts"
      ],
      [
        3,
        "./myproject/other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 921
}

//// [/user/username/projects/outFile.js]
define("main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
define("other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 10;
});


//// [/user/username/projects/outFile.d.ts]
declare module "main" {
    export const x = 10;
}
declare module "other" {
    export const y = 10;
}



PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/package.json:
  {"pollingInterval":2000} *new*

PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {} *new*
/user/username/projects/myproject/main.ts:
  {} *new*
/user/username/projects/myproject/other.ts:
  {} *new*
/user/username/projects/myproject/tsconfig.json:
  {} *new*

FsWatches *deleted*::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.ts:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {} *new*

FsWatchesRecursive *deleted*::
/user/username/projects/myproject:
  {}

Program root files: [
  "/user/username/projects/myproject/main.ts",
  "/user/username/projects/myproject/other.ts"
]
Program options: {
  "composite": true,
  "outFile": "/user/username/projects/outFile.js",
  "module": 2,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Checking if output is same as EmitAndSemanticDiagnosticsBuilderProgram::
Output file text for /user/username/projects/myproject/main.js is same:: true
Output file text for /user/username/projects/myproject/main.d.ts is same:: true
Output file text for /user/username/projects/myproject/other.js is same:: true
Output file text for /user/username/projects/myproject/other.d.ts is same:: true
Output file text for /user/username/projects/myproject/tsconfig.tsbuildinfo is same:: true

Change:: Add comment

Input::
//// [/user/username/projects/myproject/main.ts]
export const x = 10;
// SomeComment


PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches *deleted*::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.ts:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject:
  {}

tsc --w --noEmit
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./myproject/main.ts","./myproject/other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-14918944530-export const x = 10;\n// SomeComment","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts","pendingEmit":false},"version":"FakeTSVersion"}

//// [/user/username/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./myproject/main.ts",
      "./myproject/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./myproject/main.ts": {
        "original": {
          "version": "-14918944530-export const x = 10;\n// SomeComment",
          "impliedFormat": 1
        },
        "version": "-14918944530-export const x = 10;\n// SomeComment",
        "impliedFormat": "commonjs"
      },
      "./myproject/other.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./myproject/main.ts"
      ],
      [
        3,
        "./myproject/other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts",
    "pendingEmit": [
      "Js | Dts",
      false
    ]
  },
  "version": "FakeTSVersion",
  "size": 957
}


PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/main.ts: *new*
  {}
/user/username/projects/myproject/other.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Program root files: [
  "/user/username/projects/myproject/main.ts",
  "/user/username/projects/myproject/other.ts"
]
Program options: {
  "composite": true,
  "outFile": "/user/username/projects/outFile.js",
  "module": 2,
  "noEmit": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Checking if output is same as EmitAndSemanticDiagnosticsBuilderProgram::
Output file text for /user/username/projects/myproject/main.js is same:: true
Output file text for /user/username/projects/myproject/main.d.ts is same:: true
Output file text for /user/username/projects/myproject/other.js is same:: true
Output file text for /user/username/projects/myproject/other.d.ts is same:: true
Output file text for /user/username/projects/myproject/tsconfig.tsbuildinfo is same:: true

tsc --w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./myproject/main.ts","./myproject/other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-14918944530-export const x = 10;\n// SomeComment","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./myproject/main.ts",
      "./myproject/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./myproject/main.ts": {
        "original": {
          "version": "-14918944530-export const x = 10;\n// SomeComment",
          "impliedFormat": 1
        },
        "version": "-14918944530-export const x = 10;\n// SomeComment",
        "impliedFormat": "commonjs"
      },
      "./myproject/other.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./myproject/main.ts"
      ],
      [
        3,
        "./myproject/other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 937
}

//// [/user/username/projects/outFile.js]
define("main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
// SomeComment
define("other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 10;
});



PolledWatches::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000} *new*
/user/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*
/user/username/projects/package.json:
  {"pollingInterval":2000} *new*

PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts:
  {} *new*
/user/username/projects/myproject/main.ts:
  {} *new*
/user/username/projects/myproject/other.ts:
  {} *new*
/user/username/projects/myproject/tsconfig.json:
  {} *new*

FsWatches *deleted*::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.ts:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject:
  {} *new*

FsWatchesRecursive *deleted*::
/user/username/projects/myproject:
  {}

Program root files: [
  "/user/username/projects/myproject/main.ts",
  "/user/username/projects/myproject/other.ts"
]
Program options: {
  "composite": true,
  "outFile": "/user/username/projects/outFile.js",
  "module": 2,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Checking if output is same as EmitAndSemanticDiagnosticsBuilderProgram::
Output file text for /user/username/projects/myproject/main.js is same:: true
Output file text for /user/username/projects/myproject/main.d.ts is same:: true
Output file text for /user/username/projects/myproject/other.js is same:: true
Output file text for /user/username/projects/myproject/other.d.ts is same:: true
Output file text for /user/username/projects/myproject/tsconfig.tsbuildinfo is same:: true

Change:: Add comment

Input::
//// [/user/username/projects/myproject/main.ts]
export const x = 10;
// SomeComment
// SomeComment


PolledWatches *deleted*::
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/package.json:
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches *deleted*::
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/main.ts:
  {}
/user/username/projects/myproject/other.ts:
  {}
/user/username/projects/myproject/tsconfig.json:
  {}

FsWatchesRecursive *deleted*::
/user/username/projects/myproject:
  {}

tsc --w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/projects/outFile.tsbuildinfo]
{"program":{"fileNames":["../../../a/lib/lib.d.ts","./myproject/main.ts","./myproject/other.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","impliedFormat":1},{"version":"-16105752451-export const x = 10;\n// SomeComment\n// SomeComment","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[2,3],"options":{"composite":true,"module":2,"outFile":"./outFile.js"},"outSignature":"3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n","latestChangedDtsFile":"./outFile.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../a/lib/lib.d.ts",
      "./myproject/main.ts",
      "./myproject/other.ts"
    ],
    "fileInfos": {
      "../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "impliedFormat": "commonjs"
      },
      "./myproject/main.ts": {
        "original": {
          "version": "-16105752451-export const x = 10;\n// SomeComment\n// SomeComment",
          "impliedFormat": 1
        },
        "version": "-16105752451-export const x = 10;\n// SomeComment\n// SomeComment",
        "impliedFormat": "commonjs"
      },
      "./myproject/other.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        2,
        "./myproject/main.ts"
      ],
      [
        3,
        "./myproject/other.ts"
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "3483479585-declare module \"main\" {\n    export const x = 10;\n}\ndeclare module \"other\" {\n    export const y = 10;\n}\n",
    "latestChangedDtsFile": "./outFile.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 953
}

//// [/user/username/projects/outFile.js]
define("main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});
// SomeComment
// SomeComment
define("other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 10;
});



PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/user/username/projects/myproject/main.ts: *new*
  {}
/user/username/projects/myproject/other.ts: *new*
  {}
/user/username/projects/myproject/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

Program root files: [
  "/user/username/projects/myproject/main.ts",
  "/user/username/projects/myproject/other.ts"
]
Program options: {
  "composite": true,
  "outFile": "/user/username/projects/outFile.js",
  "module": 2,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/main.ts
/user/username/projects/myproject/other.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Checking if output is same as EmitAndSemanticDiagnosticsBuilderProgram::
Output file text for /user/username/projects/myproject/main.js is same:: true
Output file text for /user/username/projects/myproject/main.d.ts is same:: true
Output file text for /user/username/projects/myproject/other.js is same:: true
Output file text for /user/username/projects/myproject/other.d.ts is same:: true
Output file text for /user/username/projects/myproject/tsconfig.tsbuildinfo is same:: true
