import { Workbox } from 'workbox-window';

const main = document.querySelector('#main');

main.innerHTML = '';

try {
  const editor = CodeMirror(main, {
    lineNumbers: true,
    tabSize: 2,
    value: 'console.log("Hello, World");',
  });

  console.log(editor);
  editor;
  console.log(editor.getValue());

  editor.on('change', (editor) => {
    const text = editor.doc.getValue();
    console.log(text);
  });
} catch (err) {
  console.error(err);
  main.innerHTML = `<div class="loading-container">
                      <div class="loading-spinner"></div>
                    </div>`;
}

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/src-sw.js');

  wb.register();
}
