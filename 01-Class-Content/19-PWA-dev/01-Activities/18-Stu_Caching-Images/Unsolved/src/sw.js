import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// TODO: import ExpirationPlugin

precacheAndRoute(self.__WB_MANIFEST);

const cacheName = 'static-resources';

const matchCallback = ({ request }) => {
  return (
    // CSS
    request.destination === 'style' ||
    // JavaScript
    request.destination === 'script'
  );
};

registerRoute(
  // TODO: Fix the string we are checking for
  ({ request }) => request.destination === 'test',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  matchCallback,
  new StaleWhileRevalidate({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
