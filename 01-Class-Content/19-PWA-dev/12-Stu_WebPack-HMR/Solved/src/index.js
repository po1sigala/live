// import './css/jass.css';

const targetEl = document.querySelector('.flexbox');
console.log('🚀 - file: index.js - line 4 - targetEl', targetEl);
// get the articles
async function getDevArticles() {
  const response = await fetch('https://dev.to/api/articles');
  const articles = await response.json();
  return articles;
}

getDevArticles().then((articles) => {
  console.log(articles);
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
