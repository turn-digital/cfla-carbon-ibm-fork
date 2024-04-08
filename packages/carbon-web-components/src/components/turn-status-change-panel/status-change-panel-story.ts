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
import storyDocs from './status-change-panel-story.mdx';

const statusItems = [
  { value: 'Status_1', text: 'Status 1' },
  { value: 'Status_2', text: 'Status 2' },
  { value: 'Status_3', text: 'Status 3' },
];

export const Default = () => {
  return html` <cds-status-change-panel></cds-status-change-panel> `;
};
export const Propsed = () => {
  return html`
    <cds-status-change-panel
      .statusItems="${statusItems}"></cds-status-change-panel>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Satatus change panel',
};
