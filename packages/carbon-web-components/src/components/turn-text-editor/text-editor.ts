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

  toggleReadonly() {
    this.readonly = !this.readonly;
  }

  render() {
    return html`
      <cds-button @click="${this.toggleReadonly}">Toggle Readonly</cds-button>

      <tinymce-editor
        height="300"
        menubar="false"
        ?readonly="${this.readonly}"
        plugins="advlist autolink lists link image charmap print preview anchor 
    searchreplace visualblocks code fullscreen 
    insertdatetime media table paste code help wordcount"
        toolbar="undo redo | formatselect | bold italic backcolor | 
    alignleft aligncenter alignright alignjustify | 
    bullist numlist outdent indent | removeformat | help | link"
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
