/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './text-editor.scss';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import './tinymce-webcomponent.js';

/**
 * Related documents.
 *
 * @element cds-text-editor
 */

@customElement(`${prefix}-text-editor`)
class TextEditor extends LitElement {
  @property({ type: Boolean }) readonly = false;
  @property({ type: String }) editorId = 'editor';
  @property({ type: String })
  textEditorData = ``;
  @property({ type: String }) onServerValidationErrorText = '';
  @property({ type: Object }) onServerLastEditor = {
    name: '',
    date: '',
  };
  @property({ type: Object }) editorConfig = {};

  render() {
    //@ts-ignore
    window['config_' + this.editorId] = this.editorConfig;
    return html`
      <tinymce-editor
        id="${this.editorId}"
        config="${'config_' + this.editorId}"
        statusbar: false
        min_height: 200
        max_height: 800
        autoresize_bottom_margin: 5
        ?readonly="${this.readonly}"
        toolbar="blocks | bold italic underline | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify | link removeformat fullscreen"
        plugins="length_validation server_request autosave save autolink lists link image charmap preview anchor pagebreak code visualchars wordcount fullscreen"
        content_css="//www.tiny.cloud/css/codepen.min.css"
        promotion="false">
        ${this.textEditorData}
      </tinymce-editor>
      ${
        this.onServerValidationErrorText?.length > 0
          ? html`<div>
              <p style="color: red">${this.onServerValidationErrorText}</p>
            </div>`
          : ''
      }
      ${
        this.onServerLastEditor?.name.length > 0
          ? html`<div>
        <p style="color: grey"
        <span>${this.onServerLastEditor.name} </span> 
        <span>${this.onServerLastEditor.date}</span> 
        </p>
          </div>`
          : ''
      }
    `;
  }

  static styles = styles;
}

export default TextEditor;
