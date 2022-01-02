import './css/style.css';
import { Workbox } from 'workbox-window';
import module1 from './js/module1';
import module2 from './js/module2';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register();
}
