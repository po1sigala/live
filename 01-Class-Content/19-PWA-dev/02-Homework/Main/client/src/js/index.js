import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
<<<<<<< HEAD:01-Class-Content/19-PWA-dev/02-Homework/Main/client/src/js/index.js
import './css/style.css';
=======
import '../css/style.css';
>>>>>>> 3039f2473 (Merge branch 'BCCOD-1754-Unit-19-HW-Build' of https://github.com/coding-boot-camp/fullstack-ground into BCCOD-1754-Unit-19-HW-Build):01-Class-Content/19-PWA-dev/02-Homework/Main/src/index.js

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}