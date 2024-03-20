/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { boolean, select } from '@storybook/addon-knobs';
import { prefix } from '../../globals/settings';
import textNullable from '../../../.storybook/knob-text-nullable';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DROPDOWN_DIRECTION, DROPDOWN_SIZE, DROPDOWN_TYPE } from './turn-dropdown-button';
import './turn-dropdown-button-item';
import './turn-dropdown-button-skeleton';
import storyDocs from './turn-dropdown-button-story.mdx';

const directionOptions = {
  [`Top`]: DROPDOWN_DIRECTION.TOP,
  [`Bottom`]: DROPDOWN_DIRECTION.BOTTOM,
};

const sizes = {
  [`Small size (${DROPDOWN_SIZE.SMALL})`]: DROPDOWN_SIZE.SMALL,
  [`Medium size (${DROPDOWN_SIZE.MEDIUM})`]: DROPDOWN_SIZE.MEDIUM,
  [`Large size (${DROPDOWN_SIZE.LARGE})`]: DROPDOWN_SIZE.LARGE,
};

const types = {
  Default: null,
  [`Inline (${DROPDOWN_TYPE.INLINE})`]: DROPDOWN_TYPE.INLINE,
};

const items = [
  {
    value: 'option-0',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    value: 'option-1',
    text: 'Option 1',
  },
  {
    value: 'option-2',
    text: 'Option 2',
  },
  {
    value: 'option-3',
    text: 'Option 3 - a disabled item',
    disabled: true,
  },
  {
    value: 'option-4',
    text: 'Option 4',
  },
  {
    value: 'option-5',
    text: 'Option 5',
  },
];

export const Default = () => {
  return html`
    <cds-turn-dropdown-button
      label="Mainit statusu">
      ${items.map(
        (elem) => html`
          <cds-turn-dropdown-button-item ?disabled=${elem.disabled} value="${elem.value}"
            >${elem.text}</cds-turn-dropdown-button-item
          >
        `
      )}
    </cds-turn-dropdown-button>
  `;
};








export default {
  title: 'Custom Components/Turn Dropdown Button',
  parameters: {
    ...storyDocs.parameters,
  },
  decorators: [
    (story, { name }) => {
      const width = !name.toLowerCase().includes('layer') ? `width:400px` : ``;
      return html` <div style="${width}">${story()}</div> `;
    },
  ],
};
