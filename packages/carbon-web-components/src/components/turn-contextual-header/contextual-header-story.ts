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
import storyDocs from './contextual-header-story.mdx';

export const Default = () => {
  return html` <cds-contextual-header></cds-contextual-header> `;
};
export const Propsed = () => {
  return html`
  <cds-contextual-header title="Atlase: 3.1.1.5/19/A/043">
    <cds-label-value-horizontal label="Atlases nosaukums">
      <cds-link href="#">Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
      </cds-link>
    </cds-label-value-horizontal>
    <cds-label-value-horizontal label="Atlases status">
      <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
    </cds-label-value-horizontal>
    <cds-divider size="3"></cds-divider>
    <cds-label-value-horizontal label="Politikas programma">
      <cds-link href="#">1.1 </cds-link>
    </cds-label-value-horizontal>
  </cds-contextual-header>

  <cds-contextual-header title="Projekt: 3.1.1.5/19/A/043">
    <cds-label-value-horizontal label="Projekta nosaukums">
        <cds-link href="#">Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
        </cds-link>
    </cds-label-value-horizontal>
    <cds-label-value-horizontal label="Finansējuma saņēmējs">
      Latvijas Universitāte
    </cds-label-value-horizontal>
    <cds-label-value-horizontal label="Projekta statuss">
      <cds-tag type="blue">Līgums</cds-tag> 25.10.2019 10:34
    </cds-label-value-horizontal>
  </cds-contextual-header>

  <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19/A/043">
    <cds-label-value-horizontal label="Projekta nosaukums">
        <cds-link href="#">MVU inovatīvas uzņēmējdarbības attīstība
        </cds-link>
    </cds-label-value-horizontal>
    <cds-label-value-horizontal label="Iesniedzējs">
      Latvijas Universitāte
    </cds-label-value-horizontal>
    <cds-label-value-horizontal label="Projekta iensieguma statuss">
      <cds-tag type="blue">Sagatavošanā</cds-tag> 25.10.2019 10:34
    </cds-label-value-horizontal>
  </cds-contextual-header>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Contextual header',
};
