'use strict';

const url = 'https://jsonbox.io/box_1cb3264389eb29ba6a93';
const btnRead = document.getElementById('btnRead');
const p = console.log;

const onClickBtnRead = () => {
  p('押された');
  fetch(url)
    .then((res) => res.json())
    .then(p);
};

btnRead.onclick = onClickBtnRead;
