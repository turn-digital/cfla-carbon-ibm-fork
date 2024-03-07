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
@customElement(`${prefix}-text-editor`)
class TextEditor extends LitElement {
  @property({ type: Boolean }) readonly = false;
  @property({ type: String }) textEditorTitle = 'Vertejuma pamatojums';
  @property({ type: String }) limit = '1000';
  @property({ type: String }) editorId = 'editor';
  @property({ type: Object }) editorConfig = {
    height: 200,
    highlight_on_focus: true,
    promotion: false,
    ajax_url: 'https://httpbin.org/post',
    max_length: 1000,
    external_plugins: {
      pluginId:
        'http://localhost:8001/plugins/background_color_change/plugin.min.js',
    },
  };

  // toggleReadonly() {
  //   this.readonly = !this.readonly;
  // }

  render() {
    //@ts-ignore
    window['config_' + this.editorId] = this.editorConfig;

    console.log('editorConfig', this.editorConfig);
    return html`
      <p>${this.textEditorTitle}</p>
      <p>
        ${window['config_' + this.editorId + '.actual_length']}/${this.limit}
      </p>
      <tinymce-editor
        id="${this.editorId}"
        config="${'config_' + this.editorId}"
        menubar="false"
        ?readonly="${this.readonly}"
        toolbar="undo redo | formatselect | bold italic backcolor | 
    alignleft aligncenter alignright alignjustify | 
    bullist numlist outdent indent | removeformat | help | link"
        plugins="background_color_change advlist autosave save sender autolink lists link image charmap preview anchor pagebreak code visualchars wordcount"
        content_css="//www.tiny.cloud/css/codepen.min.css"
        promotion="false">
        &lt;p&gt;This recreates the same settings as the &lt;a
        href=&quot;https://www.tiny.cloud/docs/demo/basic-example/&quot;&gt;basic
        example&lt;/a&gt;&lt;p&gt;
      </tinymce-editor>
    `;
  }

  static styles = styles;
}

export default TextEditor;
