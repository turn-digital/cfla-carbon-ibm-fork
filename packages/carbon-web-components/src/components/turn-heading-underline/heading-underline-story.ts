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
import storyDocs from './heading-underline-story.mdx';

const counterArr = [
  {
    type: 'red',
    count: '1',
  },
  {
    type: 'green',
    count: '2',
  },
];

export const PropsedArr = () => {
  return html`
    <cds-heading-underline label="Apraksts" .counterArr=${counterArr}>
    </cds-heading-underline>
  `;
};
export const PropsedDefault = () => {
  return html`
    <cds-heading-underline label="Apraksts" type="green" counter="3">
    </cds-heading-underline>
    <cds-heading-underline label="Apraksts" type="red" counter="2">
    </cds-heading-underline>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Heading underline',
};
