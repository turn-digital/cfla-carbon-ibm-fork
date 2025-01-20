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

export const tabs = () => {
  return html`
    <cds-main-content-block-v2>
      <span slot="header">Header Block!</span>
      <span slot="sidenav"
        ><div style="background-color: green;"><h2>test</h2></div></span
      >
      <span slot="tabs">
        <cds-tabs value="all" type="contained">
          <cds-tab id="tab-all" target="panel-all" value="all"
            >Tab label 1</cds-tab
          >
          <cds-tab id="tab-second" target="panel-second" value="second">
            Tab label 2
          </cds-tab>
        </cds-tabs>
      </span>
      <span slot="content">
        <div
          id="panel-all"
          role="tabpanel"
          aria-labelledby="tab-all"
          hidden=""
          style="background-color: red;"
          class="cds--css-grid cds--css-grid--narrow">
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>first tab</h2>
          </div>
          <div
            class="cds--css-grid-column cds--col-span-4 cds--grid-column-hang">
            <h2>hang</h2>
          </div>
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>test3</h2>
          </div>
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>test4</h2>
          </div>
        </div>
        <div
          id="panel-second"
          role="tabpanel"
          aria-labelledby="tab-second"
          hidden=""
          style="background-color: LightBlue;"
          class="cds--css-grid cds--css-grid--narrow">
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>secondtab</h2>
          </div>
          <div
            class="cds--css-grid-column cds--col-span-4 cds--grid-column-hang">
            <h2>hang</h2>
          </div>
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>test3</h2>
          </div>
          <div class="cds--css-grid-column cds--col-span-4">
            <h2>test4</h2>
          </div>
        </div>
      </span>
    </cds-main-content-block-v2>
  `;
};

export const withoutNav = () => {
  return html`
    <cds-main-content-block-v2>
      <span slot="header">Header Block!</span>
      <span slot="sidenav"
        ><div style="background-color: green;"><h2>test</h2></div></span
      >
      <span slot="content"
        ><div style="background-color: red;"><h2>test</h2></div></span
      >
    </cds-main-content-block-v2>
  `;
};

export const withoutTabs = () => {
  return html`
    <cds-main-content-block-v2>
      <span slot="header">Header Block!</span>
      <span slot="sidenav"
        ><div style="background-color: green;"><h2>test</h2></div></span
      >
      <span slot="content"
        ><div style="background-color: red;"><h2>test</h2></div></span
      >
    </cds-main-content-block-v2>
  `;
};

export default {
  title: 'Custom-layouts/Veidapa layout',
  parameters: {
    ...storyDocs.parameters,
  },
};
