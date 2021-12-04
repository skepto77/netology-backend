#!/usr/bin/env node
const yargs = require('yargs/yargs');
const moment = require('moment');

const args = yargs(require('yargs/helpers').hideBin(process.argv)).argv;

// console.log(args);
const date = new Date();
let result = '';

const getFormat = () =>
  args.y || args.year
    ? 'YYYY'
    : args.m || args.month
    ? 'MMMM'
    : args.d || args.date
    ? 'D'
    : 'YYYY-MM-DD HH:mm';

const getParam = () =>
  args.y ? 'years' : args.m ? 'months' : args.d ? 'days' : '';

const getValue = () =>
  args.y ? args.y : args.m ? args.m : args.d ? args.d : 0;

const currentDate = (date) => moment(date).format(getFormat());

const addDate = (date) =>
  moment(date).add(getValue(), getParam()).format('YYYY-MM-DD HH:mm');

const subDate = (date) =>
  moment(date).subtract(getValue(), getParam()).format('YYYY-MM-DD HH:mm');

const app = () => {
  switch (args._[0]) {
    case 'current':
      result = currentDate(date);
      break;
    case 'add':
      result = addDate(date);
      break;
    case 'sub':
      result = subDate(date);
      break;
    default:
      result = date;
  }
  console.log('Рузультат: ' + result);
};

app();
