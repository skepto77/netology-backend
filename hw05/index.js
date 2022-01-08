#!/usr/bin/env node
const yargs = require('yargs/yargs');
const http = require('http');
require('dotenv').config();

const args = yargs(require('yargs/helpers').hideBin(process.argv)).argv;
const city = args._[0];

if (!city) {
  console.log(`Ошибка: Не введен город`);
  return;
}

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${city}`;

http.get(url, (response) => {
  const statusCode = response.statusCode;

  if (statusCode !== 200) {
    console.error(`Status Code: ${statusCode}`);
    return;
  }

  let result = '';

  response.on('data', (chunk) => (result += chunk));

  response.on('end', () => {
    result = JSON.parse(result);
    console.log(result);
  });

  response.on('error', (e) => {
    console.error(`Ошибка: ${e.message}`);
  });
});
