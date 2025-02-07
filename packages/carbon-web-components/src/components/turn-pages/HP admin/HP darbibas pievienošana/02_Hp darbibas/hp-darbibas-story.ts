import { html } from 'lit-html';
import storyDocs from './hp-darbibas-story.mdx';
import './hp-darbibas';
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

const chosenCategoriesData = [
  { label: 'HP ietekme', value: 'Nav' },
  {
    label: 'Minimāli nepieciešams HP darbību skaits',
    value: '4',
  },
];
const chosenCategoriesData1 = [
  { label: 'HP ietekme', value: 'Nav' },
  {
    label: 'Minimāli nepieciešamaiss VINPI vispārīgo HP darbību skaits',
    value: '2',
  },
  {
    label: 'Minimāli nepieciešams VINPI specifisko HP darbību skaits',
    value: '4',
  },
  {
    label: 'Minimāli nepieciešamais VINPI HP rādītāju skaits',
    value: '1',
  },
];

export const Propsed = () => {
  return html`
    <cds-doc-page>
      <span slot="header">
        <cds-contextual-header title="Atlase: 1.1.1.1">
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#"
              >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
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
        <cds-doc-page-tab-content withPrintDownload>
          <span slot="tab-print-download">
            <cds-print-download
              downloadLink="https://example.com/download"
              printLink="https://example.com/print">
            </cds-print-download
          ></span>
          <span slot="tab-content">
            <div class="cds--subgrid cds--subgrid--condensed">
              <div
                class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
                <cds-page-title title="Horizontālo principu pievienošana">
                </cds-page-title>

                <cds-progress-indicator space-equally>
                  <cds-progress-step
                    label="Principi"
                    state="complete"></cds-progress-step>
                  <cds-progress-step
                    label="Ietekme un minimālais skaits"
                    state="complete"></cds-progress-step>
                  <cds-progress-step
                    label="HP darbību pievienošana"
                    state="current"></cds-progress-step>
                  <cds-progress-step
                    label="Priekšskatījums"
                    state="incomplete"></cds-progress-step>
                </cds-progress-indicator>

                <cds-divider size="6"></cds-divider>
                <cds-header-title title="Energoefektivitāte pirmajā vietā">
                </cds-header-title>
              </div>
            </div>

            <cds-divider size="5"></cds-divider>
            <cds-chosen-categories
              .chosenCategoriesData="${chosenCategoriesData}">
            </cds-chosen-categories>

            <cds-divider size="5"></cds-divider>

            <cds-table size="sm" expandable>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>ID</cds-table-header-cell>
                  <cds-table-header-cell
                    >HP darbības nosaukums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>EF01</cds-table-cell>
                  <cds-table-cell
                    >Darbības, kas paredz enerģijas ietaupījumu</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>EF02</cds-table-cell>
                  <cds-table-cell
                    >Darbības, kas paredz pāreju uz atjaunojamiem
                    energoresursiem.</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>EF03</cds-table-cell>
                  <cds-table-cell
                    >Līdzšinējie pasākumi tiks kopumā vai daļēji aizstāti ar
                    izmaksefektīviem, tehniski, ekonomiski un videi nekaitīgiem
                    alternatīviem pasākumiem, kas vienlīdz efektīvi nodrošina
                    attiecīgo mērķu sasniegšanu.</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
              </cds-table-body>
            </cds-table>

            <div class="cds--subgrid cds--subgrid--condensed">
              <div
                class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
                <cds-divider size="6"></cds-divider>
                <cds-header-title title="VINPI"> </cds-header-title>
                <cds-divider size="5"></cds-divider>
              </div>
            </div>

            <cds-chosen-categories
              .chosenCategoriesData="${chosenCategoriesData1}">
            </cds-chosen-categories>
            <cds-divider size="5"></cds-divider>
            <cds-table size="sm" expandable>
              <cds-table-header-title slot="title"
                >VINPI vispārīgās</cds-table-header-title
              >
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>ID</cds-table-header-cell>
                  <cds-table-header-cell
                    >HP darbības nosaukums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>VP01</cds-table-cell>
                  <cds-table-cell
                    >Diskrimināciju un stereotipus mazinoša
                    komunikācija</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>VP02</cds-table-cell>
                  <cds-table-cell
                    >Informācijas pieejamība cilvēkiem ar funkcionālajiem
                    traucējumiem</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>VP03</cds-table-cell>
                  <cds-table-cell
                    >Sadaļas “Viegli lasīt” izveide</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
              </cds-table-body>
            </cds-table>
            <cds-divider size="5"></cds-divider>
            <cds-table size="sm" expandable>
              <cds-table-header-title slot="title"
                >VINPI specifiskās - Pētījumi, izvērtējumi,
                aptaujas</cds-table-header-title
              >
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>ID</cds-table-header-cell>
                  <cds-table-header-cell
                    >HP darbības nosaukums</cds-table-header-cell
                  >
                  <cds-table-header-cell>Īstenošana</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>P01</cds-table-cell>
                  <cds-table-cell
                    >Konsultācijas ar ekspertiem nediskriminācijas
                    jomā</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row>
                  <cds-table-cell>P02</cds-table-cell>
                  <cds-table-cell
                    >Pētījumi par sabiedrības novecošanos</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      checked
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row> </cds-table-expanded-row>
                <cds-table-row expanded>
                  <cds-table-cell>P03</cds-table-cell>
                  <cds-table-cell
                    >Pētījumos integrēti dzimumu līdztiesības
                    jautājumi</cds-table-cell
                  >
                  <cds-table-cell
                    ><cds-toggle
                      size="sm"
                      label-a="Izvēlēts"
                      label-b="Nav izvēlēts"></cds-toggle
                  ></cds-table-cell>
                </cds-table-row>
                <cds-table-expanded-row>
                  <cds-divider size="5"></cds-divider>
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
                          >Pasākumu un izstrādāto materiālu, kuru saturā
                          integrēti nediskriminācijas jautājumi, tostarp par
                          tiesiskajiem un praktiskajiem aspektiem,
                          skaits</cds-table-cell
                        >
                      </cds-table-row>
                    </cds-table-body>
                  </cds-table>
                  <cds-divider size="5"></cds-divider>
                </cds-table-expanded-row>
              </cds-table-body>
            </cds-table>
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
  title: 'Views/HP admin/HP darbības pievienošana/HP darbības',
};
