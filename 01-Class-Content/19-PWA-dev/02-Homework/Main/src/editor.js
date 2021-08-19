export class Editor {
  constructor() {
    this.update = [];
    this.editor = CodeMirror('#main', {
      lineNumbers: true,
      tabSize: 2,
      value: 'console.log("Hello, World");',
    });
  }

  setContent(content) {
      this.editor.dispatch({
          changes: {
              from: 0,
              to: this.editor.state.doc.toString().length,
              insert: content
          }
      })
  }
}
