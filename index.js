#!/usr/bin/env node

const crypto = require('crypto');
const yargs = require('yargs');

const generatePassword = (length = 12) => {
  const characters = '[email protected]#$%^&*()_+-=';
  const buffer = crypto.randomBytes(length);
  const password = Array.from(buffer)
    .map(byte => characters[byte % characters.length])
    .join('');
  return password;
};

const argv = yargs
  .option('length', {
    alias: 'l',
    description: 'Length of the password',
    type: 'number',
    default: 12
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(generatePassword(argv.length));