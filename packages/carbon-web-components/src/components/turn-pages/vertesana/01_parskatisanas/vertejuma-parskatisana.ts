/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../globals/settings';
import styles from './vertejuma-parskatisana.scss';
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-page-parskatisanas`)
class CDSPValuationReview extends LitElement {
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />
      <cds-main-content-block storybook>
        <cds-back-to
          class="cds--css-grid-column cds--col-span-100 cds--grid-column"
          title="Uz sarakstu"
          link="#"></cds-back-to>
        <cds-main-content-title
          class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang"
          title="Vērtējuma pārskatīšanas izveidosāna">
        </cds-main-content-title>

        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <cds-progress-indicator space-equally>
            <cds-progress-step
              style="max-inline-size: none;"
              label="Pārskatīšanas veids"
              description="Step 1: Register a onChange event"
              state="current"></cds-progress-step>
            <cds-progress-step
              label="Pamatinfo"
              description="The progress indicator will listen for clicks on the steps"
              state="incomplete"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              description="The progress indicator will listen for clicks on the steps"
              state="incomplete"></cds-progress-step>
          </cds-progress-indicator>
        </div>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-project-card
            projectId="1.1.1.1/16/A/004"
            tagTitle="Apstiprināts ar nosacījumu"
            supervisorAuthority="CFLA"
            cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utcondimentum diam id diam blandit congue."
            tagType="purple"
            projectDateTitle="Projekta īstenošanas termiņš"
            projectDateInfo="05.01.2021 - 30.05.2028"
            projectCostTitle="Projekta kopējas izmaksas EUR"
            projectCostInfo="500 345">
          </cds-project-card>
        </cds-main-content-item>
        <cds-main-content-item
          size="03"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <div>
            <cds-radio-button-group
              legend-text="Pārskatīšanas iemesls"
              label-position="right"
              orientation="vertical"
              name="radio-group">
              <cds-radio-button
                label-text="Finansējuma pārpalikums"
                value="Finansējuma pārpalikums"></cds-radio-button>
              <cds-radio-button
                label-text="Apstrīdējums"
                value="Apstrīdējums"></cds-radio-button>
              <cds-radio-button
                label-text="CFLA iekšējā pārvērtēšana"
                value="CFLA iekšējā pārvērtēšana"></cds-radio-button>
              <cds-radio-button
                label-text="Tiesvedība"
                value="Tiesvedība"></cds-radio-button>
            </cds-radio-button-group>
          </div>
        </cds-main-content-item>
        <cds-main-content-item
          size="08"
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10 cds--grid-column-hang">
          <div>
            <cds-radio-button-group
              legend-text="Pārskatīšanas virzība"
              label-position="right"
              orientation="vertical"
              name="radio-group">
              <cds-radio-button
                label-text="Nodot VI"
                value="Nodot VI "></cds-radio-button>
              <cds-radio-button
                label-text="Sākt pārvērtēšanu  CFLA uzreiz"
                value="Sākt pārvērtēšanu  CFLA uzreiz"></cds-radio-button>
            </cds-radio-button-group>
          </div>
        </cds-main-content-item>

        <div
          class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--lg:col-span-10">
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
            <cds-button href="https://www.ibm.com">Izveidot</cds-button>
          </cds-button-set>
        </div>
      </cds-main-content-block>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationReview;
