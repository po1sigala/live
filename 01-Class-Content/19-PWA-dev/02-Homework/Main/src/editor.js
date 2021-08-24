import { putDb } from './database';

export default class {
  constructor() {
    this.update = [];
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: localData || 'console.log("Hello world!")',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // then the editor is ready, load the saved code
    this.editor.on('ready', () => {
      this.editor.setValue(
        localStorage.getItem('content') || 'console.log("Hello world!")'
      );
    });

    this.editor.on('change', () => {
      // save the content of the editor
      localStorage.setItem('content', this.editor.getValue());
    });

    this.editor.on('blur', () => {
      // save the content of the editor
      putDb(this.editor.getValue());
    });
  }
}
