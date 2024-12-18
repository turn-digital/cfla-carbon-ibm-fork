import { html } from 'lit-html';
import storyDocs from './mani-projekti-story.mdx';
import './mani-projekti';
import styles from '../../../../../assets/css/themes.css';

import Notification20 from '@carbon/icons/lib/notification/20';
import Search20 from '@carbon/icons/lib/search/20';
import SwitcherIcon20 from '@carbon/icons/lib/switcher/20';

import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';

export const Propsed = () => {
  return html` <div class="cds-theme-zone-white fix-full-width">
    <cds-header
      aria-label="Kohēzijas politikas fondu vadības informācijas sistēma">
      <cds-header-menu-button
        button-label-active="Close menu"
        button-label-inactive="Open menu"></cds-header-menu-button>
      <cds-header-name
        href="javascript:void 0"
        prefix="Kohēzijas politikas fondu vadības informācijas sistēma"></cds-header-name>
      <cds-header-nav
        menu-bar-label="Kohēzijas politikas fondu vadības informācijas sistēma!">
        <cds-header-nav-item href="javascript:void 0"
          >Sākumlapa</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Projekti</cds-header-nav-item
        >
        <cds-header-nav-item href="javascript:void 0"
          >Ziņojuma dēlis</cds-header-nav-item
        >
      </cds-header-nav>
      <div class="cds--header__global">
        <cds-header-global-action aria-label="Search" tooltip-text="Search">
          ${Search20({ slot: 'icon' })}
        </cds-header-global-action>
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
      <cds-side-nav
        aria-label="Side navigation"
        class="cds-theme-zone-kase-header-sidebar"
        expanded>
        <cds-side-nav-items>
          <cds-side-nav-link href="javascript:void(0)"
            >Mani projekti</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >Projektu iesniegumi</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >2021-2027 pieejamās atlases</cds-side-nav-link
          >
          <cds-side-nav-link href="javascript:void(0)"
            >AF pieejamās atlases</cds-side-nav-link
          >
        </cds-side-nav-items>
      </cds-side-nav>
    </cds-header>

    <div class="cds-theme-zone-white cds-page-main-content">
      <cds-project-card
        projectId="1.1.1.1/16/A/004"
        tagTitle="Līgums"
        supervisorAuthority="CFLA"
        organization="Latvijas Universitāte"
        cardTitle="Efektīvāka un viedāka Latvijas zinātnes politikas ieviešana un vadība"
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
              <cds-overflow-menu-item>Option 1</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 2</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 3</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 4</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 5</cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </span>
      </cds-project-card>
      <cds-divider size="6"></cds-divider>
      <cds-project-card
        projectId="1.1.1.1/16/A/004"
        tagTitle="Līgums"
        supervisorAuthority="CFLA"
        organization="Latvijas Universitāte"
        cardTitle="Efektīvāka un viedāka Latvijas zinātnes politikas ieviešana un vadība"
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
              <cds-overflow-menu-item>Option 1</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 2</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 3</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 4</cds-overflow-menu-item>
              <cds-overflow-menu-item>Option 5</cds-overflow-menu-item>
            </cds-overflow-menu-body>
          </cds-overflow-menu>
        </span>
      </cds-project-card>
    </div>
    <style>
      ${styles}
    </style>
  </div>`;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Views/Projekti/Mani projekti',
};
