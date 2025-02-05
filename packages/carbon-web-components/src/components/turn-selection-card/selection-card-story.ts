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
      selectionNumber="2.1.3.2."
      selectionUrl="https://www.google.com/"
      cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utcondimentum diam id diam blandit congue."
      cardTitleUrl="https://www.carbondesignsystem.com/"
      projectDateTitle="Projekta īstenošanas termiņš"
      projectDateInfo="05.01.2021 - 30.05.2028"
      buttonText="Izveidot PI">
      <span slot="overflow-menu">
        <cds-overflow-menu size="sm">
          ${OverflowMenuVertical16({
            class: `cds--overflow-menu__icon`,
            slot: 'icon',
          })}
          <span slot="tooltip-content"> Opcijas </span>
          <cds-overflow-menu-body flipped>
            <cds-overflow-menu-item>Atvērt</cds-overflow-menu-item>
            <cds-overflow-menu-item danger divider
              >Dzēst</cds-overflow-menu-item
            >
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
