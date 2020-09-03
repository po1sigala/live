// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const nameInput = document.getElementById('author-name');
  const authorList = document.querySelector('tbody');
  const authorContainer = document.querySelector('.author-container');

  // TODO: Find good spot for these
  // $(document).on('submit', '#author-form', handleAuthorFormSubmit);
  // $(document).on('click', '.delete-author', handleDeleteButtonPress);

  // Get the list of authors
  getAuthors();

  // Create an author
  const insertAuthor = (authorData) => {
    fetch('/api/authors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorData),
    })
      .then(getAuthors)
      .catch((err) => console.error(err));
  };

  // Handle when the author form is submitted
  const handleAuthorFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert('Please provide an author name');
    }

    insertAuthor({
      name: nameInput.value.trim(),
    });
  };

  // Create list row for authors
  const createAuthorRow = ({ authorData }) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-author', JSON.stringify(authorData));

    const td = document.createElement('td');
    td.textContent = authorData.name;
    tr.appendChild(td);

    const lengthTd = document.createElement('td');
    if (authorData.Posts) {
      lengthTd.textContent = authorData.Posts.length;
    } else {
      lengthTd.textContent = '0';
    }
    tr.appendChild(lengthTd);
  };
});
