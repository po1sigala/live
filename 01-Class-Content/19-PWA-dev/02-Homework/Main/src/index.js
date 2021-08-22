import { Workbox } from 'workbox-window';
import Editor from './editor';
import './css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const cm = new Editor();

// CodeMirror save method
cm.on('change', () => {
  const text = cm.getValue();
  localStorage.setItem('code', text);
  // const blob = new Blob([text], { type: 'text/plain' });
  // const url = URL.createObjectURL(blob);
  // const a = document.createElement('a');
  // a.href = url;
  // a.download = 'code.js';
  // a.click();
  // URL.revokeObjectURL(url);
});

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
