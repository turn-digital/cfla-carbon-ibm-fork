import { prefix } from '../../globals/settings';
import { html, LitElement, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import Quill from './quill/quill.js';
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
import styles from './textEditor.scss';

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
  @property({ type: Object }) props: TextEditorProps = {
    onTextChangedOutsideEditor: () => {},
  };
  @property({ type: Boolean }) isReadOnly: boolean = false;
  @property({ type: String }) value: string = '';

  private quill: Quill | null = null;
  private isTextChanged = false;

  // Define button configurations outside of the class
  private buttonConfigurations = {
    bold: {
      id: 'bold',
      type: 'bold',
      icon: TextBold16,
      action: () => this.applyFormat('bold'),
    },
    italic: {
      id: 'italic',
      type: 'italic',
      icon: TextItalic16,
      action: () => this.applyFormat('italic'),
    },
    underline: {
      id: 'underline',
      type: 'underline',
      icon: TextUnderline16,
      action: () => this.applyFormat('underline'),
    },
    alignLeft: {
      id: 'align-left',
      type: 'alignLeft',
      icon: AlignLeft16,
      action: () => this.applyAlignment('left'),
    },
    alignCenter: {
      id: 'align-center',
      type: 'alignCenter',
      icon: AlignCenter16,
      action: () => this.applyAlignment('center'),
    },
    alignRight: {
      id: 'align-right',
      type: 'alignRight',
      icon: AlignRight16,
      action: () => this.applyAlignment('right'),
    },
    alignJustify: {
      id: 'align-justify',
      type: 'alignJustify',
      icon: AlignJustify16,
      action: () => this.applyAlignment('justify'),
    },
    unorderedList: {
      id: 'unordered-list',
      type: 'unorderedList',
      icon: ListBullet16,
      action: () => this.toggleList('bullet'),
    },
    orderedList: {
      id: 'ordered-list',
      type: 'orderedList',
      icon: ListNum16,
      action: () => this.toggleList('ordered'),
    },
    indent: {
      id: 'indent',
      type: 'indent',
      icon: IndentMore16,
      action: () => this.indent(),
    },
    outdent: {
      id: 'outdent',
      type: 'outdent',
      icon: IndentLess16,
      action: () => this.outdent(),
    },
    textLink: {
      id: 'insert-link',
      type: 'textLink',
      icon: Link16,
      action: () => {
        const url = prompt('Enter the URL:');
        if (url) {
          this.insertLink(url);
        }
      },
    },
    superscript: {
      id: 'superscript',
      type: 'superscript',
      icon: Super16,
      action: () => this.toggleSuperscript(),
    },
    subscript: {
      id: 'subscript',
      type: 'subscript',
      icon: Sub16,
      action: () => this.toggleSubscript(),
    },
    clearFormatting: {
      id: 'clear-formatting',
      type: 'clearFormatting',
      icon: Clear16,
      action: () => this.clearFormatting(),
    },
    undo: {
      id: 'undo',
      type: 'undo',
      icon: Undo16,
      action: () => this.applyUndo(),
    },
    redo: {
      id: 'redo',
      type: 'redo',
      icon: Redo16,
      action: () => this.applyRedo(),
    },
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
      this.buttonConfigurations.redo,
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
    document.addEventListener(
      'click',
      this.handleEditorClickOutSide.bind(this)
    );
  }

  disconnectedCallback() {
    // Call the parent class disconnectedCallback method
    super.disconnectedCallback();

    // Remove the event listener for the 'cds-dropdown-selected' event when the component is disconnected
    this.removeEventListener(
      'cds-dropdown-selected',
      this.handleDropdownSelected
    );

    // Remove the global click event listener when the component is disconnected
    // Bind 'this' context to the handleEditorClickOutSide event handler function
    document.removeEventListener(
      'click',
      this.handleEditorClickOutSide.bind(this)
    );
  }

  handleDropdownSelected(event) {
    const selectedItem = event.detail.item;
    const selectedValue = selectedItem.getAttribute('value');
    console.log('Selected value:', selectedValue);
    this.applyHeading(selectedValue);
  }
  render() {
    // Use the buttonsSets object to get the desired set of buttons based on toolbarType
    const buttons = this.buttonsSets[this.toolbarType];
    const isOverLimits = this.textLength > this.textLimit;
    return html`
      <!-- Include stylesheet -->
      <div id="cc-text-editor" class="cc-text-editor ${
        isOverLimits ? 'cc-text-editor--text-limit' : ''
      }">
        <div class="cc-text-editor__head">
          <div class="cc-text-editor__head-title">${
            this.translations.title
          }</div>
            ${
              this.isReadOnly
                ? html``
                : html`
                    <div class="cc-text-editor__head-content">
                      <span class="cc-text-editor__head-status"
                        >${this.translations.statusSave}</span
                      >
                      <span class="cc-text-editor__head-limit"
                        >${this.textLength}/${this.textLimit}</span
                      >
                    </div>
                  `
            }
          </div>
        </div>

        ${
          this.isReadOnly
            ? html` <div class="text-editor">${unsafeHTML(this.value)}</div> `
            : html`
                <!-- Create the editor container -->
                <div id="editor">${this.value}</div>

                <!-- Carbon Web Components buttons outside of the editor -->
                <div class="cc-text-editor__toolbar">
                  <!-- Select dropdown for heading and paragraph -->
                  <cds-dropdown
                    value="paragraph"
                    type="inline"
                    size="sm"
                    @cds-change="${this.handleDropdownSelected}">
                    <cds-dropdown-item value="paragraph"
                      >${this.translations.paragraph}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading1"
                      >${this.translations.heading1}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading2"
                      >${this.translations.heading2}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading3"
                      >${this.translations.heading3}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading4"
                      >${this.translations.heading4}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading5"
                      >${this.translations.heading5}</cds-dropdown-item
                    >
                    <cds-dropdown-item value="heading6"
                      >${this.translations.heading6}</cds-dropdown-item
                    >
                  </cds-dropdown>

                  ${buttons.map(
                    (button) => html`
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
                        ${button?.icon ? button.icon({ slot: 'icon' }) : ''}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 32 32">
                      <defs>
                        <style>
                          .cls-1 {
                            fill: none;
                          }
                        </style>
                      </defs>
                      <title>Izvērst uz pilnekrānu</title>
                      <polygon
                        points="22 16 24 16 24 8 16 8 16 10 22 10 22 16" />
                      <polygon
                        points="8 24 16 24 16 22 10 22 10 16 8 16 8 24" />
                      <path
                        d="M26,28H6a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,6,4H26a2.0023,2.0023,0,0,1,2,2V26A2.0023,2.0023,0,0,1,26,28ZM6,6V26H26.0012L26,6Z" />
                      <rect
                        id="_Transparent_Rectangle_"
                        data-name="&lt;Transparent Rectangle&gt;"
                        class="cls-1"
                        width="32"
                        height="32" />
                    </svg>
                  </cds-button>
                </div>
              `
        }

        ${
          isOverLimits
            ? html`<p class="cc-text-editor__limit">
                ${this.translations.textLimit}
              </p>`
            : ''
        }
        
        ${
          this.userMeta?.name
            ? html`<p class="cc-text-editor__meta">
                ${this.userMeta.date} ${this.userMeta.name}
              </p> `
            : ''
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
      this.dispatchEvent(
        new CustomEvent('text-length-changed', {
          detail: { textLength: this.textLength },
        })
      );
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
    }

    this.quill.on('text-change', () => {
      this.isTextChanged = true;
      this.textLength = (this.quill?.getText() || '').trim().length;
      this.requestUpdate();
    });

    // Add event listener for Quill's focus event directly to the Quill editor's root element
    // this.quill.root.addEventListener('focus', () => {
    //   console.log('Quill editor is focused');
    // });

    // Add click event listener to the entire editor component
    this.shadowRoot?.addEventListener(
      'click',
      this.handleEditorClickOutSide.bind(this)
    );

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

    // Check if the click event occurred within the editor component
    const isClickWithinEditor =
      editorRect &&
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
    const isClickOutsideEditor =
      !isClickWithinEditor && !isToolbarButton && !isSelectDropdown;

    // If the text has been changed and the click occurred outside of the editor,
    // call the callback function provided as a property
    if (this.isTextChanged && isClickOutsideEditor) {
      this.props.onTextChangedOutsideEditor();
      // Reset the boolean variable after handling the click event
      this.isTextChanged = false;
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
        if (!this.quill.hasFocus()) {
          // If the editor doesn't have focus, focus it first
          this.quill.focus();
        }
        //@ts-ignore
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
        const linkElements = this.quill.root.querySelectorAll(
          `a[href="${url}"]`
        );
        linkElements.forEach((linkElement) => {
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
    const fullscreenButton =
      this.shadowRoot?.querySelector('#fullscreenButton');
    if (fullscreenButton) {
      fullscreenButton.addEventListener(
        'click',
        this.toggleFullscreen.bind(this)
      );
    }
  }

  toggleFullscreen() {
    const editorContainer = this.shadowRoot?.querySelector('#cc-text-editor');

    if (editorContainer && !document.fullscreenElement) {
      editorContainer.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  clearFormatting() {
    if (this.quill) {
      const selection = this.quill.getSelection();
      if (selection) {
        this.quill.removeFormat(selection.index, selection.length);
      }
    }
  }

  applyUndo() {
    if (this.quill) {
      this.quill.history.undo();
    }
  }

  applyRedo() {
    if (this.quill) {
      this.quill.history.redo();
    }
  }

  handleButtonClick(button) {
    if (button.action) {
      button.action();
      // this.updateButtonStates(); // Update button states after action
    }
  }

  static styles = styles;
}
