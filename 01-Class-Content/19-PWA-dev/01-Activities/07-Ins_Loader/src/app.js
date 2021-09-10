/* eslint-disable */
const listEl = document.querySelector('#data-list');

const getData = (data, successRate = 0.98, maxLatencyMs = 1000) =>
  new Promise((resolve, reject) => {
    const successRoll = Math.random();
    // interval: [0, maxLatencyMs]
    const latency = Math.floor(Math.random() * (maxLatencyMs + 1));

    if (successRoll <= successRate) {
      setTimeout(() => resolve(data), latency);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      setTimeout(() => reject('API failed to return data'), latency);
    }
  });

// Mock API Call
const fetchData = async () => {
  const response = await getData([
    {
      id: 1,
      title: 'The Count of Monte Cristo',
    },
    {
      id: 2,
      title: 'The Colour of Magic',
    },
    {
      id: 3,
      title: 'Great Expectations',
    },
  ]);
  return response;
};

const renderData = async () => {
  // Create markup
  const books = await fetchData();
  // console.log(booksArray);
  // return booksArray;
  console.log(books);
  // eslint-disable-next-line array-callback-return
  books.map((book) => {
    console.log(book.title);
    // return booksList();
    const listItem = document.createElement('li');
    listItem.textContent = book.title;
    console.log(listEl);

    // const item = `<li class="item">${book.title}</li>`;
    listEl.appendChild(listItem);

  });
};
// const booksList = await booksArray.map((book) => {
//   const bookItem = `<li class="listItem">${book.title}</li>`;
//   listItem.appendChild(bookItem);
//   return booksList;
// });
// }

// listEl.innerHTML = `<ul>${booksArray
//   .map((wizard) => {
//     return `<li>${wizard}</li>`;
//   })
//   .join('')}</ul>`;

// renderData(fetchData());
// };

renderData();
