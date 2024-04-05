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
import storyDocs from './related-persons-story.mdx';

export const Default = () => {
  return html` <cds-related-persons></cds-related-persons> `;
};
export const Propsed = () => {
  return html` <cds-related-persons></cds-related-persons> `;
};
export const EmptyArray = () => {
  return html`
    <cds-related-persons .statusHistoryPersons=${[]}></cds-related-persons>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Related Persons',
};
