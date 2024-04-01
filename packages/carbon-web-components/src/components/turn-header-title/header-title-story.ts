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
import storyDocs from './header-title-story.mdx';

export const Default = () => {
  return html` <cds-header-title></cds-header-title> `;
};
export const Propsed = () => {
  return html`
    <cds-header-title title="Proposed Header Title"> </cds-header-title>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Header Title',
};
