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
import storyDocs from './project-card-story.mdx';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

export const Propsed = () => {
  return html`
    <cds-project-card
      projectId="1.1.1.1/16/A/004"
      tagTitle="Apstiprināts ar nosacījumu"
      supervisorAuthority="CFLA"
      organization="Latvijas Universitāte"
      cardTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utcondimentum diam id diam blandit congue."
      cardTitleUrl="https://www.carbondesignsystem.com/"
      tagType="purple"
      projectDateTitle="Projekta īstenošanas termiņš"
      projectDateInfo="05.01.2021 - 30.05.2028"
      projectCostTitle="Projekta kopējas izmaksas EUR"
      projectCostInfo="500 345">
      <span slot="overflow-menu">
        <cds-overflow-menu size="sm">
          ${OverflowMenuVertical16({
            class: `cds--overflow-menu__icon`,
            slot: 'icon',
          })}
          <span slot="tooltip-content"> Options </span>
          <cds-overflow-menu-body flipped>
            <cds-overflow-menu-item>Open</cds-overflow-menu-item>
            <cds-overflow-menu-item danger divider
              >Delete</cds-overflow-menu-item
            >
          </cds-overflow-menu-body>
        </cds-overflow-menu>
      </span>
    </cds-project-card>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Project card',
};
