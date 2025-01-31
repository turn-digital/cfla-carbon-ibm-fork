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
import storyDocs from './page-empty-state-story.mdx';

export const Type1 = () => {
  return html`
    <cds-page-empty-state title="Mani projekti">
      <span slot="content">
        Šajā sadaļā tiek atspoguļoti projekti, kuros ir noslēgts līgums. Šobrīd
        Jums vēl nav neviens noslēgts līgums par projekta īstenošanu. Atlases
        procesā esošie projektu iesniegumi ir pieejami sadaļā "Projektu
        iesniegumi".
      </span>
      <span slot="button">
        <cds-button href="https://www.ibm.com"> Button </cds-button>
      </span>
      <span slot="link">
        <cds-link href="https://www.ibm.com"> Link </cds-link>
      </span>
    </cds-page-empty-state>
  `;
};

export const Type2 = () => {
  return html`
    <cds-page-empty-state title="Projekta iesniegumi">
      <span slot="content">
        Šajā sadaļā tiek atspoguļoti projekta iesniegumi, kuri ir atlases
        procesā. Šobrīd Jums nav neviens projekta iesniegums. Lai uzsāktu
        projekta iesnieguma sagatavošanu, izvēlieties projekta atlasi sadaļā
        "2021-2027 pieejamās atlases".
      </span>
      <span slot="button">
        <cds-button href="https://www.ibm.com"> Button </cds-button>
      </span>
      <span slot="link">
        <cds-link href="https://www.ibm.com"> Link </cds-link>
      </span>
    </cds-page-empty-state>
  `;
};

export const Type3 = () => {
  return html`
    <cds-page-empty-state title="2021-2027 pieejamās atlases">
      <span slot="content">
        Šajā sadaļā tiek atspoguļotas projektu atlases, kurās var iesniegt
        pieteikumus. Šobrīd nav neviena izsludināta projekta atlase.
      </span>
      <span slot="button">
        <cds-button href="https://www.ibm.com"> Button </cds-button>
      </span>
      <span slot="link">
        <cds-link href="https://www.ibm.com"> Link </cds-link>
      </span>
    </cds-page-empty-state>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Page Empty State',
};
