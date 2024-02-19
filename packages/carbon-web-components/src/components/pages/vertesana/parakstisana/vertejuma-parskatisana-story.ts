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
  return html` <cds-page-valuation-review></cds-page-valuation-review> `;
};

export const Playground = () => {
  return html` <cds-page-valuation-review></cds-page-valuation-review> `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title:
    'Views/Vērtēšana/Vērtējuma pārskatīšana Globali/Vērtējuma pārskatīšana izveidošana',
};
