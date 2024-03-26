const fs = require('fs');
const assert = require('assert');

const fib = require('./code');

function controlFib(n) {
    if (n <= 1) return n;
    return controlFib(n - 1) + controlFib(n - 2);
}

for (let i = 0; i < 20; i++) {
    assert.strictEqual(fib(i), controlFib(i));
}
