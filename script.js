'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'CorrectNumber!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayBackgroundColor = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const displayNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //когда ничего не ввел
  if (!guess) {
    displayMessage('No number!');

    //когда выиграл в игру
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(secretNumber);
    displayBackgroundColor('#60b347');
    displayNumberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //когда значение неверно
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--; //score = score - 1;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayBackgroundColor('#222');
  displayNumberWidth('15rem');
});

//для добавления функций для какой либо из кнопок мы создаем для нее все с нуля. далее прописываем все очень грамотно, где-то с точкой, где-то без. смотрим пример выше. судя по всему все константы должны быть прописаны внутри функции еще раз, если мы хотим чтобы нажав на кнопку вся страничка обновилась, то есть пишем все параметры страницы заново, в данном случае такие как формула вычисления секретной цифры и количество попыток. так же в самых первых строках, где мы изначально задавли параметры мы меняем const на let, так как в дальнейшем они будут меняться. когда прописали эти базовые парметры страницы просто копируем то, что уже писали выше, для каждой отдельной графы на страничке, таких как место ввода цифры, счет, цвет задника, ширина угаданной цифры и так далее. и смотрим внимательно, для тескта пишем text.content, для значений value, для цвета и ширины style

//ниже описан более длинный вариант сценария, но с повторяющимися строками, выше набран код с минимальными повторениями. эта часть оставлена, как напоминание.

// когда значение выше нужного
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high!';
//     score--; //score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// //когда значение меньше нужного
// } else if (score < secretNumber) {
//   document.querySelector('.message').textContent = 'Too low!';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = 'You lost the game!'
//   document.querySelector('.score').textContent = 0;
// }
