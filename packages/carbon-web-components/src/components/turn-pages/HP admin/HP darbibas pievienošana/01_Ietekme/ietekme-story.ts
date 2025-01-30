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
    <cds-doc-page>
      <span slot="header">
        <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19/A/043">
          <cds-label-value-horizontal label="Projekta nosaukums">
            <cds-link href="#"
              >MVU inovatīvas uzņēmējdarbības attīstība
            </cds-link>
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Iesniedzējs">
            Latvijas Universitāte
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Projekta iensieguma statuss">
            <cds-tag type="blue">Sagatavošanā</cds-tag> 25.10.2019 10:34
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
        <cds-doc-page-tab-content withPrintDownload>
          <span slot="tab-print-download">
            <cds-print-download
              downloadLink="https://example.com/download"
              printLink="https://example.com/print">
            </cds-print-download
          ></span>
          <span slot="tab-content">
            <cds-page-title title="Horizontālo principu pievienošana">
            </cds-page-title>

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

            <cds-divider size="6"></cds-divider>

            <cds-inline-notification
              low-contrast
              kind="error"
              title="Neatbilstošs minimālo darbību skaits"
              subtitle="Minimālais nepieciešamais darbību skaits nevar pārsnniegt sistēmā esošo darbību skaitu.">
            </cds-inline-notification>

            <cds-divider size="6"></cds-divider>
            <cds-header-title title="Energoefektivitāte pirmajā vietā">
            </cds-header-title>
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
                label-text="Netieša pozitīva ietekmē"
                value="value-2"></cds-radio-button>
              <cds-radio-button
                label-text="Tieša pozitīva ietekmē"
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
            <cds-header-title title="VINPI"> </cds-header-title>
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
                label-text="Netieša pozitīva ietekmē"
                value="value-2"></cds-radio-button>
              <cds-radio-button
                label-text="Tieša pozitīva ietekmē"
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
            <cds-button-set>
              <cds-button href="https://www.ibm.com">Atpakaļ</cds-button>
              <cds-button href="https://www.ibm.com">Turpināt</cds-button>
            </cds-button-set></span
          >
        </cds-doc-page-tab-content>
      </span>
    </cds-doc-page>
  `;
};
export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/HP darbības pievienošana/Ietekme',
};
