const { getData } = require('./getData');
const bookData = require('./bookData');

const listEl = document.querySelector('#data-list');

// Mock API Call
const fetchData = async () => {
  const response = await getData(bookData);
  return response;
};

const renderData = async () => {
  // Create markup
  const books = await fetchData();
  books.map((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    listItem.className = 'pt-2';
    listEl.appendChild(listItem);
    return true;
  });
};

renderData();
