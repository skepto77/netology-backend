import { join } from 'path';
import { homedir } from 'os';
import { promises } from 'fs';
import { isExist } from './helpers.js';

const logFileName = process.argv.slice(2)[0];

const filePath = join(homedir(), `${logFileName}.txt`);

const app = async () => {
  try {
    if (await isExist(filePath)) {
      const file = await promises.readFile(filePath, 'utf8');

      const data = file.split('\n').map((item) => JSON.parse(item));

      const countOfGames = data.length;
      const wonGames = data.filter((item) => item.winner === true).length;
      const lostGames = data.length - wonGames;

      console.log(`
      Общее количество партий: ${countOfGames}\n
      Количество выигранных партий: ${wonGames}\n
      Количество проигранных партий: ${lostGames}\n
      Процентное соотношение выигранных партий: ${
        (wonGames / countOfGames) * 100
      }%
      `);
      process.exit(1);
    } else {
      console.log(`По пути ${filePath} не найден файл с логом`);
      process.exit(1);
    }
  } catch (err) {
    console.error(err);
  }
};

app();
