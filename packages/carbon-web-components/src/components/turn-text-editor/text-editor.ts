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
  @property({ type: String }) editorId = Math.floor(
    Math.random() * 1000000000000000000000000
  ).toString();
  @property({ type: String }) onServerErrorTextUnderline = '';
  @property({ type: String })
  textEditorData = ``;
  @property({ type: Object }) editorConfig = {};

  get combinedEditorConfig() {
    const defaultConfig = {
      language: 'lv',
      branding: false,
      menubar: false,
      elementpath: false,
      highlight_on_focus: true,
      promotion: true,
      autoresize_overflow_padding: 16,
      min_height: 200,
      max_height: 500,
    };

    // Merge defaultConfig with this.editorConfig, prioritizing properties from this.editorConfig

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

    var href = window.location.origin;

    const getBaseUrl = () => {
      const domain = window.location.origin;
      const pathname = window.location.pathname.split('/')[1];
      let madeurl = '';
      if (window.location.host.includes('localhost')) {
        madeurl = `${domain}`;
      } else {
        madeurl = `${domain}/${pathname}`;
      }
      console.log('madeurl', madeurl);
      return madeurl;
    };
    var urlToTinymceCssFile =
      href == 'http://localhost:3002' ||
      href == 'https://demo.turn.lv' ||
      href == 'http://localhost:9000'
        ? 'https://demo.turn.lv/cfla_dist/assets/css/text-editor.min.css'
        : `${getBaseUrl()}/Content/Carbon/assets/css/text-editor.min.css`;

    return html`
      <tinymce-editor
      class="tinymce-editor"
        id="${this.editorId}"
        config="${'config_' + this.editorId}"
        statusbar: false
        left_margin: 50
        ?readonly="${this.readonly}"
        toolbar="blocks | bold italic underline | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify | link removeformat fullscreen"
        plugins="length_validation server_request autosave save autolink lists link image charmap preview anchor pagebreak code visualchars wordcount fullscreen autoresize"
        content_css="${urlToTinymceCssFile}"
        promotion="false">
        ${this.textEditorData}
      </tinymce-editor>
      ${
        this.onServerErrorTextUnderline.length > 0
          ? html`<p style="color: red">${this.onServerErrorTextUnderline}</p>`
          : ''
      }
      </p>
    `;
  }

  static styles = styles;
}

export default TextEditor;
