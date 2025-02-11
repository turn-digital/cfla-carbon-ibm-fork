/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import { prefix } from '../../globals/settings';

import './index';
import storyDocs from './table-expanded-row-wrapper-story.mdx';

export const Default = () => {
  return html`<cds-table size="sm" expandable>
    <cds-table-header-title slot="title"
      >VINPI vispārīgās</cds-table-header-title
    >
    <cds-table-head>
      <cds-table-header-row>
        <cds-table-header-cell>ID</cds-table-header-cell>
        <cds-table-header-cell>HP darbības nosaukums</cds-table-header-cell>
        <cds-table-header-cell>Projekti, kuros izvēlēts</cds-table-header-cell>
        <cds-table-header-cell>Īstenošana</cds-table-header-cell>
      </cds-table-header-row>
    </cds-table-head>
    <cds-table-body>
      <cds-table-row expanded>
        <cds-table-cell>P03</cds-table-cell>
        <cds-table-cell
          >Pētījumos integrēti dzimumu līdztiesības jautājumi</cds-table-cell
        >
        <cds-table-cell>0</cds-table-cell>
        <cds-table-cell
          ><cds-toggle
            size="sm"
            label-a="Izvēlēts"
            label-b="Nav izvēlēts"></cds-toggle
        ></cds-table-cell>
      </cds-table-row>
      <cds-table-expanded-row>
        <cds-table-expanded-row-wrapper>
          <cds-table size="sm">
            <cds-table-header-title slot="title">
              <cds-label-value
                label="HP darbība"
                value="Veicot pētījumus un izvērtējumus, kur vien tas ir iespējams, visi dati tiks apkopoti un analizēti  dalījumā pēc dzimuma, vecuma, etniskās piederības u.c. pazīmēm"></cds-label-value
            ></cds-table-header-title>
            <cds-table-head>
              <cds-table-header-row>
                <cds-table-header-cell>ID</cds-table-header-cell>
                <cds-table-header-cell
                  >Saistītais HP rādītājs</cds-table-header-cell
                >
              </cds-table-header-row>
            </cds-table-head>
            <cds-table-body>
              <cds-table-row>
                <cds-table-cell>Vinpi 02.1</cds-table-cell>
                <cds-table-cell
                  >Pasākumu un izstrādāto materiālu, kuru saturā integrēti
                  nediskriminācijas jautājumi, tostarp par tiesiskajiem un
                  praktiskajiem aspektiem, skaits</cds-table-cell
                >
              </cds-table-row>
            </cds-table-body>
          </cds-table>
        </cds-table-expanded-row-wrapper>
      </cds-table-expanded-row>
    </cds-table-body>
  </cds-table>`;
};
Default.storyName = 'Default';

export default {
  title: 'Custom-components/Table expanded row wrapper',
  parameters: {
    ...storyDocs.parameters,
  },
};
