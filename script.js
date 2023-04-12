const { response } = require("express");

// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(url) {
  return fetch(url).then(response => response.json());
}
function testPromiseAll() {
  const start = Date.now();
  Promise.all(apiUrls.map(fetchData)).then(results => {
    const end = Date.now();
    const timeTaken = end - start;
    document.getElementById('output-all').innerText = `${timeTaken} ms`;
    console.log(results);
  })
  .catch(error => console.error(error));
}

function testPromiseAny() {
  const start = Date.now();
  Promise.any(urls.map(fetchData))
    .then(result => {
      const end = Date.now();
      const timeTaken = end - start;
      document.getElementById('output-any').innerText = `${timeTaken} ms`;
      console.log(result);
    })
    .catch(error => console.error(error));
}

testPromiseAll();
testPromiseAny();