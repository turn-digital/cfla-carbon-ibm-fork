import { prefix } from '../../globals/settings';
import { html, LitElement,property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
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
import Clear16 from '@carbon/icons/lib/text--clear-format/16';
import Undo16 from '@carbon/icons/lib/undo/16';
import Redo16 from '@carbon/icons/lib/redo/16';
// import FitScreen16 from '@carbon/icons/lib/fit-to-screen/16';
import Send16 from '@carbon/icons/lib/send--filled/16';
import styles from './textEditor.scss';

import {applyAlignment, applyFormat, indent, outdent, clearFormatting, applyUndo, applyRedo} from "./textEditorToolbarAction";

interface Translation {
  [key: string]: string;
}
interface UserMeta {
  [key: string]: string;
}
interface TextEditorProps {
  onTextChangedOutsideEditor: () => void;
}

@customElement(`${prefix}-text-editor`)


export class TextEditor extends LitElement {
  @property({ type: String }) toolbarType: string = 'full';
  @property({ type: Number }) textLength: number = 0; // Track the length of the entered text
  @property({ type: Object }) props: TextEditorProps = { onTextChangedOutsideEditor: () => {} };
  @property({ type: Boolean }) isReadOnly: boolean = false;
  @property({ type: Boolean }) isClickable: boolean = false;
  @property({ type: String }) value: string = '';

  private quill: Quill | null = null;
  private isTextChanged = false;

  // Define button configurations outside of the class
  private buttonConfigurations = {
    bold: { id: "bold", type: 'bold', icon: TextBold16, action: () => applyFormat(this.quill, 'bold') },
    italic: { id: "italic", type: 'italic', icon: TextItalic16, action: () => applyFormat(this.quill, 'italic') },
    underline: {id: "underline", type: 'underline',icon: TextUnderline16, action: () => applyFormat(this.quill, 'underline')},
    alignLeft: {id: "align-left",      type: 'alignLeft',      icon: AlignLeft16,action: () => applyAlignment(this.quill, 'left')},
    alignCenter: {id: "align-center",type: 'alignCenter',icon: AlignCenter16,action: () => applyAlignment(this.quill, 'center')},
    alignRight: {id: "align-right",type: 'alignRight',icon: AlignRight16, action: () => applyAlignment(this.quill, 'right')},
    alignJustify: {id: "align-justify",type: 'alignJustify',icon: AlignJustify16, action: () => applyAlignment(this.quill, 'justify')},
    unorderedList: {id: "unordered-list",type: 'unorderedList',icon: ListBullet16,action: () => this.toggleList('bullet')},
    orderedList: {id: "ordered-list",type: 'orderedList',icon: ListNum16,action: () => this.toggleList('ordered')},
    indent: {id: "indent",type: 'indent',icon: IndentMore16,action: () => indent(this.quill)},
    outdent: {id: "outdent",type: 'outdent',icon: IndentLess16,action: () => outdent(this.quill)},
    textLink: { id: "insert-link",type: 'textLink',icon: Link16,action: () => {const url = prompt('Enter the URL:');if (url) {this.insertLink(url);}}},
    superscript: {id: "superscript",type: 'superscript',icon: Super16,action: () => this.toggleSuperscript()},
    subscript: {id: "subscript",type: 'subscript',icon: Sub16,action: () => this.toggleSubscript()},
    clearFormatting: {id: "clear-formatting",type: 'clearFormatting',icon: Clear16,action: () => clearFormatting(this.quill)},
    undo: {id: "undo",type: 'undo',icon: Undo16,action: () => applyUndo(this.quill)},
    redo: {id: "redo",type: 'redo',icon: Redo16,action: () => applyRedo(this.quill)}
 // fullScreen :{ // something is not working correct if using here
  //   id: "fullScreen",
  //   type: 'fullScreen',
  //   icon: FitScreen16,
  //   action: () => this.setupFullscreen()
  // }
  };

  // set buttons visibility by toolbar type
  private buttonsSets = {
    full: [
      this.buttonConfigurations.bold,
      this.buttonConfigurations.italic,
      this.buttonConfigurations.underline,
      this.buttonConfigurations.alignLeft,
      this.buttonConfigurations.alignCenter,
      this.buttonConfigurations.alignRight,
      this.buttonConfigurations.alignJustify,
      this.buttonConfigurations.unorderedList,
      this.buttonConfigurations.orderedList,
      this.buttonConfigurations.indent,
      this.buttonConfigurations.outdent,
      this.buttonConfigurations.textLink,
      this.buttonConfigurations.superscript,
      this.buttonConfigurations.subscript,
      this.buttonConfigurations.clearFormatting,
      this.buttonConfigurations.undo,
      this.buttonConfigurations.redo
    ],
    half: [
      this.buttonConfigurations.bold,
      // Include other buttons as needed...
    ],
    minimal: [
      this.buttonConfigurations.bold,
      // Include other minimal set of buttons...
    ],
  };

  static get properties() {
    return {
      buttonConfigurations: { type: Array },
      translations: { type: Object },
      userMeta: { type: Object },
      textLimit: { type: Number },
      isReadOnly: { type: Boolean },
      isClickable: { type: Boolean },
      value: { type: String },
    };
  }

  // Initialize with a default value
  translations: Translation = {};
  userMeta: UserMeta = {};
  textLimit: number = 0;
  
  connectedCallback() {
    // Call the parent class connectedCallback method
    super.connectedCallback();
    
    // Add an event listener for the 'cds-dropdown-selected' event, which is emitted when a dropdown item is selected
    // Bind 'this' context to the event handler function
    this.addEventListener('cds-dropdown-selected', this.handleDropdownSelected);
  
    // Add a global click event listener to handle clicks outside of the editor
    // Bind 'this' context to the handleEditorClickOutSide event handler function
    document.addEventListener('click', this.handleEditorClickOutSide.bind(this));
  }
  
  disconnectedCallback() {
    // Call the parent class disconnectedCallback method
    super.disconnectedCallback();
    
    // Remove the event listener for the 'cds-dropdown-selected' event when the component is disconnected
    this.removeEventListener('cds-dropdown-selected', this.handleDropdownSelected);
  
    // Remove the global click event listener when the component is disconnected
    // Bind 'this' context to the handleEditorClickOutSide event handler function
    document.removeEventListener('click', this.handleEditorClickOutSide.bind(this));
  }

  handleDropdownSelected(event) {
    const selectedItem = event.detail.item;
    const selectedValue = selectedItem.getAttribute('value');
    this.applyHeading(selectedValue);

    // Check the current format at the cursor position
    const currentFormat = this.getCurrentFormat();
    if (!currentFormat || !currentFormat['header']) {
      // If the cursor is not in a heading, update the dropdown to the paragraph value
      this.updateDropdownValue('paragraph');
    }
  }

  updateDropdownValue(newValue) {
    const dropdown = this.shadowRoot?.querySelector('cds-dropdown');
    if (dropdown) {
      // @ts-ignore
      dropdown.value = newValue;
      this.requestUpdate();
    }
    // this.toolbarDropdownValue = value;
  }

  getCurrentFormat() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        const [line] = this.quill.getLine(selection.index);
        if (line) {
          return line.formats();
        }
      }
    }
    return null;
  }
  render() {
    // Use the buttonsSets object to get the desired set of buttons based on toolbarType
    const buttons = this.buttonsSets[this.toolbarType];
    const isOverLimits = this.textLength >this.textLimit;
    return html`
      <!-- Include stylesheet -->
      <div id="cc-text-editor" class="cc-text-editor ${isOverLimits ? "cc-text-editor--text-limit": ""}">
        <div class="cc-text-editor__head">
          <div class="cc-text-editor__head-title">${this.translations.title}</div>
          ${this.isReadOnly ? html ``: 
            html `
              <div class="cc-text-editor__head-content">
                <!--<span class="cc-text-editor__head-status">${this.translations.statusSave}</span>-->
                <span class="cc-text-editor__head-limit">${this.textLength}/${this.textLimit}</span>
              </div>
            `
          }
        </div>

        ${this.isReadOnly ?
          html `
          <div class="text-editor">${unsafeHTML(this.value)}</div>
          `
        : html `
          <!-- Create the editor container -->
          <div id="editor">${this.value}</div>
          
          <!-- Carbon Web Components buttons outside of the editor -->
          <div class="cc-text-editor__toolbar">

            <!-- Select dropdown for heading and paragraph -->
            <cds-dropdown value="paragraph" type="inline" size="sm" @cds-change="${this.handleDropdownSelected}">
              <cds-dropdown-item value="paragraph">${this.translations.paragraph}</cds-dropdown-item>
              <cds-dropdown-item value="heading1">${this.translations.heading1}</cds-dropdown-item>
              <cds-dropdown-item value="heading2">${this.translations.heading2}</cds-dropdown-item>
              <cds-dropdown-item value="heading3">${this.translations.heading3}</cds-dropdown-item>
              <cds-dropdown-item value="heading4">${this.translations.heading4}</cds-dropdown-item>
              <cds-dropdown-item value="heading5">${this.translations.heading5}</cds-dropdown-item>
              <cds-dropdown-item value="heading6">${this.translations.heading6}</cds-dropdown-item>
            </cds-dropdown>

            ${buttons.map(
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

            <cds-button 
              id="fullscreenButton" 
              kind="ghost" 
              title="${this.translations.fullScreen}" 
              size="sm"
              tooltip-text="${this.translations.fullScreen}" 
              tooltip-position="top" 
              tooltop-alignment="center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>Izvērst uz pilnekrānu</title><polygon points="22 16 24 16 24 8 16 8 16 10 22 10 22 16"/><polygon points="8 24 16 24 16 22 10 22 10 16 8 16 8 24"/><path d="M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26.0012L26,6Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
            </cds-button> 
            
            ${this.isClickable ? 
              html`
                <cds-button 
                  id="send" 
                  kind="ghost" 
                  title="${this.translations.send}" 
                  size="sm"
                  tooltip-text="${this.translations.send}" 
                  tooltip-position="top" 
                  tooltop-alignment="center"
                  icon="${Send16}"
                  @click="${() => this.props.onTextChangedOutsideEditor()}">
                  ${Send16({ slot: 'icon' })}
                </cds-button>
              `
              : ""}
          </div>
        `}

        ${isOverLimits ? html `<p class="cc-text-editor__limit">${this.translations.textLimit}</p>`: ""}
        
        ${this.userMeta?.name ? 
          html `<p class="cc-text-editor__meta">${this.userMeta.name} ${this.userMeta.date}</p>
          `: ""
        }
      </div>
    `;
  }

  firstUpdated() {
    this.init();
    this.setupFullscreen();
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('textLength')) {
      this.dispatchEvent(new CustomEvent('text-length-changed', { detail: { textLength: this.textLength } }));
    }
  }

  // main quill initialization and giving some events
  init() {
    const selector = this.shadowRoot?.querySelector('#editor');
    if (selector) {
      this.quill = new Quill(selector, {
        modules: {
          toolbar: false,
        },
        theme: 'snow',
        readOnly: this.isReadOnly, // Set readonly mode based on the property value
      });

     // Manually handle tab key press event
      selector.addEventListener('keydown', event => {
        const TAB_KEY_CODE = 9;
        const selection = this.quill?.getSelection();
        //@ts-ignore
        if (event.shiftKey && event.keyCode === TAB_KEY_CODE && selection) {
          // Prevent the default behavior of shift + tab
          event.preventDefault();
          // Check if there's a tab character in the selection
          const cursorIndex = selection.index;
          const textBeforeCursor = this.quill?.getText(0, cursorIndex);
          const tabExists = textBeforeCursor?.indexOf('\t') !== -1;
          const text = this.quill?.getText(selection.index, selection.length);
          const tabIndex = text?.indexOf('\t');
          // Get the contents of the line before the cursor
          // const lineBeforeCursor = this.quill?.getText(0, cursorIndex);
          // // Find the last occurrence of '\n' to determine the start of the previous line
          // const lastNewLineIndex = lineBeforeCursor?.lastIndexOf('\n');
          // // Calculate the position to move the cursor to (start of the previous line)
          // const newCursorPosition = lastNewLineIndex !== -1 ? lastNewLineIndex + 1 : 0;
      
          if (tabExists) {
              // Remove the tab character
              this.quill?.deleteText(selection.index + tabIndex, 1, 'user');
          }  
          //  it is possible to shift+tab get outside of box, but need to do more hacks
          // else {
          //   this.quill?.setSelection(newCursorPosition, newCursorPosition, 'user');
          // }
          //@ts-ignore
      } else if (event.keyCode === TAB_KEY_CODE) {
          // Prevent the default tab behavior
          event.preventDefault();
          // Insert a tab character at the current cursor position
          const selection = this.quill?.getSelection();
          if (selection) {
            this.quill?.insertText(selection.index, '\t');
          }
        }

        // Check if Ctrl key is pressed (event.ctrlKey) along with the corresponding key
        //@ts-ignore
        if (event.ctrlKey) {
          //@ts-ignore
          switch (event.keyCode) {
            case 66: // Ctrl + B for bold
              event.preventDefault();
              applyFormat(this.quill, 'bold');
              break;
            case 73: // Ctrl + I for italic
              event.preventDefault();
              applyFormat(this.quill, 'italic');
              break;
            case 85: // Ctrl + U for underline
              event.preventDefault();
              applyFormat(this.quill, 'underline');
              break;
            case 90: // Ctrl + Z for undo
              event.preventDefault();
              applyUndo(this.quill);
              break;
            case 89: // Ctrl + Y for redo
              event.preventDefault();
              applyRedo(this.quill);
              break;
            case 83: // Ctrl + S for save
              event.preventDefault();
              // Call the save method here
              break;
            case 88: // Ctrl + X for cut
              event.preventDefault();
              document.execCommand('cut');
              break;
            case 67: // Ctrl + C for copy
              event.preventDefault();
              document.execCommand('copy');
              break;
            // case 86: // Ctrl + V for paste
            // if added this, then not working correctly by default is working
            //   event.preventDefault();
            //   document.execCommand('paste');
            //   break;
            case 65: // Ctrl + A for select all
              event.preventDefault();
              document.execCommand('selectAll');
              break;
            default:
              break;
          }
        }
      });
    }

    this.quill.on('text-change', () => {
      this.isTextChanged = true;
      this.textLength = (this.quill?.getText() || '').trim().length;
      this.requestUpdate();
    });

    // Add click event listener to the entire editor component
    this.shadowRoot?.addEventListener('click', this.handleEditorClickOutSide.bind(this));

    // Ensure value is set after Quill initialization
    this.valueChanged(this.value);
  }

  valueChanged(newValue: string) {
    this.value = newValue ?? '';
    if (this.quill) {
      // Use Quill's setText method to set the value
      this.quill.root.innerHTML = this.value;
    }
  }
  handleEditorClickOutSide(event) {
    // Get the bounding rectangle of the editor component
    const editor = this.shadowRoot?.getElementById('cc-text-editor');
    const editorRect = editor?.getBoundingClientRect();

    const quill = this.quill;

    // Check if Quill instance is available
    // to check where is user targeted cursor, if in the text P , then show p, if h2, then in drop show h2
    if (quill) {
        // Get the cursor position
        const cursorPosition = quill.getSelection()?.index;

        // Check if cursor position is available
        if (cursorPosition !== undefined && cursorPosition !== null) {
            // Get the line format at the cursor position
            const lineFormat = quill.getFormat(cursorPosition);

            // Check if the cursor is in a heading
            if (lineFormat && lineFormat['header']) {
                // Update the dropdown value to the corresponding heading level
                const headingLevel = lineFormat['header'];
                this.updateDropdownValue(`heading${headingLevel}`);
            } else {
                // Cursor is in a paragraph, update the dropdown value to 'paragraph'
                this.updateDropdownValue('paragraph');
            }
        }
    }
  
    // if component is not clickable (no send btn) then allow functionality for click outside of component 
    if (!this.isClickable) {
       // Check if the click event occurred within the editor component
      const isClickWithinEditor = editorRect &&
        event.clientX >= editorRect.left &&
        event.clientX <= editorRect.right &&
        event.clientY >= editorRect.top &&
        event.clientY <= editorRect.bottom;

      // Check if the click event occurred on a toolbar button
      const toolbar = this.shadowRoot?.querySelector('.cc-text-editor__toolbar');
      const isToolbarButton = toolbar?.contains(event.target);

      // Check if the click event occurred within a dropdown select element
      const selectDropdown = this.shadowRoot?.querySelector('cds-dropdown');
      const isSelectDropdown = selectDropdown?.contains(event.target);

      // Check if the click event occurred outside of the editor, toolbar, and dropdown
      const isClickOutsideEditor = !isClickWithinEditor && !isToolbarButton && !isSelectDropdown;

      // If the text has been changed and the click occurred outside of the editor,
      // call the callback function provided as a property
      if (this.isTextChanged && isClickOutsideEditor) {
        // Check if the text value has changed from the initial value
        const currentValue = this.quill?.root.innerHTML.trim() || '';
        const initialValue = this.value.trim(); // Use the initial value of this.value
        if (currentValue !== initialValue) {
          this.isTextChanged = false;
          this.props.onTextChangedOutsideEditor();
        }    
      }
    }
  }

  getCurrentFormatting() {
    const selection = this.quill.getSelection();
    if (selection) {
      const { index, length } = selection;
      return this.quill.getFormat(index, length);
    }
    return {};
  }
  // updateButtonStates() {
  //   const formatting = this.getCurrentFormatting();
  //   const buttons = this.buttons;
  //   buttons.forEach(button => {
  //     const isActive = formatting[button.id]; // Use button.format to represent the format
  //     const buttonElement = this.shadowRoot?.getElementById(button.id);
  //     if (buttonElement) {
  //       buttonElement.classList.toggle('active', isActive);
  //     }
  //   });
  // }

  applyHeading(format) {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        if (!this.quill.hasFocus()) {
          // If the editor doesn't have focus, focus it first
          this.quill.focus();
        }
  
        const [line, offset] = this.quill.getLine(selection.index);
        if (line) {
          const currentFormat = line.formats();
          const isHeader = currentFormat['header'];
          
          if (format === 'paragraph') {
            if (isHeader) {
              this.quill.formatLine(selection.index, 1, 'header', false);
            }
          } else {
            let headerLevel;
            switch (format) {
              case 'heading1':
                headerLevel = 1;
                break;
              case 'heading2':
                headerLevel = 2;
                break;
              case 'heading3':
                headerLevel = 3;
                break;
              default:
                console.error('Invalid format:', format);
                return;
            }
            
            if (isHeader && currentFormat['header'] === headerLevel) {
              this.quill.formatLine(selection.index, 1, 'header', false);
            } else {
              this.quill.formatLine(selection.index, 1, 'header', headerLevel);
            }
          }
        } else {
          console.error('No text selected');
        }
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

  // append some fixes to work better, in history were working fine those lines...
  // then move to toolbar actions
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
      // this.updateButtonStates(); // Update button states after action
    }
  }

  static styles = styles
}
