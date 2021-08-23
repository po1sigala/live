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
    // TODO: load from indexedDB
    this.editor.on('ready', () => {
      this.editor.setValue(localStorage.getItem('content'));
    });

    this.editor.on('change', () => {
      // save the content of the editor
      localStorage.setItem('content', this.editor.getValue());
    });

    // read the content of the editor
    this.read = () => {
      return this.editor.getValue() || '';
    };

    // set the content of the editor
    // TODO: save to indexedDB when the editor doesn't have focus or the user is not editing
    this.save = (content) => {
      this.editor.setValue(content);
      localStorage.setItem('content', content);
    };
  }
}
