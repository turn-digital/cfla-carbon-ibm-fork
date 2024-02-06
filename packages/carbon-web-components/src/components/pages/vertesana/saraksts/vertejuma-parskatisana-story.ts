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
import storyDocs from './vertejuma-parskatisana-story.mdx';

export const Default = () => {
  return html`
  trol1
  <cds-page-valuation-list></cds-page-valuation-list>
  `;
};

export const Playground = () => {
  return html`
  trol2
    <cds-page-valuation-list></cds-page-valuation-list>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Layout/Vērtēšana/Vērtējuma pārskatīšana saraksts',
};
