const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const util = require('util');

const rl = readline.createInterface({ input, output });
const question = util.promisify(rl.question).bind(rl);

const answerRight = Math.floor(Math.random() * 101);
let answer;

const getAnswer = async (
  currentQuestion = `Загадано число в диапазоне от 0 до 100: ${answerRight}`
) => {
  try {
    answer = await question(`${currentQuestion} \n`);
    return answer;
  } catch (err) {
    console.error('Question rejected', err);
  }
};

const app = async () => {
  try {
    answer = await getAnswer();

    while (Number(answer) !== answerRight) {
      answer < answerRight
        ? await getAnswer('Больше ')
        : await getAnswer('Меньше ');
    }

    console.log(`Отгадано число: ${answer}`);
    rl.close();
  } catch (err) {
    console.error(err);
  }
};

app();
