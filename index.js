#!/usr/bin/env node

const crypto = require('crypto');
const yargs = require('yargs');

const generatePassword = ({ length = 12, symbols = false, numbers = false, uppercase = false, complex = false }) => {
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  if (symbols || complex) {
    characters += '!@#$%^&*()_+-=';
  }
  if (numbers || complex) {
    characters += '0123456789';
  }
  if (uppercase || complex) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
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
  .option('symbols', {
    alias: 's',
    description: 'Include symbols',
    type: 'boolean',
    default: false
  })
  .option('numbers', {
    alias: 'n',
    description: 'Include numbers',
    type: 'boolean',
    default: false
 })
  .option('uppercase', {
    alias: 'u',
    description: 'Include uppercase letters',
    type: 'boolean',
    default: false
  })
  .option('complex', {
    alias: 'c',
    description: 'Include numbers, symbols and uppercase letters',
    type: 'boolean',
    default: false
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(generatePassword({
  length: argv.length,
  symbols: argv.symbols,
  numbers: argv.numbers,
  uppercase: argv.uppercase,
  complex: argv.complex
}));