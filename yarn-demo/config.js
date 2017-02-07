'use strict';

const nconf = module.exports = require('nconf');

nconf
    .argv()
    .env(['PORT',
        'SECRET'
    ])
    .defaults({
        PORT: 4000,
        SECRET: 'keyboardcat'
    });
