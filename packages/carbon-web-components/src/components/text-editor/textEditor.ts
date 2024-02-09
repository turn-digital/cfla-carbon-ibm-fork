import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Quill from './quill/quill.min.js';
import '@carbon/web-components/es/components/button/button.js';
import TextBold16 from '@carbon/icons/lib/text--bold/16';
import TextItalic16 from '@carbon/icons/lib/text--italic/16';
import TextUnderline16 from '@carbon/icons/lib/text--underline/16';
import AlignLeft16 from '@carbon/icons/lib/align--horizontal-left/16';
import AlignCenter16 from '@carbon/icons/lib/align--horizontal-center/16';
import AlignRight16 from '@carbon/icons/lib/align--horizontal-right/16';


import styles from './textEditor.scss';

@customElement(`${prefix}-text-editor`)
export class TextEditor extends LitElement {
  private quill: Quill | null = null;
  // private currentFormat: string = 'paragraph'; // Default to paragraph format

  static get properties() {
    return {
      buttons: { type: Array },
    };
  }

  buttons = [{
    id: "bold",
    title: 'Bold',
    icon: TextBold16,
    action: () => this.applyFormat('bold')
  },
  {
    id: "italic",
    title: 'Italic',
    icon: TextItalic16, // Replace with your desired icon
    action: () => this.applyFormat('italic')
  },
  {
    id: "underline",
    title: 'Underline',
    icon: TextUnderline16, // Replace with your desired icon
    action: () => this.applyFormat('underline')
  },
  {
    id: "align-left",
    title: 'left',
    icon: AlignLeft16, // Replace with your desired icon
    action: () => this.applyAlignment('left')
  },
  {
    id: "align-center",
    title: 'center',
    icon: AlignCenter16, // Replace with your desired icon
    action: () => this.applyAlignment('center')
  },
  {
    id: "align-right",
    title: 'right',
    icon: AlignRight16, // Replace with your desired icon
    action: () => this.applyAlignment('right')
  }]; 

  render() {
    return html`
      <!-- Include stylesheet -->
      <div id="cc-text-editor" class="cc-text-editor">
        <!-- Create the editor container -->
        <div id="editor"></div>

        <!-- Carbon Web Components buttons outside of the editor -->

        <div class="cc-text-editor__toolbar">
          ${this.buttons.map(
            button => html`
            <cds-button 
              id="${button.id}" 
              kind="ghost" 
              title="${button.title}" 
              size="sm"
              tooltip-text="${button.title}" 
              tooltip-position="top" 
              tooltop-alignment="center"
              icon="${button.icon}"
              @click="${() => this.handleButtonClick(button)}">
              ${button?.icon ? button.icon({ slot: 'icon' }) : ""}
            </cds-button>
          `
        )}
        <!-- Select dropdown for heading and paragraph -->
        <!-- <select @change="${this.handleSelectChange}">
          <option value="paragraph">Paragraph</option>
          <option value="heading1">Heading 1</option>
          <option value="heading2">Heading 2</option>
          <option value="heading3">Heading 3</option>
        </select>-->

          <cds-button 
              id="fullscreenButton" 
              kind="ghost" 
              title="Izvērst uz pilnekrānu" 
              size="sm"
              tooltip-text="Izvērst uz pilnekrānu" 
              tooltip-position="top" 
              tooltop-alignment="center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>Izvērst uz pilnekrānu</title><polygon points="22 16 24 16 24 8 16 8 16 10 22 10 22 16"/><polygon points="8 24 16 24 16 22 10 22 10 16 8 16 8 24"/><path d="M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26.0012L26,6Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
          </cds-button>
          <!-- Add other Carbon buttons as needed -->
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.init();
    this.setupFullscreen();
  }

  init() {
    const selector = this.shadowRoot.querySelector('#editor');
    if (selector) {
      this.quill = new Quill(selector, {
        modules: {
          toolbar: false
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      });
    }

    // this.quill.on('selection-change', (range, oldRange, source) => {
    //   if (range) {
    //     const formats = this.quill.getFormat(range.index, range.length);
    //     if (formats.header) {
    //       this.currentFormat = `heading${formats.header}`;
    //     } else {
    //       this.currentFormat = 'paragraph';
    //     }
    //     this.requestUpdate();
    //   }
    // });
  }
  applyAlignment(align) {
    if (this.quill) {
      this.quill.format('align', align);
    }
  }
  
  applyFormat(format: 'bold' | 'italic' | 'underline') {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const [line, offset] = this.quill.getLine(selection.index);
        if (line) {
          if (format.startsWith('heading')) {
            const headerSize = parseInt(format.substring(7)); // Extract the heading level from the format string
            this.quill.format('header', headerSize);
          } else {
            // If the format is not a heading, remove any existing header format
            this.quill.format('header', false);
          }
        }
      } else {
        console.error('No text selected');
      }
    }
    // if (this.quill) {
    //   const selection = this.quill.getSelection();
    //   if (selection) {
    //     this.quill.format(format, !this.quill.getFormat()[format]);
    //   } else {
    //     console.error('No text selected');
    //   }
    // }
  }

  setupFullscreen() {
    const fullscreenButton = this.shadowRoot.querySelector('#fullscreenButton');
    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', this.toggleFullscreen.bind(this));
    }
  }

  toggleFullscreen() {
    const editorContainer = this.shadowRoot.querySelector('#cc-text-editor');

    if (editorContainer && !document.fullscreenElement) {
      editorContainer.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  handleButtonClick(button) {
    if (button.action) {
      button.action();
    }
  }

  handleSelectChange(event) {
    const value = event.target.value;
    this.applyFormat(value);
  }

  static styles = styles
}
