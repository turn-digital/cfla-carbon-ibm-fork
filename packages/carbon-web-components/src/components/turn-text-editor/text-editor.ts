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
  @property({ type: Object }) onServerLastEditor = {
    name: '',
    date: '',
  };
  @property({ type: Object }) editorConfig = {};

  get combinedEditorConfig() {
    const defaultConfig = {
      language: 'lv',
      language_url: 'https://demo.turn.lv/cfla_dist/assets/tinymce/langs/lv.js',
      branding: false,
      menubar: false,
      highlight_on_focus: true,
      promotion: true,
      min_height: 200,
      max_height: 500,
      external_plugins: {
        pluginId1:
          'https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js',
        pluginId2:
          'https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js',
      },
    };

    // Merge defaultConfig with this.editorConfig, prioritizing properties from editorConfig

    return { ...defaultConfig, ...this.editorConfig };
  }
  render() {
    //@ts-ignore
    const configKey = `config_${this.editorId}`;
    window[configKey] = this.combinedEditorConfig;

    window.localStorage.setItem(
      `${this.editorId}_content`,
      this.textEditorData
    );

    return html`
      <tinymce-editor
        id="${this.editorId}"
        config="${'config_' + this.editorId}"
        statusbar: false
        autoresize_bottom_margin: 5
        ?readonly="${this.readonly}"
        toolbar="blocks | bold italic underline | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify | link removeformat fullscreen"
        plugins="length_validation server_request autosave save autolink lists link image charmap preview anchor pagebreak code visualchars wordcount fullscreen autoresize"
        content_css="//www.tiny.cloud/css/codepen.min.css"
        promotion="false">
        ${this.textEditorData}
      </tinymce-editor>
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
