Testcase for Angular issue 57850

See https://github.com/angular/angular/issues/57850


Fails when building the b-lib library that depends (incorrectly) on a-lib
```
$ npm install
$ npx ng build a-lib
$ npx ng build b-lib
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'b-lib'
------------------------------------------------------------------------------
✖ Compiling with Angular sources in partial compilation mode.
Cannot destructure property 'pos' of 'file.referencedFiles[index]' as it is undefined.
```


Requires
```
    "baseUrl": "./",
```
in tsconfig.json compiler options, and an invalid import
```
import { ALib } from 'projects/a-lib/src/lib/a-lib';
```
