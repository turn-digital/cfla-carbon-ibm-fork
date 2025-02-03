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
import storyDocs from './global-search-story.mdx';

import Notification20 from '@carbon/web-components/es/icons/notification/20';
import SwitcherIcon20 from '@carbon/web-components/es/icons/switcher/20';

export const Propsed = () => {
  return html`
<cds-header aria-label="IBM Platform Name">
      <cds-header-name href="javascript:void 0" prefix="IBM"
        >[Platform]</cds-header-name
      >
      <div class="cds--header__global">
         <cds-global-search urlToPost = 'https://5ea5e181-a7fe-4f98-a5cb-ba5676937d64.mock.pstmn.io/AttistibasPlans/Search'>
         </cds-global-search>
        <cds-header-global-action
          aria-label="Notification"
          tooltip-text="Notification">
          ${Notification20({ slot: 'icon' })}
        </cds-header-global-action>
        <cds-header-global-action
          aria-label="App Switcher"
          tooltip-text="App Switcher"
          tooltip-alignment="right">
          ${SwitcherIcon20({ slot: 'icon' })}
        </cds-header-global-action>
      </div>
    </cds-header>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/global-search',
};
