import { html } from 'lit-html';
import storyDocs from './ietekme-story.mdx';
import './ietekme';
import styles from '../../../../../../assets/css/themes.css';

const statusHistoryItemsArr = [
  {
    date: '25.10.2019 10:34',
    status: 'Atgriezta precizēšanai 1',
    author: 'Elīne Millere',
    pamatojums: 'Pamatojums 1',
    id: '1',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 2',
    author: 'Test author',
    pamatojums: 'Pamatojums 2',
    id: '2',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 2',
    author: 'Test author',
    pamatojums: 'Pamatojums 2',
    id: '3',
  },
];

export const Propsed = () => {
  return html`
    <div class="cds-theme-zone-white cds-green-theme">
      <cds-doc-page>
        <span slot="header">
          <cds-contextual-header title="Atlase: 1.1.1.1">
            <cds-label-value-horizontal label="Atlases nosaukums:">
              <cds-link href="#"
                >Zinātnes politikas ieviešana, vadība un kapacitātes
                stiprināšana
              </cds-link>
            </cds-label-value-horizontal>
            <cds-divider size="3"></cds-divider>
            <cds-label-value-horizontal label="Atlases status">
              <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
            </cds-label-value-horizontal>
            <cds-divider size="3"></cds-divider>
            <cds-label-value-horizontal label="Politikas programma">
              <cds-link href="#">1.1 </cds-link>
            </cds-label-value-horizontal>
          </cds-contextual-header>
          <cds-divider size="5"></cds-divider>
          <div class="cds--subgrid cds--subgrid--condensed">
            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--grid-column-hang">
              <cds-header-title title="Horizontālo principu konfigurēšana v1">
              </cds-header-title>
              <cds-divider size="5"></cds-divider>
              <cds-status-history
                .statusHistoryItems="${statusHistoryItemsArr}"
                statusHistoryTitle="Statusu vēsture"
                currenStatusColor="grey"
                currenStatusTitle="Sagatavošanā"
                currenStatusDate="25.10.2019 10:34">
              </cds-status-history>
              <cds-divider size="5"></cds-divider>
            </div>
            <div
              class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6">
              <cds-divider size="5"></cds-divider>
            </div>
          </div>
        </span>
        <span slot="content">
          <cds-doc-page-tab-content>
            <span slot="tab-content">
              <cds-doc-page-header
                type="subtitle"
                title="Horizontālo principu pievienošana">
              </cds-doc-page-header>
              <cds-divider size="9"></cds-divider>
              <div class="cds--subgrid cds--subgrid--condensed">
                <div
                  class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
                  <cds-progress-indicator space-equally>
                    <cds-progress-step
                      label="Principi"
                      state="complete"></cds-progress-step>
                    <cds-progress-step
                      label="Ietekme un minimālais skaits"
                      state="current"></cds-progress-step>
                    <cds-progress-step
                      label="HP darbību pievienošana"
                      state="incomplete"></cds-progress-step>
                    <cds-progress-step
                      label="Priekšskatījums"
                      state="incomplete"></cds-progress-step>
                  </cds-progress-indicator>
                </div>
              </div>

              <cds-divider size="6"></cds-divider>

              <cds-inline-notification
                style="min-width: 100%;"
                low-contrast
                kind="error"
                title="Neatbilstošs minimālo darbību skaits"
                subtitle="Minimālais nepieciešamais darbību skaits nevar pārsniegt sistēmā esošo darbību skaitu.">
              </cds-inline-notification>

              <cds-divider size="6"></cds-divider>
              <div class="cds--subgrid cds--subgrid--condensed">
                <div
                  class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
                  <cds-header-title title="Energoefektivitāte pirmajā vietā">
                  </cds-header-title>
                </div>
              </div>
              <div class="cds--subgrid cds--subgrid--condensed">
                <div
                  class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-7 cds--xlg:col-span-6 cds--grid-column-hang">
                  <cds-divider size="6"></cds-divider>
                  <cds-radio-button-group
                    label-position="right"
                    orientation="vertical"
                    legend-text="HP ietekme"
                    name="HP-ietekme">
                    <cds-radio-button
                      label-text="Nav"
                      value="value-1"></cds-radio-button>
                    <cds-radio-button
                      label-text="Netieša pozitīva ietekme"
                      value="value-2"></cds-radio-button>
                    <cds-radio-button
                      label-text="Tieša pozitīva ietekme"
                      value="value-3"></cds-radio-button>
                  </cds-radio-button-group>
                  <cds-divider size="6"></cds-divider>
                  <cds-number-input
                    value="0"
                    min="0"
                    max="100"
                    hide-steppers
                    label="Minimāli nepieciešams HP darbību skaits"
                    helper-text="Definēts kritēriju piemērošanas metodikā">
                  </cds-number-input>
                  <cds-divider size="6"></cds-divider>
                </div>
              </div>

              <div class="cds--subgrid cds--subgrid--condensed">
                <div
                  class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
                  <cds-header-title title="VINPI"> </cds-header-title>
                  <cds-divider size="6"></cds-divider>
                </div>
              </div>

              <div class="cds--subgrid cds--subgrid--condensed">
                <div
                  class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-7 cds--xlg:col-span-6 cds--grid-column-hang">
                  <cds-radio-button-group
                    label-position="right"
                    orientation="vertical"
                    legend-text="HP ietekme"
                    name="HP-ietekme">
                    <cds-radio-button
                      label-text="Nav"
                      value="value-1"></cds-radio-button>
                    <cds-radio-button
                      label-text="Netieša pozitīva ietekme"
                      value="value-2"></cds-radio-button>
                    <cds-radio-button
                      label-text="Tieša pozitīva ietekme"
                      value="value-3"></cds-radio-button>
                  </cds-radio-button-group>
                  <cds-divider size="6"></cds-divider>
                  <cds-number-input
                    value="0"
                    min="0"
                    max="100"
                    hide-steppers
                    label="Minimāli nepieciešamaiss VINPI vispārīgo HP darbību skaits"
                    helper-text="Definēts kritēriju piemērošanas metodikā">
                  </cds-number-input>
                  <cds-divider size="6"></cds-divider>
                  <cds-number-input
                    value="0"
                    min="0"
                    max="100"
                    hide-steppers
                    label="Minimāli nepieciešams VINPI specifisko HP darbību skaits"
                    helper-text="Definēts kritēriju piemērošanas metodikā">
                  </cds-number-input>
                  <cds-divider size="6"></cds-divider>
                  <cds-number-input
                    value="0"
                    min="0"
                    max="100"
                    hide-steppers
                    label="Minimāli nepieciešamais VINPI HP rādītāju skaits"
                    helper-text="Definēts kritēriju piemērošanas metodikā">
                  </cds-number-input>
                  <cds-divider size="6"></cds-divider>
                </div>
              </div>
              <cds-button-set>
                <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
                <cds-button href="https://www.ibm.com">Turpināt</cds-button>
              </cds-button-set></span
            >
          </cds-doc-page-tab-content>
        </span>
      </cds-doc-page>
    </div>
  `;
};
export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/HP darbības pievienošana/Ietekme',
};
