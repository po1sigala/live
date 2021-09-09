import './css/style.css';

const targetEl = document.querySelector('.flexbox');
// get the articles
const getDevArticles = async () => {
  const response = await fetch('https://dev.to/api/articles');
  const articles = await response.json();
  return articles;
};

getDevArticles().then((articles) => {
  document.getElementById('articles').innerHTML = '';
  articles.forEach((article) => {
    const articleEl = document.createElement('article');

    articleEl.innerHTML = `
    <div class="article-container">
      <div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-image">
              <img src="${article.cover_image || ''}">
            </div>
            <div class="card-content white-text">
              <span class="card-title">${article.title}</span>
              <p>${article.description}</p>
            </div>
            <div class="card-action">
              <a href="${article.url}">Read more!</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    targetEl.appendChild(articleEl);
  });
});

// TODO: Add a comment describing the functionality of the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // TODO: Add a comment explaining what phase the service worker is in after the following line of code

    // TODO: Explain why the following file doesn't exist in our project
    navigator.serviceWorker.register('/service-worker.js');
  });
}
