// Show/hide helper functions
const show = (el) => (el.style.display = 'block');
const hide = (el) => (el.style.display = 'none');

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
      .then((data) => {
        posts = data;
        console.log('Success in getting posts:', data);
        if (!data || !data.length) {
          displayEmpty(author);
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get a blog post from a specific author
  const url = window.location.search;
  let authorId;
  if (url.indexOf('?author_id=') !== -1) {
    authorId = url.split('=')[1];
    getPosts(authorId);
  } else {
    getPosts();
  }

  // Front end call to DELETE a post
  const deletePost = (id) => {
    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getPosts(postCategorySelect.value));
  };

  // Create HTML rows for the blog container
  const initializeRows = () => {
    blogContainer.innerHTML = '';
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => blogContainer.append(post));
  };

  const createNewRow = (post) => {
    console.log('createNewRow -> post', post);

    let formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format('MMMM Do YYYY, h:mm:ss a');

    const newPostCard = document.createElement('div');
    newPostCard.classList.add('card');

    const newPostCardHeading = document.createElement('div');
    newPostCardHeading.classList.add('card-header');

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete', 'btn', 'btn-danger');

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT';
    editButton.classList.add('edit', 'btn', 'btn-info');

    const newPostTitle = document.createElement('h2');
    const newPostDate = document.createElement('small');
    const newPostAuthor = document.createElement('h5');

    newPostAuthor.textContent = `Written by: ${post.Author.name}`;
    newPostAuthor.style.float = 'right';
    newPostAuthor.style.color = 'blue';
    newPostAuthor.style.marginTop = '-10px';

    const newPostCardBody = document.createElement('div');
    newPostCardBody.classList.add('card-body');

    const newPostBody = document.createElement('p');
    newPostTitle.textContent = `${post.title} `;
    newPostBody.textContent = post.body;
    newPostDate.textContent = formattedDate;
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editButton);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.setAttribute('data-post', JSON.stringify(post));

    console.log('createNewRow -> newPostCard', newPostCard);
    return newPostCard;
  };

  const displayEmpty = (id) => {
    const query = window.location.search;
    let partial = '';
    if (id) {
      partial = ` for Author #${id}`;
    }

    blogContainer.innerHTML = '';
    const messageH2 = document.createElement('h2');
    messageH2.style.textAlign = 'center';
    messageH2.style.marginTop = '50px';
    messageH2.innerHTML = `No posts yet${partial}, navigate <a href='/cms${query}'>here</a> in order to get started.`;
    blogContainer.append(messageH2);
  };
});
