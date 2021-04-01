'use strict';

const p1 = document.getElementById('p1');

const p = (arg) => {
  p1.innerHTML += JSON.stringify(arg) + '<br>';
};

const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_week/130000.json';

const asyncExtractStatusAndJson = async (res) => ({
  status: res.status,
  json: await res.json(),
});

const getStatusCodeAndJson = (url) => fetch(url).then(asyncExtractStatusAndJson);

const main = async () => {
  const result = await getStatusCodeAndJson(url);

  console.log(result);
  p(result);
};

main();
