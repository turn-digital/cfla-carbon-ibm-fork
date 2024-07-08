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
import storyDocs from './label-value-story.mdx';

export const Propsed = () => {
  return html`
    <cds-label-value
      label="Propsed label!"
      value="Propsed Value!"></cds-label-value>
    <cds-label-value
      label="Propsed label!"
      value="<p style='margin: 24px'>Info in p tag with 24px margin for margin top 0 test</p>"></cds-label-value>
  `;
};
export const SlotUsage = () => {
  return html`
    <cds-label-value label="Propsed label!">
      <p style="margin: 24px">Slot Value</p>
    </cds-label-value>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Label + Value',
};
