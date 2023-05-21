#!/usr/bin/env node

const crypto = require('crypto');

const generatePassword = (length = 12) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';
  const buffer = crypto.randomBytes(length);
  const password = Array.from(buffer)
    .map(byte => characters[byte % characters.length])
    .join('');
  return password;
};

console.log(generatePassword());