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

@customElement(`${prefix}-page-valuation-review`)
class CDSPValuationReview extends LitElement {
  render() {
    return html`
      <div style="width: 60%">
        <cds-back-to
          title="Uz sarakstu"
          link="http://localhost:9000/?path=/story/custom-compnents-back-to--default"></cds-back-to>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <cds-progress-indicator>
          <cds-progress-step
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
        <div style="margin-top: 40px; margin-bot: 20px">
          <cds-project-card
            projectId="1.1.1.1/16/A/004"
            tagTitle="Apstiprināts ar nosacījumu"
            tagType="purple"
            projectDateInfo="05.01.2021 - 30.05.2028"
            projectCostInfo="500 345">
          </cds-project-card>
        </div>

        <div style="margin-top: 40px;">
          <p style="font-weight: 400; font-size: 14px">Pārskatīšanas iemesls</p>
          <cds-radio-button-group
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

        <div style="margin-top: 20px;">
          <p style="font-weight: 400; font-size: 14px">Pārskatīšanas virzība</p>
          <cds-radio-button-group
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
        <div style="margin-top: 40px">
          <cds-button-set>
            <cds-button href="https://www.ibm.com">Atcelt</cds-button>
            <cds-button href="https://www.ibm.com">Turpināt</cds-button>
          </cds-button-set>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <cds-back-to
          title="Uz sarakstu"
          link="http://localhost:9000/?path=/story/custom-compnents-back-to--default"></cds-back-to>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <cds-progress-indicator>
          <cds-progress-step
            label="Pārskatīšanas veids"
            description="Step 1: Register a onChange event"
            state="complete"></cds-progress-step>
          <cds-progress-step
            label="Pamatinfo"
            description="The progress indicator will listen for clicks on the steps"
            state="current"></cds-progress-step>
          <cds-progress-step
            label="Priekšskatījums"
            description="The progress indicator will listen for clicks on the steps"
            state="incomplete"></cds-progress-step>
        </cds-progress-indicator>
        <div style="margin-top: 40px;">
          <cds-date-picker>
            <cds-date-picker-input
              label-text="Pārskatīšanas/Apstrīdējuma iesnieguma saņemšanas datums"
              placeholder="mm/dd/yyyy">
            </cds-date-picker-input>
          </cds-date-picker>

          <div style="margin-top: 40px;"></div>
          <cds-file-uploader
            label-description="Max file size is 500kb. Supported file types are .jpg and .png."
            label-title="Augšupielādēt pārskatīšanas/apstrīdējuma iesniegumu">
            <cds-file-uploader-drop-container
              accept="image/jpeg image/png"
              name=""
              slot="drop-container">
              Ievelciet un nometiet failus šeit vai spiediet, lai augšupielādētu
            </cds-file-uploader-drop-container>
          </cds-file-uploader>

          <div style="margin-top: 40px;">
            <p style="font-size: 12px">Pārskatīšanas būtība</p>
            <cds-text-editor></cds-text-editor>
          </div>
          <div style="margin-top: 40px;">
            <div style="margin-top: 40px;">
              <cds-button-set>
                <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
                <cds-button href="https://www.ibm.com">Turpināt</cds-button>
              </cds-button-set>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <cds-back-to
            title="Uz sarakstu"
            link="http://localhost:9000/?path=/story/custom-compnents-back-to--default"></cds-back-to>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <cds-progress-indicator>
            <cds-progress-step
              label="Pārskatīšanas veids"
              description="Step 1: Register a onChange event"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Pamatinfo"
              description="The progress indicator will listen for clicks on the steps"
              state="complete"></cds-progress-step>
            <cds-progress-step
              label="Priekšskatījums"
              description="The progress indicator will listen for clicks on the steps"
              state="current"></cds-progress-step>
          </cds-progress-indicator>
          <div style="margin-top: 40px; margin-bot: 20px">
            <cds-project-card
              projectId="1.1.1.1/16/A/004"
              tagTitle="Apstiprināts ar nosacījumu"
              tagType="purple"
              projectDateInfo="05.01.2021 - 30.05.2028"
              projectCostInfo="500 345">
            </cds-project-card>
          </div>

          <div style="margin-top: 40px;">
            <div style="margin-top: 40px">custom components here</div>

            <div style="margin-top: 40px">
              <p style="font-size: 12px">Pārskatīšanas iemesls</p>
              <p style="font-size: 14px">Finansējuma pārpalikums</p>
            </div>
            <div style="margin-top: 40px">
              <p style="font-size: 12px">Pārskatīšanas virzība</p>
              <p style="font-size: 14px">Sākt pārvērtēšanu CFLA uzreiz</p>
            </div>
            <div style="margin-top: 40px">
              <p style="font-size: 12px">
                Apstrīdējuma iesnieguma saņemšanas datums
              </p>
              <p style="font-size: 14px">01.01.2024</p>
            </div>
            <div style="margin-top: 40px">
              <p style="font-size: 12px">
                Apstrīdējuma iesnieguma saņemšanas datums
              </p>
              <p style="font-size: 14px"><cds-link>Filename.png</cds-link></p>
            </div>
            <div style="margin-top: 40px">
              <p style="font-size: 12px">Apstrīdējuma būtība</p>
              <p style="font-size: 14px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                condimentum diam id diam blandit congue. Phasellus dictum augue
                rutrum justo consectetur, vel posuere purus porta. Aenean
                finibus pretium eros, in tempor est aliquam vel.
              </p>
            </div>

            <div style="margin-top: 40px;">
              <cds-button-set>
                <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
                <cds-button href="https://www.ibm.com">Izveidot</cds-button>
              </cds-button-set>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationReview;
