// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const blogContainer = document.querySelector('.blog-container');
  const postCategorySelect = document.getElementById('category');

  // TODO find a spot for these
  // Click events for the edit and delete buttons
  // $(document).on('click', 'button.delete', handlePostDelete);
  // $(document).on('click', 'button.edit', handlePostEdit);

  // Variable to hold our posts
  let posts;

  // Get a blog post from a specific author
  const url = window.location.search;
  let authorId;
  if (url.indexOf('?author_id=') !== -1) {
    authorId = url.split('=')[1];
    getPosts(authorId);
  } else {
    getPosts();
  }

  const getPosts = (author) => {
    authorId = author || '';
    if (authorId) {
      authorId = `/?author_id=${authorId}`;
    }

    fetch(`/api/posts${authorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((posts) => {
        console.log('Success in getting posts:', posts);
        if (!posts || !posts.length) {
          displayEmpty(author);
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error('Error:', error));
  };
});
