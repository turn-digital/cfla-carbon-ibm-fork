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
import storyDocs from './label-underline-story.mdx';

const notifications = [
  {
    type: 'red',
    count: '1',
  },
  {
    type: 'green',
    count: '2',
  },
];

export const Propsed = () => {
  return html`
    <cds-label-underline
      label="Apraksts"
      .notifications=${notifications}>
    </cds-label-underline>
  `;
};


export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Label + Underline',
};
