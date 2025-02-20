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
import storyDocs from './doc-page-story.mdx';
import ToolBox16 from '@carbon/web-components/es/icons/tool-box/16';
import CertificateCheck16 from '@carbon/web-components/es/icons/certificate--check/16';

const itemSelectedHandler = (event) => {
  //@ts-ignore
  this.selectedStatus = event.detail.item.__value;
  //@ts-ignore
  this.shadowRoot.getElementById('status-change-modal').open = true;
  //@ts-ignore
  console.log('selectedStatus', this.selectedStatus);
};

const statusArray = [
  { text: 'Status 1', value: 'Status 1' },
  { text: 'Status 2', value: 'Status 2' },
  { text: 'Status 3', value: 'Status 3' },
];
const statusRelatedPersons = [
  { shortRole: 'PV', personName: 'Vards Uzvards 1', iconType: '1' },
  { shortRole: 'AV', personName: 'Vards Uzvards 2', iconType: '2' },
  { shortRole: 'BN', personName: 'Vards Uzvards 3', iconType: '3' },
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

export const tabs = () => {
  return html`
    <cds-doc-page withTabs>
      <span slot="header">
        <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#"
              >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
            </cds-link>
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#">1.1 </cds-link>
          </cds-label-value-horizontal>
        </cds-contextual-header>
        <cds-divider size="5"></cds-divider>
        <cds-inline-notification
          style="min-width: 100%;"
          title="Notification title"
          subtitle="Subtitle text goes here."
          low-contrast>
        </cds-inline-notification>
        <cds-divider size="5"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-header-title title="Projekta iesnieguma vērtēšanas veidlapa">
            </cds-header-title>
            <cds-divider size="5"></cds-divider>
            <cds-related-persons .statusRelatedPersons=${statusRelatedPersons}>
            </cds-related-persons>
            <cds-divider size="5"></cds-divider>
            <cds-status-history
              .statusHistoryItems=${statusHistoryItemsArr}
              statusHistoryTitle="Statusu vēsture"
              currenStatusColor="green"
              currenStatusTitle="CFLA pārdomas"
              currenStatusDate="25.10.2019 10:34">
            </cds-status-history>
            <cds-divider size="5"></cds-divider>
          </div>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6">
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-dropdown-button
                buttonLabel="Mainīt statusu"
                .dropdownHandler="${itemSelectedHandler}"
                .statusArray="${statusArray}"></cds-dropdown-button>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-countdown-timer
                deadline="2025-07-08T00:00:00"
                title="Atlikušais laiks līdz iesniegšanai"
                language="lv"></cds-countdown-timer>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
            <cds-related-documents title="Saistītie dokumenti">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                ${ToolBox16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                ${CertificateCheck16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārskatīšanu/apstrīdēšanu"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
      </span>
      <span slot="tabs">
        <cds-tabs value="all" type="contained" class="cds-theme-zone-g10">
          <cds-tab id="tab-all" target="panel-all" value="all"
            >Tab label 1</cds-tab
          >
          <cds-tab
            id="tab-cloudFoundry"
            target="panel-cloudFoundry"
            value="cloudFoundry">
            Tab label 2
          </cds-tab>
          <cds-tab id="tab-three" target="panel-three" value="three">
            Tab label 3
          </cds-tab>
          <cds-tab id="tab-four" target="panel-four" value="four">
            Tab label 4
          </cds-tab>
        </cds-tabs>
      </span>

      <span slot="content">
        <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden="">
          <cds-doc-page-tab-content withSidenav withPrintDownload>
            <span slot="tab-sidenav">
              <cds-side-nav-items>
                <cds-side-nav-link active href="#">L0 link</cds-side-nav-link>
                <cds-side-nav-link href="#">L0 link</cds-side-nav-link>
              </cds-side-nav-items>
            </span>
            <span slot="tab-sidenav-mobile">
              <cds-dropdown label="Darbības">
                <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
                <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
                <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
              </cds-dropdown>
            </span>
            <span slot="tab-print-download">
              <cds-print-download
                downloadLink="https://example.com/download"
                printLink="https://example.com/print"></cds-print-download>
            </span>
            <span slot="tab-content">
              <cds-doc-page-header
                type="subtitle"
                title="Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām">
                <span slot="breadcrumb">
                  <cds-breadcrumb>
                    <cds-breadcrumb-item>
                      <cds-breadcrumb-link href="/#"
                        >Darbības</cds-breadcrumb-link
                      >
                    </cds-breadcrumb-item>
                    <cds-breadcrumb-item>
                      <cds-breadcrumb-link href="#"
                        >Darbība 123</cds-breadcrumb-link
                      >
                    </cds-breadcrumb-item>
                  </cds-breadcrumb>
                </span>
                <span slot="button">
                  <cds-button kind="secondary" size="sm"
                    >Pārbaudīt sadaļu</cds-button
                  >
                </span>
              </cds-doc-page-header>
              <cds-divider size="8"></cds-divider>
              <cds-table>
                <cds-table-header-title slot="title"
                  >Dokumenti</cds-table-header-title
                >
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  class="cds--css-grid-column cds--col-span-10 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <cds-table>
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </span>
          </cds-doc-page-tab-content>
        </div>

        <div
          id="panel-cloudFoundry"
          role="tabpanel"
          aria-labelledby="tab-cloudFoundry"
          hidden="">
          <cds-doc-page-tab-content>
            <span slot="tab-print-download">
              <cds-print-download
                downloadLink="https://example.com/download"
                printLink="https://example.com/print"></cds-print-download>
            </span>
            <span slot="tab-content">
              <cds-doc-page-header title="Darbība">
                <span slot="breadcrumb">
                  <cds-breadcrumb>
                    <cds-breadcrumb-item>
                      <cds-breadcrumb-link href="/#"
                        >Darbības</cds-breadcrumb-link
                      >
                    </cds-breadcrumb-item>
                    <cds-breadcrumb-item>
                      <cds-breadcrumb-link href="#"
                        >Darbība 123</cds-breadcrumb-link
                      >
                    </cds-breadcrumb-item>
                  </cds-breadcrumb>
                </span>
              </cds-doc-page-header>
              <cds-divider size="8"></cds-divider>
              <cds-table>
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </span>
          </cds-doc-page-tab-content>
        </div>
        <div
          id="panel-three"
          role="tabpanel"
          aria-labelledby="tab-three"
          hidden="">
          <cds-doc-page-tab-content withPrintDownload>
            <span slot="tab-print-download">
              <cds-print-download
                downloadLink="https://example.com/download"
                printLink="https://example.com/print"></cds-print-download>
            </span>

            <span slot="tab-content">
              <cds-table>
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </span>
          </cds-doc-page-tab-content>
        </div>
        <div
          id="panel-four"
          role="tabpanel"
          aria-labelledby="tab-four"
          hidden="">
          <cds-doc-page-tab-content withSidenav withPrintDownload>
            <span slot="tab-sidenav">
              <cds-side-nav-items>
                <cds-side-nav-link active href="#">L0 link</cds-side-nav-link>
                <cds-side-nav-link href="#">L0 link</cds-side-nav-link>
              </cds-side-nav-items>
            </span>
            <span slot="tab-sidenav-mobile">
              <cds-dropdown label="Darbības">
                <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
                <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
                <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
              </cds-dropdown>
            </span>
            <span slot="tab-print-download">
              <cds-print-download
                downloadLink="https://example.com/download"
                printLink="https://example.com/print"></cds-print-download>
            </span>
            <span slot="tab-content">
              <cds-doc-page-header
                type="subtitle"
                title="Darbība - Esošo meliorācijas sistēmu un lietusūdens savākšanas sistēmu atjaunošana un vides pielāgošana klimata pārmaiņām">
                <span slot="breadcrumb">
                  <cds-link href="/#">< Atpakaļ uz sarakstu</cds-link>
                </span>
              </cds-doc-page-header>
              <cds-divider size="8"></cds-divider>
              <cds-table>
                <cds-table-header-title slot="title"
                  >Dokumenti</cds-table-header-title
                >
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  class="cds--css-grid-column cds--col-span-10 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <cds-table>
                <cds-table-head>
                  <cds-table-header-row>
                    <cds-table-header-cell>Name</cds-table-header-cell>
                    <cds-table-header-cell>Status</cds-table-header-cell>
                  </cds-table-header-row>
                </cds-table-head>
                <cds-table-body>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 1</cds-table-cell>
                    <cds-table-cell>Disabled</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 2</cds-table-cell>
                    <cds-table-cell>Starting</cds-table-cell>
                  </cds-table-row>
                  <cds-table-row>
                    <cds-table-cell>Load Balancer 3</cds-table-cell>
                    <cds-table-cell>Active</cds-table-cell>
                  </cds-table-row>
                </cds-table-body>
              </cds-table>
            </span>
          </cds-doc-page-tab-content>
        </div>
      </span>
    </cds-doc-page>
  `;
};

export const noTabsSidenav = () => {
  return html`
    <cds-doc-page>
      <span slot="header">
        <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#"
              >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
            </cds-link>
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#">1.1 </cds-link>
          </cds-label-value-horizontal>
        </cds-contextual-header>
        <cds-divider size="5"></cds-divider>
        <cds-inline-notification
          style="min-width: 100%;"
          title="Notification title"
          subtitle="Subtitle text goes here."
          low-contrast>
        </cds-inline-notification>
        <cds-divider size="5"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-header-title title="Projekta iesnieguma vērtēšanas veidlapa">
            </cds-header-title>
            <cds-divider size="5"></cds-divider>
            <cds-related-persons .statusRelatedPersons=${statusRelatedPersons}>
            </cds-related-persons>
            <cds-divider size="5"></cds-divider>
            <cds-status-history
              .statusHistoryItems=${statusHistoryItemsArr}
              statusHistoryTitle="Statusu vēsture"
              currenStatusColor="green"
              currenStatusTitle="CFLA pārdomas"
              currenStatusDate="25.10.2019 10:34">
            </cds-status-history>
            <cds-divider size="5"></cds-divider>
          </div>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6">
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-dropdown-button
                buttonLabel="Mainīt statusu"
                .dropdownHandler="${itemSelectedHandler}"
                .statusArray="${statusArray}"></cds-dropdown-button>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-countdown-timer
                deadline="2025-07-08T00:00:00"
                title="Atlikušais laiks līdz iesniegšanai"
                language="lv"></cds-countdown-timer>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
            <cds-related-documents title="Saistītie dokumenti">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                ${ToolBox16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                ${CertificateCheck16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārskatīšanu/apstrīdēšanu"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
      </span>

      <span slot="content">
        <cds-doc-page-tab-content withSidenav>
          <span slot="tab-sidenav">
            <cds-side-nav-items>
              <cds-side-nav-link active href="#">L0 link</cds-side-nav-link>
              <cds-side-nav-link href="#">L0 link</cds-side-nav-link>
            </cds-side-nav-items>
          </span>
          <span slot="tab-sidenav-mobile">
            <cds-dropdown label="Darbības">
              <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
              <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
              <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
            </cds-dropdown>
          </span>
          <span slot="tab-content">
            <cds-table>
              <cds-table-header-title slot="title"
                >Dokumenti</cds-table-header-title
              >
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Name</cds-table-header-cell>
                  <cds-table-header-cell>Status</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 1</cds-table-cell>
                  <cds-table-cell>Disabled</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 2</cds-table-cell>
                  <cds-table-cell>Starting</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 3</cds-table-cell>
                  <cds-table-cell>Active</cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                class="cds--css-grid-column cds--col-span-10 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <cds-table>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Name</cds-table-header-cell>
                  <cds-table-header-cell>Status</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 1</cds-table-cell>
                  <cds-table-cell>Disabled</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 2</cds-table-cell>
                  <cds-table-cell>Starting</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 3</cds-table-cell>
                  <cds-table-cell>Active</cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
          </span>
        </cds-doc-page-tab-content>
      </span>
    </cds-doc-page>
  `;
};

export const noTabsNoSidenav = () => {
  return html`
    <cds-doc-page>
      <span slot="header">
        <cds-contextual-header title="Projekta iesniegums: 3.1.1.5/19">
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#"
              >Zinātnes politikas ieviešana, vadība un kapacitātes stiprināšana
            </cds-link>
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-tag type="blue">Noslēgusies</cds-tag> 25.10.2019 10:34
          </cds-label-value-horizontal>
          <cds-divider size="3"></cds-divider>
          <cds-label-value-horizontal label="Atlases nosaukums:">
            <cds-link href="#">1.1 </cds-link>
          </cds-label-value-horizontal>
        </cds-contextual-header>
        <cds-divider size="5"></cds-divider>
        <cds-inline-notification
          style="min-width: 100%;"
          title="Notification title"
          subtitle="Subtitle text goes here."
          low-contrast>
        </cds-inline-notification>
        <cds-divider size="5"></cds-divider>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-10 cds--grid-column-hang">
            <cds-header-title title="Projekta iesnieguma vērtēšanas veidlapa">
            </cds-header-title>
            <cds-divider size="5"></cds-divider>
            <cds-related-persons .statusRelatedPersons=${statusRelatedPersons}>
            </cds-related-persons>
            <cds-divider size="5"></cds-divider>
            <cds-status-history
              .statusHistoryItems=${statusHistoryItemsArr}
              statusHistoryTitle="Statusu vēsture"
              currenStatusColor="green"
              currenStatusTitle="CFLA pārdomas"
              currenStatusDate="25.10.2019 10:34">
            </cds-status-history>
            <cds-divider size="5"></cds-divider>
          </div>
          <div
            class="cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-5 cds--lg:col-span-6">
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-dropdown-button
                buttonLabel="Mainīt statusu"
                .dropdownHandler="${itemSelectedHandler}"
                .statusArray="${statusArray}"></cds-dropdown-button>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
            <cds-main-content-item size="0" isStatusChangePanel>
              <cds-countdown-timer
                deadline="2025-07-08T00:00:00"
                title="Atlikušais laiks līdz iesniegšanai"
                language="lv"></cds-countdown-timer>
            </cds-main-content-item>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
        <div class="cds--subgrid cds--subgrid--condensed">
          <div
            class="cds--css-grid-column cds--col-span-100 cds--grid-column-hang">
            <cds-related-documents title="Saistītie dokumenti">
              <cds-related-documents-item
                linkTitle="Saistītais PI"
                linkUrl="https://google.com">
                ${ToolBox16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Vērtēšanas veidlapa"
                linkUrl="https://google.com">
                ${CertificateCheck16({ slot: 'icon' })}
              </cds-related-documents-item>
              <cds-related-documents-item
                linkTitle="Iesniegums par pārskatīšanu/apstrīdēšanu"
                target="_self"
                linkUrl="https://google.com">
              </cds-related-documents-item>
            </cds-related-documents>
            <cds-divider size="5"></cds-divider>
          </div>
        </div>
      </span>

      <span slot="content">
        <cds-doc-page-tab-content>
          <span slot="tab-content">
            <cds-doc-page-header type="title" title="Darbības">
              <span slot="button">
                <cds-button kind="secondary" size="sm"
                  >Pārbaudīt sadaļu</cds-button
                >
              </span>
            </cds-doc-page-header>
            <cds-divider size="8"></cds-divider>
            <cds-table>
              <cds-table-header-title slot="title"
                >Dokumenti</cds-table-header-title
              >
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Name</cds-table-header-cell>
                  <cds-table-header-cell>Status</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 1</cds-table-cell>
                  <cds-table-cell>Disabled</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 2</cds-table-cell>
                  <cds-table-cell>Starting</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 3</cds-table-cell>
                  <cds-table-cell>Active</cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                class="cds--css-grid-column cds--col-span-10 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <cds-table>
              <cds-table-head>
                <cds-table-header-row>
                  <cds-table-header-cell>Name</cds-table-header-cell>
                  <cds-table-header-cell>Status</cds-table-header-cell>
                </cds-table-header-row>
              </cds-table-head>
              <cds-table-body>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 1</cds-table-cell>
                  <cds-table-cell>Disabled</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 2</cds-table-cell>
                  <cds-table-cell>Starting</cds-table-cell>
                </cds-table-row>
                <cds-table-row>
                  <cds-table-cell>Load Balancer 3</cds-table-cell>
                  <cds-table-cell>Active</cds-table-cell>
                </cds-table-row>
              </cds-table-body>
            </cds-table>
          </span>
        </cds-doc-page-tab-content>
      </span>
    </cds-doc-page>
  `;
};

export default {
  title: 'Custom-layouts/Veidapa layout',
  parameters: {
    ...storyDocs.parameters,
  },
};
