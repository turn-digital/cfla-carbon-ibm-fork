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
      textEditorData="Some data, can also be in html format"
      editorId="editor_example_storybook_default"
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Validation text from props",
      "branding": false,
      "menubar": false,
      "highlight_on_focus": true,
      "promotion": true,
      "max_char_length": 200,
      "height": 200,
      "request_obj": {
      "urlToRequest": "https://jsonplaceholder.typicode.com/posts",
      "requestMethod": "POST",
      "requestValueKey": "value",
      "verificationToken": "token",
      "errorAlertMessage": "Error occurred while fetching data"
      },
      "external_plugins": {
      "pluginId1": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js",
      "pluginId2": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js"
      }
      }'></cds-text-editor>
  `;
};

export const WithoutRequestObject = () => {
  return html`
    <cds-text-editor
      textEditorData="Some data, can also be in html format"
      editorId="editor_example_storybook_wo_obj"
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Validation text from props",
      "branding": false,
      "menubar": false,
      "highlight_on_focus": true,
      "promotion": true,
      "max_char_length": 200,
      "height": 200,
      "external_plugins": {
        "pluginId1": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js",
        "pluginId2": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js"
      }
      }'></cds-text-editor>
  `;
};

export const WithoutValidation = () => {
  return html`
    <cds-text-editor
      textEditorData="Some data, can also be in html format"
      editorId="editor_example_storybook_default_wo_validation"
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Validation text from props",
      "branding": false,
      "menubar": false,
      "highlight_on_focus": true,
      "promotion": true,
      "height": 200,
      "request_obj": {
      "urlToRequest": "https://jsonplaceholder.typicode.com/posts",
      "requestMethod": "POST",
      "requestValueKey": "value",
      "verificationToken": "token",
      "errorAlertMessage": "Error occurred while fetching data"
      },
      "external_plugins": {
        "pluginId1": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js",
        "pluginId2": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js"
      }
      }'></cds-text-editor>
  `;
};

export const WithoutMaxCharsAndRequestObj = () => {
  return html`
    <cds-text-editor
      textEditorData="Some data, can also be in html format"
      editorId="editor_example_storybook_default_wo_validation_and_request_obj"
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Validation text from props",
      "branding": false,
      "menubar": false,
      "highlight_on_focus": true,
      "promotion": true,
      "height": 200,
      "external_plugins": {
        "pluginId1": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js",
        "pluginId2": "https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js"
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
