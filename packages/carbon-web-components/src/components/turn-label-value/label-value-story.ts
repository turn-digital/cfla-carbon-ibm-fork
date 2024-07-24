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

import Incomplete16 from '@carbon/icons/lib/incomplete/16';

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

export const WithIcon = () => {
  return html`
    <cds-label-value label="Izpildes statuss">
      ${Incomplete16()} Nav atrisināts
      <cds-label-value label="Labot var projekta iesniegumā"></cds-label-value>
    </cds-label-value>
  `;
};

export const WithLink = () => {
  return html`
    <cds-label-value label="Izpildes statuss">
      <cds-unordered-list>
        <cds-list-item>
          <cds-link href="#">Apraksts</cds-link> >
          <cds-link href="#"
            >1.2. Problēmas un risinājuma apraksts, t.sk. mērķa grupa, tās
            problēmu un risinājumu apraksts</cds-link
          >
        </cds-list-item>
      </cds-unordered-list>
    </cds-label-value>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Label + Value',
};
