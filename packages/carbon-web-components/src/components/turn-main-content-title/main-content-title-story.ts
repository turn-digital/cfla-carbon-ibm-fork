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
import storyDocs from './main-content-title-story.mdx';

export const Default = () => {
  return html` <cds-main-content-title></cds-main-content-title> `;
};
export const Propsed = () => {
  return html`
    <cds-main-content-title title="Propsed page title"></cds-main-content-title>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Main content title',
};
