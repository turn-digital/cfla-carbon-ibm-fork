/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../../globals/settings';
import styles from './eksperta.scss';
import { carbonElement as customElement } from '../../../../../globals/decorators/carbon-element';
import Edit16 from '@carbon/icons/lib/edit/16';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Add16 from '@carbon/icons/lib/add/16';

/**
 *
 * VĒRTĒJUMA PĀRSKATĪŠANA
 *
 */

@customElement(`${prefix}-eksperta-vertesana`)
class CDSPValuationOpen extends LitElement {
  openModal = () => {
    //@ts-ignore
    this.shadowRoot.getElementById('modal-example').open = true;
  };

  itemSelectedHandler = (event) => {
    //@ts-ignore
    this.selectedStatus = event.detail.item.__value;
    //@ts-ignore
    this.shadowRoot.getElementById('status-change-modal').open = true;
    //@ts-ignore
    console.log('selectedStatus', this.selectedStatus);
  };

  saveButtonHandler = () => {
    console.log('test func');
  };
  render() {
    const statusArray = [
      { text: 'Status 1', value: 'Status 1' },
      { text: 'Status 2', value: 'Status 2' },
      { text: 'Status 3', value: 'Status 3' },
    ];
    const statusRelatedPersonsArr = [
      {
        shortRole: 'CFLA atbildīgai',
        personName: 'Anna Bērziņa',
        iconType: '1',
      },
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
        status: 'Atgriezta precizēšanai 2adas',
        author: 'Test author',
        pamatojums: 'Pamatojums 2',
        id: '3',
      },
    ];

    return html`
      <link
        rel="stylesheet"
        href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css" />

      <link
        rel="stylesheet"
        href="https://demo.turn.lv/kase/dist/assets/css/themes.css" />

      <cds-main-content-block-open withTabs>
        <div slot="header" class="cds--css-grid-column cds--col-span-100">
          <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#"
                >Zinātnes politikas ieviešana, vadība un kapacitātes
                stiprināšana
              </cds-link>
            </cds-label-value-horizontal>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
            </cds-label-value-horizontal>
            <cds-divider size="3"></cds-divider>
            <cds-label-value-horizontal label="Atlases nosaukums">
              <cds-link href="#">1.1 </cds-link>
            </cds-label-value-horizontal>
          </cds-contextual-header>
          <div>
            <cds-divider size="3"></cds-divider>
            <cds-inline-notification
              style="min-width: 100%; margin-bottom: .5rem"
              title="Notification title"
              subtitle="Subtitle text goes here."
              low-contrast>
            </cds-inline-notification>
          </div>

          <div class="cds--css-grid cds--css-grid--narrow">
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--css-grid-column">
              <cds-main-content-item size="07">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-related-persons
                  .statusRelatedPersons=${statusRelatedPersonsArr}></cds-related-persons>
              </cds-main-content-item>
              <cds-main-content-item size="07">
                <cds-status-history
                  .statusHistoryItems=${statusHistoryItemsArr} currenStatusColor="green"
                  currenStatusTitle="CFLA pārdomas"
                  currenStatusDate="25.10.2019 10:34"></cds-status-history>
              </cds-main-content-item>
            </div>
            <div
              class="cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6 cds--css-grid-column">
              <div>
                <cds-main-content-item size="07" isStatusChangePanel>
                  <cds-dropdown-button
                    label="Mainīt statusu"
                    .dropdownHandler="${this.itemSelectedHandler}"
                    .statusArray="${statusArray}"></cds-dropdown-button>
                </cds-main-content-item>
              </div>
            </div>
          </div>
        </div>

        <div slot="tabs" class="cds--css-grid-column cds--col-span-100">
          <cds-tabs trigger-content="Select an item" value="tab1" type="contained" class="cds-theme-zone-g10 cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
            <cds-tab id="tab1" target="panel1" value="tab1">Vērtēšana</cds-tab>
            <cds-tab id="tab-2" target="panel-2" value="tab-2"
              disabled>Projekts</cds-tab
            >
          </cds-tabs>
          <cds-tab-content-container
            id="panel1"
            role="tabpanel"
            aria-labelledby="tab1"
            hidden>
            <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-label-value
              label="Projekta cikls"
              value="Vidusposma"></cds-label-value>
              <cds-divider></cds-divider>
            <cds-label-value
              label="Eksperta veids"
              value="LZP ekspertu vērtējums"></cds-label-value>
            <cds-label-value size="sm" label="Vērtēšanas termiņš">
              <span>12.01.2024</span>
              <cds-button kind="ghost" size="sm"
                >${Edit16({ slot: 'icon' })}</cds-button
              ></cds-label-value
            >
          </cds-main-content-item>

          <cds-main-content-item
            size="08"
            class="cds--css-grid-column cds--col-span-100">
            <cds-table size="xs">
              <cds-table-header-title slot="title"
                >Veidlapas sagatave</cds-table-header-title
              >
              <cds-table-toolbar slot="toolbar">
                <cds-table-toolbar-content>
                  <cds-button
                    size="lg"
                    kind="secondary"
                    tooltip-alignment=""
                    tooltip-position="top"
                    type="button"
                    id="modal-example-button"
                    @click="${this.openModal}"
                    has-main-content="">
                    Pievienot ${Add16({ slot: 'icon' })}
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Nosaukums</cds-table-header-cell>
                  <cds-table-header-cell
                    >Pievienošanas datums</cds-table-header-cell
                  >
                  <cds-table-header-cell
                    >Pievienotājs</cds-table-header-cell
                  >
                  <cds-table-header-cell></cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>
                    <a
                      href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      download
                      style="text-decoration: none;">
                      Paraugs.docx
                    </a>
                  </cds-table-cell>
                  <cds-table-cell>22.03.2023 10:15</cds-table-cell>
                  <cds-table-cell>Anna Bērziņa</cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${OverflowMenuVertical16({
                        class: `${prefix}--overflow-menu__icon`,
                        slot: 'icon',
                      })}
                      <span slot="tooltip-content"> Options </span>
                      <cds-overflow-menu-body>
                        <cds-overflow-menu-item
                          >Lejupielādēt</cds-overflow-menu-item
                        >
                        <cds-overflow-menu-item divider danger
                          >Dzēst</cds-overflow-menu-item
                        >
                      </cds-overflow-menu-body>
                    </cds-overflow-menu>
                  </cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
          </cds-main-content-item>
          <div
            size="08"
            class="cds--css-grid-column cds--col-span-100">
            <cds-table size="xs">
              <cds-table-header-title slot="title"
                >Vērtēšanai nododamie dokumenti</cds-table-header-title
              >
              <cds-table-toolbar slot="toolbar">
                <cds-table-toolbar-content>
                  <cds-button
                    size="lg"
                    kind="secondary"
                    tooltip-alignment=""
                    tooltip-position="top"
                    type="button"
                    id="modal-example-button"
                    @click="${this.openModal}"
                    has-main-content="">
                    Pievienot ${Add16({ slot: 'icon' })}
                  </cds-button>
                </cds-table-toolbar-content>
              </cds-table-toolbar>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Nosaukums</cds-table-header-cell>
                  <cds-table-header-cell
                    >Pievienošanas datums</cds-table-header-cell
                  >
                  <cds-table-header-cell
                    >Pievienotājs</cds-table-header-cell
                  >
                  <cds-table-header-cell></cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>
                    <a
                      href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      download
                      style="text-decoration: none;">
                      projekta iesniegums.pdf
                    </a>
                  </cds-table-cell>
                  <cds-table-cell>22.03.2023 10:15</cds-table-cell>
                  <cds-table-cell>Anna Bērziņa</cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${OverflowMenuVertical16({
                        class: `${prefix}--overflow-menu__icon`,
                        slot: 'icon',
                      })}
                      <span slot="tooltip-content"> Options </span>
                      <cds-overflow-menu-body>
                        <cds-overflow-menu-item
                          >Lejupielādēt</cds-overflow-menu-item
                        >
                        <cds-overflow-menu-item divider danger
                          >Dzēst</cds-overflow-menu-item
                        >
                      </cds-overflow-menu-body>
                    </cds-overflow-menu>
                  </cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>
                    <a
                      href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      download
                      style="text-decoration: none;">
                      PI_pielikums_1.pdf
                    </a>
                  </cds-table-cell>
                  <cds-table-cell>22.03.2023 10:20</cds-table-cell>
                  <cds-table-cell>Pēteris Jurčenko</cds-table-cell>
                  <cds-table-cell>
                    <cds-overflow-menu>
                      ${OverflowMenuVertical16({
                        class: `${prefix}--overflow-menu__icon`,
                        slot: 'icon',
                      })}
                      <span slot="tooltip-content"> Options </span>
                      <cds-overflow-menu-body>
                        <cds-overflow-menu-item
                          >Lejupielādēt</cds-overflow-menu-item
                        >
                        <cds-overflow-menu-item divider danger
                          >Dzēst</cds-overflow-menu-item
                        >
                      </cds-overflow-menu-body>
                    </cds-overflow-menu>
                  </cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
          </div>
          </cds-tab-content-container>
        </div>
      
          <cds-tab-content-container
            id="panel-2"
            role="tabpanel"
            aria-labelledby="tab-2"
            hidden>
            <h4>Content for option 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </cds-tab-content-container>
        </div>
      </cds-main-content-block-open>

      <cds-modal id="modal-example">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body
          ><cds-file-uploader
            label-description="Faila izmērs nedrīkst būt lielāks par 2MB. Atbalstāmie failu tipi .jpg, .png, .doc, .docx, .xls, .txt"
            label-title="Augšupielādēt failus">
            <cds-file-uploader-drop-container
              accept="image/jpeg image/png"
              name=""
              slot="drop-container">
              Pievienot failu
            </cds-file-uploader-drop-container>
          </cds-file-uploader>
          <cds-text-editor
            editorId="editor1"
            editorConfig='{
            "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes",
            "max_char_length": 200,
            "fetch_obj": {
            "urlToFetch": "https://jsonplaceholder.typicode.com/posts",
            "fetchMethod": "POST",
            "errorAlertMessages": "Error occurred while fetching data",
            "savedAlertMessages": "All data saved successfully"
            }
            }'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>

      <cds-modal id="status-change-modal">
        <cds-modal-header>
          <cds-modal-close-button></cds-modal-close-button>
          <cds-modal-label>Dokumenti</cds-modal-label>
          <cds-modal-heading>Dokumenta pievienošana</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <p>
            Spiežot “atgriezt nodaļas vadītājam” Jūs... paskaidrot, kādas sekas.
          </p>
          <cds-text-editor
            editorId="editor_status_modal"
            editorConfig='{
        "editorTitle": "Pārskatīšanas / Apstrīdēšanas gaitas piezīmes"
        }'></cds-text-editor>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" data-modal-close
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="primary">Save</cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSPValuationOpen;
