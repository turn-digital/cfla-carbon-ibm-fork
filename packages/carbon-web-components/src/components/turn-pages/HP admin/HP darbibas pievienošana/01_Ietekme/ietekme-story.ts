import { html } from 'lit-html';
import storyDocs from './ietekme-story.mdx';
import './ietekme';
import styles from '../../../../../../assets/css/themes.css';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Add16 from '@carbon/icons/lib/add/16';

const statusArray = [
  { text: 'Status 1', value: 'Status 1' },
  { text: 'Status 2', value: 'Status 2' },
  { text: 'Status 3', value: 'Status 3' },
];

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

const chosenCategoriesData = [
  { label: 'Projekta dzīves cikla posms', value: 'Sākumposma' },
  {
    label: 'Eksperta tips',
    value: 'CFLA ekspertu vērtējumsar nodaļas vadītāja iesaisti',
  },
  { label: 'Ekspertīzes joma', value: 'Valsts atbalsta ' },
];

export const Propsed = () => {
  return html`<cds-main-content-block-open
    ><div slot="header" class="cds--css-grid-column cds--col-span-100">
      <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
        <cds-label-value-horizontal label="Atlases nosaukums:">
          <cds-link href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </cds-link>
        </cds-label-value-horizontal>
        <cds-label-value-horizontal label="Atlases nosaukums:">
          <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
        </cds-label-value-horizontal>
        <cds-divider size="3"></cds-divider>
        <cds-label-value-horizontal label="Atlases nosaukums:">
          <cds-link href="#">1.1 </cds-link>
        </cds-label-value-horizontal>
      </cds-contextual-header>
      <div class="cds--css-grid cds--css-grid--narrow">
        <div
          class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
          <cds-main-content-item size="07">
            <cds-header-title
              title="Horizontālo principu konfigurēšana v1"></cds-header-title>
          </cds-main-content-item>
          <cds-main-content-item size="07">
            <cds-status-history
              .statusHistoryItems=${statusHistoryItemsArr}
              statusHistoryTitle="Statusu vēsture"
              currenStatusColor="grey"
              currenStatusTitle="Sagatavošanā"
              currenStatusDate="25.10.2019 10:34"></cds-status-history>
          </cds-main-content-item>
        </div>
        <div
          class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6 cds--css-grid-column">
          <div>
            <cds-main-content-item size="07" isStatusChangePanel>
              <cds-dropdown-button
                buttonLabel="Mainīt statusu"
                .statusArray="${statusArray}"></cds-dropdown-button>
            </cds-main-content-item>
          </div>
        </div>
      </div>
    </div>
    <div slot="content" class="cds--css-grid-column cds--col-span-100">
      <div class="cds--css-grid-column cds--col-span-100">
        <cds-print-download
          downloadLink="https://example.com/download"
          printLink="https://example.com/print">
        </cds-print-download>
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
          <cds-radio-button label-text="Nav" value="value-1"></cds-radio-button>
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
          <cds-radio-button label-text="Nav" value="value-1"></cds-radio-button>
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
        </cds-button-set>
      </div>
    </div>
  </cds-main-content-block-open>`;
};
export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/HP admin/HP darbības pievienošana/Ietekme',
};
