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
import storyDocs from './selection-card-story.mdx';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

export const Propsed = () => {
  return html`
    <cds-selection-card
      projectId="1.1.1.1/16/A/004"
      cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utcondimentum diam id diam blandit congue."
      projectDateTitle="Projekta īstenošanas termiņš"
      projectDateInfo="05.01.2021 - 30.05.2028">
      <span slot="overflow-menu">
        <cds-overflow-menu size="sm">
          ${OverflowMenuVertical16({
            class: `cds--overflow-menu__icon`,
            slot: 'icon',
          })}
          <span slot="tooltip-content"> Options </span>
          <cds-overflow-menu-body flipped>
            <cds-overflow-menu-item>Option 1</cds-overflow-menu-item>
            <cds-overflow-menu-item>Option 2</cds-overflow-menu-item>
            <cds-overflow-menu-item>Option 3</cds-overflow-menu-item>
            <cds-overflow-menu-item>Option 4</cds-overflow-menu-item>
            <cds-overflow-menu-item>Option 5</cds-overflow-menu-item>
          </cds-overflow-menu-body>
        </cds-overflow-menu>
      </span>
    </cds-selection-card>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Selection card',
};
