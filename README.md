## Purpose
Possible bug, since it looks that `jest` [timer mocks](https://jestjs.io/docs/en/timer-mocks) functionality doesn't play well with [cron](https://github.com/kelektiv/node-cron) library. Which is strange.

## How to test
There are two [tests](__tests__/demo.test.js) - one uses `jest`'s timer functionality, and it fails, the other uses `sinon` (same library which is used in the `cron` library tests) and it works.
```
npm test
```
