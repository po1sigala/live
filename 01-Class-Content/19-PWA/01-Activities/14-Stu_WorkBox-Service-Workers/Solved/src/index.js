import { Workbox } from 'workbox-window';
import './css/style.css';

const targetEl = document.querySelector('.flexbox');
// get the articles
const getDevArticles = async () => {
  const response = await fetch('https://dev.to/api/articles');
  const articles = await response.json();
  return articles;
};

// Logger method to help service worker events stand out in the console
const logger = (type, message, extra = '') => {
  const badge = `%c${type}`;
  const style =
    'color: white; background-color: orange; padding: 2px 5px; border-radius: 5px; font-weight: bold';
  console.log(badge, style, message, extra);
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
              <img crossorigin="anonymous" src="${article.cover_image || ''}">
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

// Register the service worker in the browser using the workbox-window library
// https://developers.google.com/web/tools/workbox/modules/workbox-window
if ('serviceWorker' in navigator) {
  // The new Workbox object is created here and accepts the location of the service worker file
  const wb = new Workbox('/service-worker.js');
  logger('Service Worker', 'GenerateSW Service Worker is ready', wb);

  // Call the register method on the service worker to register the service worker
  wb.register();
}
