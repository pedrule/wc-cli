#!/usr/bin/env node

const ncp = require('ncp').ncp;


ncp(`${__dirname}/template`, process.cwd(), (e) => {
    console.log(e);
});