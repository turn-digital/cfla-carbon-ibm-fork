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
      textEditorData="This is a text from props"
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "autosave_ask_before_unload": false
      }'></cds-text-editor>
  `;
};

export const WithRequestObject = () => {
  return html`
    <cds-text-editor
      .invalidateQueriesFunc=${() => {
        console.log(
          'propsed invalidate query functon called from text editor on blur'
        );
      }}
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "request_obj": {
        "urlToRequest": "https://jsonplaceholder.typicode.com/posts/1",
        "requestMethod": "PATCH",
        "requestValueKey": "value",
        "verificationToken": "token",
        "errorAlertMessage": "Error occurred while fetching data",
        "propsBodyObj": ${JSON.stringify({
        izveletaVertiba: null,
        jautajumsId: 2,
        jautajumsNosaukums: 'Kāds ir jautājums?',
        jautajumsTips: 'teksts',
      })}
        },
      "onServerLastEditor": {
          "name": "Vlad",
          "date": "123123 12312312"
      }
      }'></cds-text-editor>
  `;
};
export const WithMaxCahrLength = () => {
  return html`
    <cds-text-editor
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "length_validation_error_text": "Max char length exceeded! props text",
      "max_char_length": 200,
      "onServerLastEditor": {
        "name": "Vlad",
        "date": "123123 12312312"
    }
      }'></cds-text-editor>
  `;
};

export const WithMaxCahrLengthAndRequestObject = () => {
  return html`
    <cds-text-editor
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "max_char_length": 200,
      "request_obj": {
        "urlToRequest": "https://jsonplaceholder.typicode.com/posts/1",
        "requestMethod": "PATCH",
        "requestValueKey": "value",
        "verificationToken": "token",
        "errorAlertMessage": "Error occurred while fetching data"
        },
        "onServerLastEditor": {
          "name": "Vlad",
          "date": "123123 12312312"
      }
      }'></cds-text-editor>
  `;
};
export const WithMaxCahrLengthAndRequestObjectAndServerErrorText = () => {
  return html`
    <cds-text-editor
      onServerLastEditor='{"name": "Vlad", "date": "123123 12312312"}'
      onServerErrorTextUnderline="Error from server text (optional) for the underline error msg"
      editorConfig='{
      "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
      "max_char_length": 200,
      "onServerErrorTextNotification": "Error from server text (optional)",
      "request_obj": {
        "urlToRequest": "https://jsonplaceholder.typicode.com/posts/1",
        "requestMethod": "PATCH",
        "requestValueKey": "value",
        "verificationToken": "token",
        "errorAlertMessage": "Error occurred while fetching data"
        },
        "onServerLastEditor": {
          "name": "Vlad",
          "date": "123123 12312312"
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
