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
  TextEditorData = `<ul>
  <li>Our <a href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
  </ul>
  <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;zx</p>
  <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
  <p>&nbsp;</p>`;
  @property({ type: String }) onServerValidationErrorText = '';
  @property({ type: String }) onServerLastEditor = '';
  @property({ type: Object }) editorConfig = {
    editorTitle: 'Default title 1',
    height: 200,
    highlight_on_focus: true,
    statusbar: false,
    branding: false,
    menubar: false,
    isModal: false,
    max_length: 200,
    fetch_obj: {
      urlToFetch: 'https://jsonplaceholder.typicode.com/posts',
      fetchMethod: 'POST',
      errorAlertMessages: 'Error occured while fetching data',
    },
    external_plugins: {
      pluginId:
        'https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js',
    },
  };

  render() {
    //@ts-ignore
    window['config_' + this.editorId] = this.editorConfig;

    return html`
      <tinymce-editor
        id="${this.editorId}"
        config="${'config_' + this.editorId}"
        statusbar: false
        min_height: 120
        max_height: 600
        autoresize_bottom_margin: 5
        ?readonly="${this.readonly}"
        toolbar="blocks | bold italic underline | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify | link removeformat fullscreen"
        plugins="length_validation autosave save sender autolink lists link image charmap preview anchor pagebreak code visualchars wordcount"
        content_css="//www.tiny.cloud/css/codepen.min.css"
        promotion="false">
        ${this.TextEditorData}
      </tinymce-editor>
      ${
        this.onServerValidationErrorText?.length > 0
          ? html`<div>
              <p style="color: red">${this.onServerValidationErrorText}</p>
            </div>`
          : ''
      }
      ${
        this.onServerLastEditor?.length > 0
          ? html`<div>
        <p style="color: grey"
        <span>Name Surname </span> 
        <span>21.03.2024 </span> 
        <span>18:34:21</span>
        </p>
          </div>`
          : ''
      }
    `;
  }

  static styles = styles;
}

export default TextEditor;
