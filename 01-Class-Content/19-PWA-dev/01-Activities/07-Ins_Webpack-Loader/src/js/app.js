/* eslint-disable */
const bookData = require('../../utils/bookData');
const listEl = document.querySelector('#data-list');


const getData = (data, successRate = 0.98, maxLatencyMs = 1000) =>
  new Promise((resolve, reject) => {
    const successRoll = Math.random();
    const latency = Math.floor(Math.random() * (maxLatencyMs + 1));

    if (successRoll <= successRate) {
      setTimeout(() => resolve(data), latency);
    } else {
      setTimeout(() => reject('API failed to return data'), latency);
    }
  });


// Mock API Call
const fetchData = async () => {
  const response = await getData(bookData);
  return response;
};

const renderData = async () => {
  // Create markup
  const books = await fetchData();
  console.log(books);
  books.map((book) => {
    console.log(book.title);
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    listItem.className = 'pt-2';
    console.log(listEl);
    listEl.appendChild(listItem);
  });
};

renderData();
