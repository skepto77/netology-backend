import { join, dirname } from 'path';
import { tmpdir, homedir } from 'os';
import { promises } from 'fs';
import { stdin as input, stdout as output } from 'process';
import * as readline from 'node:readline';
import util from 'util';
import { isExist } from './helpers.js';

const rl = readline.createInterface({ input, output });
const question = util.promisify(rl.question).bind(rl);

const randomNumber = Math.floor(Math.random() * 3);
const fileName = process.argv.slice(2)[0];
const filePath = join(homedir(), `${fileName}.txt`);

const saveLog = async (data) => {
  if (await isExist(filePath)) {
    await promises.appendFile(filePath, `\n${JSON.stringify(data)}`);
    return;
  }
  await promises.writeFile(filePath, JSON.stringify(data));
};

const app = async () => {
  try {
    const answer = await question(`Отгадайте число. 1 или 2?: \n`);
    const isWin = Number(answer) === randomNumber;
    const data = { id: new Date().valueOf(), winner: isWin };
    await saveLog(data);
    console.log(isWin ? 'Вы выиграли' : 'Вы проиграли');
    rl.close();
  } catch (err) {
    console.error(err);
  }
};

app();
