export default class {
  constructor() {
    this.update = [];

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    } else {
      this.editor = CodeMirror(document.querySelector('#main'), {
        value: '',
        mode: 'javascript',
        theme: 'monokai',
        lineNumbers: true,
        lineWrapping: true,
        autofocus: true,
      });
    }
  }

  setContent(content) {
    this.editor.dispatch({
      changes: {
        from: 0,
        to: this.editor.state.doc.toString().length,
        insert: content,
      },
    });
  }
}
