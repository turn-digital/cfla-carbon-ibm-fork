/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import { prefix } from '../../globals/settings';

import './index';
import storyDocs from './document-with-status-story.mdx';

export const Default = () => {
  return html`<cds-document-with-status>`;
};
Default.storyName = 'Default';

export const Propsed = () => {
  return html`
    <cds-document-with-status
    title="Projekta satura izmaiņu salīdzināšana"
    status="success"
    statusText="Izmaiņas ir veiktas"
    linkUrl="https://google.com"
    linkText="Apskatīt!"></cds-document-with-status>

    <cds-document-with-status
    title="Projekta Budžeta izmaiņu salīdzīnāšana"
    status="information"
    statusText="Izmaiņu nav"
    linkUrl="https://google.com"
    linkText="Apskatīt!"></cds-document-with-status>
    
    <cds-document-with-status
    title="Projekta Budžeta izmaiņu salīdzīnāšana"
    status="warning"
    statusText="Izmaiņu nav"
    linkUrl="https://google.com"
    linkText="Apskatīt!"></cds-document-with-status>

    <cds-document-with-status
    title="Projekta satura izmaiņu salīdzināšana"
    status="error"
    statusText="Izmaiņas nav saglabātas"
    linkUrl="https://google.com"
    linkText="Apskatīt!"></cds-document-with-status>`;
};


export default {
  title: 'Custom-components/Document with status',
  parameters: {
    ...storyDocs.parameters,
  },
};
