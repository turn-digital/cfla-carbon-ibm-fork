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
import storyDocs from './result-card-story.mdx';

export const Propsed = () => {
  return html`
    <cds-result-card>
      <cds-link href="#" target="_blank">Lejupielādēt lēmumu</cds-link>
    </cds-result-card>
    <cds-result-card
      label="Vērtēšanas rezultāts"
      value="Noraidīts"
      icon="cancelled">
      <cds-link href="#" target="_blank">Lejupielādēt lēmumu</cds-link>
    </cds-result-card>
    <cds-result-card
      label="Vērtēšanas rezultāts"
      value="Apstiprināts ar nosacījumu"
      icon="approved">
      <cds-link href="#" target="_blank">Lejupielādēt lēmumu</cds-link>
    </cds-result-card>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Result card',
};
