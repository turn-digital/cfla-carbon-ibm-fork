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
import storyDocs from './form-number-story.mdx';
import OverflowMenuVertical16 from '@carbon/icons/lib/overflow-menu--vertical/16';
import Incomplete16 from '@carbon/icons/lib/incomplete/16';

export const Propsed = () => {
  return html`
    <cds-form-number type="green">
      <span slot="status">
        <cds-diff-checker-btn type="added" date="2021-02-02">
        </cds-diff-checker-btn>
      </span>
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
      <div slot="above-the-fold-content">
        <cds-technical-spec label="ID:TP3" type="tehnical-specification">
        </cds-technical-spec>
      </div>
      <div slot="below-the-fold-content">
        <cds-label-value label="Izpildes statuss">
          ${Incomplete16()} Nav atrisināts
          <cds-label-value
            label="Labot var projekta iesniegumā"></cds-label-value>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="Nepieciešamās darbības"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value label="Izpildes statuss">
          <cds-unordered-list>
            <cds-list-item>
              <cds-link href="#">Apraksts</cds-link> >
              <cds-link href="#"
                >1.2. Problēmas un risinājuma apraksts, t.sk. mērķa grupa, tās
                problēmu un risinājumu apraksts</cds-link
              >
            </cds-list-item>
          </cds-unordered-list>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="PV: Inta Štāle 20.10.2019 10:32"></cds-label-value>
      </div>
    </cds-form-number>
  `;
};
export const DifferentTypes = () => {
  return html`
    <cds-form-number type="black">
      <span slot="status">
        <cds-diff-checker-btn type="added" date="2021-02-02">
        </cds-diff-checker-btn>
      </span>
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
      <div slot="above-the-fold-content">
        <cds-technical-spec label="ID:TP3" type="tehnical-specification">
        </cds-technical-spec>
      </div>
      <div slot="below-the-fold-content">
        <cds-label-value label="Izpildes statuss">
          ${Incomplete16()} Nav atrisināts
          <cds-label-value
            label="Labot var projekta iesniegumā"></cds-label-value>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="Nepieciešamās darbības"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value label="Izpildes statuss">
          <cds-unordered-list>
            <cds-list-item>
              <cds-link href="#">Apraksts</cds-link> >
              <cds-link href="#"
                >1.2. Problēmas un risinājuma apraksts, t.sk. mērķa grupa, tās
                problēmu un risinājumu apraksts</cds-link
              >
            </cds-list-item>
          </cds-unordered-list>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="PV: Inta Štāle 20.10.2019 10:32"></cds-label-value>
      </div>
    </cds-form-number>

    <cds-form-number type="red">
      <span slot="status">
        <cds-diff-checker-btn type="added" date="2021-02-02">
        </cds-diff-checker-btn>
      </span>
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
      <div slot="above-the-fold-content">
        <cds-technical-spec label="ID:TP3" type="tehnical-specification">
        </cds-technical-spec>
      </div>
      <div slot="below-the-fold-content">
        <cds-label-value label="Izpildes statuss">
          ${Incomplete16()} Nav atrisināts
          <cds-label-value
            label="Labot var projekta iesniegumā"></cds-label-value>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="Nepieciešamās darbības"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value label="Izpildes statuss">
          <cds-unordered-list>
            <cds-list-item>
              <cds-link href="#">Apraksts</cds-link> >
              <cds-link href="#"
                >1.2. Problēmas un risinājuma apraksts, t.sk. mērķa grupa, tās
                problēmu un risinājumu apraksts</cds-link
              >
            </cds-list-item>
          </cds-unordered-list>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="PV: Inta Štāle 20.10.2019 10:32"></cds-label-value>
      </div>
    </cds-form-number>
    <cds-form-number type="green">
      <span slot="status">
        <cds-diff-checker-btn type="added" date="2021-02-02">
        </cds-diff-checker-btn>
      </span>
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
      <div slot="above-the-fold-content">
        <cds-technical-spec label="ID:TP3" type="tehnical-specification">
        </cds-technical-spec>
      </div>
      <div slot="below-the-fold-content">
        <cds-label-value label="Izpildes statuss">
          ${Incomplete16()} Nav atrisināts
          <cds-label-value
            label="Labot var projekta iesniegumā"></cds-label-value>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="Nepieciešamās darbības"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value label="Izpildes statuss">
          <cds-unordered-list>
            <cds-list-item>
              <cds-link href="#">Apraksts</cds-link> >
              <cds-link href="#"
                >1.2. Problēmas un risinājuma apraksts, t.sk. mērķa grupa, tās
                problēmu un risinājumu apraksts</cds-link
              >
            </cds-list-item>
          </cds-unordered-list>
        </cds-label-value>
        <cds-divider></cds-divider>
        <cds-label-value
          label="PV: Inta Štāle 20.10.2019 10:32"></cds-label-value>
      </div>
    </cds-form-number>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Form Number',
};
