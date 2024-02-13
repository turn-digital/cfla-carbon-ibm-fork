import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Quill from './quill/quill.min.js';

@customElement(`${prefix}-text-editor`)
export class TextEditor extends LitElement {
  //   initializeQuill() {
  //     // Initialize Quill editor
  //     var quill = new Quill(this.shadowRoot.getElementById('editor'), {
  //       theme: 'snow',
  //     });
  //   }

  render() {
    return html`
      <!-- Include stylesheet -->
      <link
        href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
        rel="stylesheet" />

      <!-- Create the editor container -->
      <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br /></p>
      </div>
    `;
  }
  constructor() {
    super();
  }

  firstUpdated() {
    this.init();
  }

  init() {
    let selector = this.shadowRoot.querySelector('#editor');
    var quill = new Quill(selector, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block', 'video'],
        ],
      },
      placeholder: 'Compose an epic...',
      theme: 'snow', // or 'bubble'
    });
  }
}
