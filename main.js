'use strict';

const btnRead = document.getElementById('btnRead');
const btnWrite = document.getElementById('btnWrite');
const inputWrite = document.getElementById('inputWrite');
const url = 'https://jsonbox.io/box_1cb3264389eb29ba6a93';
const p = console.log;

const onClickBtnRead = () => {
  p('押された');
  fetch(url)
    .then((res) => res.json())
    .then(p);
};

const onClickBtnWrite = () => {
  const text = inputWrite.value;
  p(text);
};

btnRead.onclick = onClickBtnRead;
btnWrite.onclick = onClickBtnWrite;
