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
import storyDocs from './chosen-categories-story.mdx';

export const Propsed = () => {
  const chosenCategoriesData = [
    { label: 'Projekta dzīves cikla posms', value: 'Sākumposma' },
    {
      label: 'Eksperta tips',
      value: 'CFLA ekspertu vērtējumsar nodaļas vadītāja iesaisti',
    },
    { label: 'Ekspertīzes joma', value: 'Valsts atbalsta ' },
  ];
  return html`
    <cds-chosen-categories .chosenCategoriesData=${chosenCategoriesData}>
    </cds-chosen-categories>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Chosen categories',
};
