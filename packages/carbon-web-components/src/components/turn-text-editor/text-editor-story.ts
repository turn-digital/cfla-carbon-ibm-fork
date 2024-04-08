/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import storyDocs from './text-editor-story.mdx';

export const Default = () => {
  return html`
    <cds-text-editor
      textEditorData='<ul>
      <li>Our <a href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      </ul>
      <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;zx</p>
      <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
      <p>&nbsp;</p>'
      editorId="editor_example_storybook"
      editorConfig='{
"editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
"branding": false,
"menubar": false,
"height": 200,
"highlight_on_focus": true,
"promotion": true,
"max_length": 200,
"fetch_obj": {
"urlToFetch": "https://jsonplaceholder.typicode.com/posts",
"fetchMethod": "POST",
"errorAlertMessages": "Error occurred while fetching data",
},
"external_plugins": {
"pluginId": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js"
}
}'></cds-text-editor>
  `;
};
export const IsModal = () => {
  return html`
    <cds-text-editor
      textEditorData='<ul>
    <li>Our <a href="https://www.tiny.cloud/docs/tinymce/6/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
    </ul>
    <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;zx</p>
    <p>This recreates the same settings as the <a href="https://www.tiny.cloud/docs/demo/basic-example/">basic example</a></p>
    <p>&nbsp;</p>'
      editorId="editor_example_storybook_modal"
      onServerLastEditor = {
        name: Vlad,
        date: asdasd 123123 12121,
      };
      editorConfig='{
"editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
"branding": false,
"menubar": false,
"height": 200,
"highlight_on_focus": true,
"promotion": true,
"max_length": 200,
"isModal": true,
"fetch_obj": {
"urlToFetch": "https://jsonplaceholder.typicode.com/posts",
"fetchMethod": "POST",
"errorAlertMessages": "Error occurred while fetching data",
},
"external_plugins": {
"pluginId": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js"
}
}'></cds-text-editor>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Text editor',
};
