# Date Helper library

![tests workflow](https://github.com/clearvox/date-helper-lib/actions/workflows/tests.yml/badge.svg)
![version workflow](https://github.com/clearvox/date-helper-lib/blob/main/package.json)
[![Run Tests](https://github.com/clearvox/date-helper-lib/actions/workflows/tests.yml/badge.svg?event=branch_protection_rule)](https://github.com/clearvox/date-helper-lib/actions/workflows/tests.yml)

A helper library for Javascript Date object

## Features

 - Zero-setup. After running `npm install` things will setup for you :wink:
 - [Typescript](https://www.typescriptlang.org/) support
 - Lint using [ESLint](https://eslint.org/)
 - Automated releases using [semantic-release](https://github.com/semantic-release/semantic-release)

## Usage

Clone the repo and then run `npm install`. That's all!

**Start coding!** `package.json` and entry files are already set up for you, so don't worry about linking to your main file, typings, etc. Just keep those files with the same name.

### NPM scripts

 - `npm run build`: Generate bundles and typings, create docs
 - `npm run detect-duplicates`: Detect code duplicates
 - `npm run lint`: Lints code
 - `npm run lint-fix`: Lints and fix the code
 - `npm run test`: Run tests

## Importing library

1. Install the library
```bash
npm install git+https://github.com/clearvox/date-helper-lib.git#{fragment}
```

`fragment` can either be a tag or a branch you are working on (let say if you want to test some code before merge) 

2. Then use it:

```typescript
const { DateHelper } = require('@clearvox/date-helper');

console.log(DateHelper.formatForLogging(new Date()))