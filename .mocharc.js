'use strict';

const path = require('path');

// Required to tell ts-node how to compile typescript projects.
// This config will be used for all TypeScripts projects.
process.env.TS_NODE_PROJECT = path.join(__dirname, 'tsconfig.json');

const inCI = !!process.env.CI;

// https://mochajs.org/api/mocha
module.exports = {
    spec: ['test/**/*.{js,ts}'],
    exit: true, // force Mocha to exit even if there are pending/open sockets
    timeout: 5000,
    fullTrace: true, // Full stacktrace upon failure
    require: ['ts-node/register'],
    reporter: inCI ? 'mocha-teamcity-reporter' : null,
    'reporter-option': ['topLevelSuite=node'],
    'allow-uncaught': true, // Allow uncaught errors to propagate [boolean]
    'async-only': false,  // Require all tests to use a callback (async) or return a Promise [boolean]
    bail: true, // to exit after the first failure [boolean]
    'check-leaks': true, // Check for global variable leaks [boolean]
    color: true,
    delay: false, // Delay initial execution of root suite [boolean]
    extension: ['js', 'ts'],
    'fail-zero': true, // Fail test run if no test(s) encountered [boolean]
    'forbid-only': true, // Fail if exclusive test(s) encountered [boolean]
    'forbid-pending': false, //  Fail if pending test(s) encountered [boolean]
    'full-trace': true,
    'node-option': ['unhandled-rejections=strict'], // without leading "--", also V8 flags
    package: './package.json',
    slow: '100', // Specify "slow" test threshold (in milliseconds)
    'trace-warnings': true, // node flags ok
    'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
    ignore: ['dist', 'node_modules'],
};
