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
import storyDocs from './dropdown-button-story.mdx';

export const Default = () => {
  const itemsArray = [
    { text: 'Status 1', value: 'Status 1' },
    { text: 'Status 2', value: 'Status 2' },
    { text: 'Status 3', value: 'Status 3' },
  ];
  const eventHandler = (event) => {
    console.log('itemSelected', event.detail.item.__value);
  };
  return html`
    <cds-dropdown-button
      .accordionItems=${itemsArray}
      .dropdownHandler=${eventHandler}>
    </cds-dropdown-button>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Dropdown Button',
};
