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
import storyDocs from './main-content-block-v2-story.mdx';
import Fade16 from '@carbon/web-components/es/icons/fade/16';

export const tabs = () => {
  return html`
    <cds-main-content-block-v2 withTabs>
      <span slot="header">Header Block!</span>
      <span slot="tabs">
        <cds-tabs value="all" type="contained">
          <cds-tab id="tab-all" target="panel-all" value="all"
            >Tab label 1</cds-tab
          >
          <cds-tab
            id="tab-cloudFoundry"
            target="panel-cloudFoundry"
            value="cloudFoundry">
            Tab label 2
          </cds-tab>
        </cds-tabs></span
      >

      <span slot="content">
        <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden="">
          <div class="cds--subgrid cds--subgrid--narrow">
            <div
              class="cds--css-grid-column cds--sm:col-span-100 cds--md:col-span-4 cds--lg:col-span-4 cds--xlg:col-span-4 cds--max:col-span-4">
              <cds-side-nav-items>
                <cds-side-nav-link active href="#">L0 link</cds-side-nav-link>
                <cds-side-nav-link href="#">L0 link</cds-side-nav-link>
              </cds-side-nav-items>
            </div>
            <div
              class="cds--css-grid-column cds--sm:col-span-100 cds--md:col-span-4 cds--lg:col-span-12 cds--xlg:col-span-12 cds--max:col-span-12">
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
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  style="background-color:red;"
                  class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  style="background-color:yellow;"
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
            </div>
          </div>
        </div>
        <div
          id="panel-cloudFoundry"
          role="tabpanel"
          aria-labelledby="tab-cloudFoundry"
          hidden="">
          <div class="cds--grid cds--grid--narrow">
            <div class="cds--css-grid-column cds--col-span-100">
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
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  style="background-color:red;"
                  class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                  <cds-header-title
                    title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
                </div>
              </div>
              <cds-divider></cds-divider>
              <div class="cds--subgrid cds--subgrid--narrow">
                <div
                  style="background-color:yellow;"
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
            </div>
          </div>
        </div>
      </span>
    </cds-main-content-block-v2>
  `;
};

export const NoTabsSidenav = () => {
  return html`
    <cds-main-content-block-v2>
      <span slot="header">Header Block!</span>

      <span slot="content">
        <div class="cds--subgrid cds--subgrid--narrow">
          <div
            class="cds--css-grid-column cds--sm:col-span-100 cds--md:col-span-4 cds--lg:col-span-4 cds--xlg:col-span-4 cds--max:col-span-4">
            <cds-side-nav-items>
              <cds-side-nav-link active href="#">L0 link</cds-side-nav-link>
              <cds-side-nav-link href="#">L0 link</cds-side-nav-link>
            </cds-side-nav-items>
          </div>
          <div
            class="cds--css-grid-column cds--sm:col-span-100 cds--md:col-span-4 cds--lg:col-span-12 cds--xlg:col-span-12 cds--max:col-span-12">
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
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                style="background-color:red;"
                class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                style="background-color:yellow;"
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
          </div>
        </div>
      </span>
    </cds-main-content-block-v2>
  `;
};

export const NoTabsNoSidenav = () => {
  return html`
    <cds-main-content-block-v2>
      <span slot="header">Header Block!</span>

      <span slot="content">
        <div class="cds--grid cds--grid--narrow">
          <div class="cds--css-grid-column cds--col-span-100">
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
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                style="background-color:red;"
                class="cds--css-grid-column cds--col-span-25 cds--grid-column-hang">
                <cds-header-title
                  title="Projekta iesnieguma vērtēšanas veidlapa"></cds-header-title>
              </div>
            </div>
            <cds-divider></cds-divider>
            <div class="cds--subgrid cds--subgrid--narrow">
              <div
                style="background-color:yellow;"
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
          </div>
        </div>
      </span>
    </cds-main-content-block-v2>
  `;
};

export default {
  title: 'Custom-layouts/Veidapa layout',
  parameters: {
    ...storyDocs.parameters,
  },
};
