import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Quill from './quill/quill.js';
import '@carbon/web-components/es/components/button/button.js';
import TextBold16 from '@carbon/icons/lib/text--bold/16';
import TextItalic16 from '@carbon/icons/lib/text--italic/16';
import TextUnderline16 from '@carbon/icons/lib/text--underline/16';
import AlignLeft16 from '@carbon/icons/lib/text--align--left/16';
import AlignCenter16 from '@carbon/icons/lib/text--align--center/16';
import AlignRight16 from '@carbon/icons/lib/text--align--right/16';
import AlignJustify16 from '@carbon/icons/lib/text--align--justify/16';
import ListBullet16 from '@carbon/icons/lib/list--bulleted/16';
import ListNum16 from '@carbon/icons/lib/list--numbered/16';
import IndentMore16 from '@carbon/icons/lib/text--indent--more/16';
import IndentLess16 from '@carbon/icons/lib/text--indent--less/16';
import Link16 from '@carbon/icons/lib/link/16';
import Super16 from '@carbon/icons/lib/text--superscript/16';
import Sub16 from '@carbon/icons/lib/text--subscript/16';

import styles from './textEditor.scss';
interface Translation {
  [key: string]: string;
}
@customElement(`${prefix}-text-editor`)
export class TextEditor extends LitElement {
  private quill: Quill | null = null;
  // private currentFormat: string = 'paragraph'; // Default to paragraph format

  static get properties() {
    return {
      buttons: { type: Array },
      translations: { type: Object },
    };
  }
  translations: Translation = {};

  buttons = [{
    id: "bold",
    type: 'bold',
    icon: TextBold16,
    action: () => this.applyFormat('bold')
  },
  {
    id: "italic",
    type: 'italic',
    icon: TextItalic16, // Replace with your desired icon
    action: () => this.applyFormat('italic')
  },
  {
    id: "underline",
    type: 'underline',
    icon: TextUnderline16, // Replace with your desired icon
    action: () => this.applyFormat('underline')
  },
  {
    id: "align-left",
    type: 'alignLeft',
    icon: AlignLeft16, // Replace with your desired icon
    action: () => this.applyAlignment('left')
  },
  {
    id: "align-center",
    type: 'alignCenter',
    icon: AlignCenter16, // Replace with your desired icon
    action: () => this.applyAlignment('center')
  },
  {
    id: "align-right",
    type: 'alignRight',
    icon: AlignRight16, // Replace with your desired icon
    action: () => this.applyAlignment('right')
  },
  {
    id: "align-justify",
    type: 'alignJustify',
    icon: AlignJustify16, // Replace with your desired icon
    action: () => this.applyAlignment('justify')
  },
  {
    id: "unordered-list",
    type: 'unorderedList',
    icon: ListBullet16,
    action: () => this.toggleList('bullet')
  },
  {
    id: "ordered-list",
    type: 'orderedList',
    icon: ListNum16,
    action: () => this.toggleList('ordered')
  },
  {
    id: "indent",
    type: 'indent',
    icon: IndentMore16,
    action: () => this.indent()
  },
  {
    id: "outdent",
    type: 'outdent',
    icon: IndentLess16,
    action: () => this.outdent()
  },{
    id: "insert-link",
    type: 'textLink',
    icon: Link16,
    action: () => {
      const url = prompt('Enter the URL:'); // Prompt the user to enter the URL
      if (url) {
        this.insertLink(url);
      }
    }
  },
  {
    id: "superscript",
    type: 'superscript',
    icon: Super16,
    action: () => this.toggleSuperscript()
  },
  {
    id: "subscript",
    type: 'subscript',
    icon: Sub16,
    action: () => this.toggleSubscript()
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
              title="${this.translations[button.type]}" 
              size="sm"
              tooltip-text="${this.translations[button.type]}" 
              tooltip-position="top" 
              tooltop-alignment="center"
              icon="${button.icon}"
              @click="${() => this.handleButtonClick(button)}">
              ${button?.icon ? button.icon({ slot: 'icon' }) : ""}
            </cds-button>
          `
        )}
        <!-- Select dropdown for heading and paragraph -->
          <select @change="${this.handleSelectChange}">
            <option value="paragraph">Paragraph</option>
            <option value="heading1">Heading 1</option>
            <option value="heading2">Heading 2</option>
            <option value="heading3">Heading 3</option>
          </select>

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
    const selector = this.shadowRoot?.querySelector('#editor');
    if (selector) {
      this.quill = new Quill(selector, {
        modules: {
          toolbar: false,
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      });
    }

    // Other initialization code
  this.quill.on('text-change', () => {
    this.updateButtonStates();
  });
  }

  getCurrentFormatting() {
    const selection = this.quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      return this.quill.getFormat(index, length);
    }
    return {};
  }
  updateButtonStates() {
    const formatting = this.getCurrentFormatting();
    const buttons = this.buttons;
    buttons.forEach(button => {
      const isActive = formatting[button.id]; // Use button.format to represent the format
      const buttonElement = this.shadowRoot?.getElementById(button.id);
      if (buttonElement) {
        buttonElement.classList.toggle('active', isActive);
      }
    });
  }

  applyAlignment(align) {
    if (this.quill) {
      const selection = this.quill.getSelection();
    if (selection) {
      this.quill.format('align', align);
    } else {
      // No active selection, apply alignment to entire editor content
      this.quill.root.style.textAlign = align;
    }
    }
  }
  
  applyFormat(format: 'bold' | 'italic' | 'underline') {
    // if (this.quill) {
    //   const selection = this.quill.getSelection();
    //   if (selection) {
    //     const [line, offset] = this.quill.getLine(selection.index);
    //     if (line) {
    //       if (format.startsWith('heading')) {
    //         const headerSize = parseInt(format.substring(7)); // Extract the heading level from the format string
    //         this.quill.format('header', headerSize);
    //       } else {
    //         // If the format is not a heading, remove any existing header format
    //         this.quill.format('header', false);
    //       }
    //     }
    //   } else {
    //     console.error('No text selected');
    //   }
    // }
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        this.quill.format(format, !this.quill.getFormat()[format]);
      } else {
        console.error('No text selected');
      }
    }
  }

  applyHeading(format) {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        switch (format) {
          case 'paragraph':
            this.quill.format('header', false);
            break;
          case 'heading1':
            this.quill.format('header', 1);
            break;
          case 'heading2':
            this.quill.format('header', 2);
            break;
          case 'heading3':
            this.quill.format('header', 3);
            break;
          default:
            console.error('Invalid format:', format);
        }
      } else {
        console.error('No text selected');
      }
    }
  }
  toggleList(listType) {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const format = this.quill.getFormat(selection.index, selection.length);
        if (format['list']) {
          // If the selection is already in a list, toggle the list type
          this.quill.format('list', false);
        } else {
          // If the selection is not in a list, apply the list type
          this.quill.format('list', listType);
        }
      } else {
        // If there's no selection, apply the list type to the entire editor content
        this.quill.format('list', listType);
      }
    }
  }

  indent() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const format = this.quill.getFormat(selection.index, selection.length);
        const currentIndent = parseInt(format['indent'] || 0);
        const newIndent = currentIndent + 1;
        this.quill.format('indent', newIndent);
      }
    }
  }
  
  outdent() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const format = this.quill.getFormat(selection.index, selection.length);
        const currentIndent = parseInt(format['indent'] || 0);
        const newIndent = Math.max(0, currentIndent - 1);
        this.quill.format('indent', newIndent);
      }
    }
  }

  insertLink(url) {
    if (this.quill && url) {
      // const defaultClass = 'cds--link'; // Default class to apply
      const selection = this.quill.getSelection();
      if (selection) {
        // Insert the link
        this.quill.format('link', url);
        // Get all link elements within the selection
        const linkElements = this.quill.root.querySelectorAll(`a[href="${url}"]`);
        linkElements.forEach(linkElement => {
          // Apply default class to the link element
          // linkElement.classList.add(defaultClass);
          // Add additional attributes to the link element if needed
          linkElement.setAttribute('target', '_blank');
          linkElement.setAttribute('rel', 'noopener');
        });
      }
    }
  }

  toggleSuperscript() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const { index, length } = selection;
        const format = this.quill.getFormat(index, length);
        if (format['script'] === 'super') {
          this.quill.formatText(index, length, { script: false }, 'user');
        } else {
          this.quill.formatText(index, length, { script: 'super' }, 'user');
        }
      }
    }
  }
  
  toggleSubscript() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const { index, length } = selection;
        const format = this.quill.getFormat(index, length);
        if (format['script'] === 'sub') {
          this.quill.formatText(index, length, { script: false }, 'user');
        } else {
          this.quill.formatText(index, length, { script: 'sub' }, 'user');
        }
      }
    }
  }

  setupFullscreen() {
    const fullscreenButton = this.shadowRoot?.querySelector('#fullscreenButton');
    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', this.toggleFullscreen.bind(this));
    }
  }

  toggleFullscreen() {
    const editorContainer = this.shadowRoot?.querySelector('#cc-text-editor');

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
      this.updateButtonStates(); // Update button states after action
    }
  }

 handleSelectChange(event) {
    const value = event.target.value;
    this.applyHeading(value);
  }

  static styles = styles
}
