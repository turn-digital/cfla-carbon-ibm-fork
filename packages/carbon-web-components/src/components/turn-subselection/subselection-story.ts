/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

// Below path will be there when an application installs `@carbon/web-components` package.
// In our dev env, we auto-generate the file and re-map below path to to point to the generated file.
// @ts-ignore
import { prefix } from '../../globals/settings';

import './index';
import storyDocs from './subselection-story.mdx';

export const Default = () => {
  return html`
    <cds-checkbox-group legend-text="Horizontālo principu saraksts">
      <cds-checkbox>Nenodarīt būtisku kaitējumu</cds-checkbox>
      <cds-checkbox>Klimatdrošināšana</cds-checkbox>
      <cds-checkbox checked>Energoefektivitāte pirmajā vietā</cds-checkbox>
      <cds-checkbox checked disabled>VINPI</cds-checkbox>
      <cds-subselection>
        <cds-checkbox-group legend-text="VINPI vispārīgās darbības">
          <cds-checkbox checked disabled
            >VINPI vispārīgās darbības</cds-checkbox
          >
        </cds-checkbox-group>
        <cds-divider size="3"></cds-divider>
        <cds-checkbox-group legend-text="VINPI specifiskās darbības">
          <cds-checkbox
            >HP integrēšana izglītojošo un informatīvo materiālu un pasākumu
            saturā</cds-checkbox
          >
          <cds-checkbox
            >Projekta pasākumu satura un norises vietas
            piekļūstamība</cds-checkbox
          >
          <cds-checkbox
            >Atbalsta pasākumi zinātniskā darba veicējiem un
            studējošiem</cds-checkbox
          >
          <cds-checkbox checked>Pētījumi, izvērtējumi, aptaujas</cds-checkbox>
          <cds-checkbox>Veselību veicinoši pasākumi</cds-checkbox>
        </cds-checkbox-group>
      </cds-subselection>
    </cds-checkbox-group>
    <cds-divider></cds-divider>
    <cds-radio-button-group
      legend-text="Kā pievienot versiju?"
      orientation="vertical"
      name="radio-button-group"
      value="radio-2">
      <cds-radio-button
        label-text="Kopēt no citas atlases  HP konfigurāciju versijas"
        value="radio-2"
        id="radio-2"></cds-radio-button>
      <cds-subselection>
        <cds-divider size="2"></cds-divider>
        <cds-select
          label-text="Izvēlieties atlases versiju, no kurs kopēt"
          placeholder="Izvēlēties versiju">
          <cds-select-item value="option-1">Versija 1</cds-select-item>
          <cds-select-item value="option-2">Versija 2</cds-select-item>
        </cds-select>
        <cds-divider size="5"></cds-divider>
      </cds-subselection>
      <cds-radio-button
        label-text="Kopēt no šīs atlases veidlapas citas versijas"
        value="radio-3"
        id="radio-3"></cds-radio-button>
      <cds-subselection hideSubselection>
        <cds-divider size="2"></cds-divider>
        <cds-select
          label-text="Izvēlieties atlases versiju, no kurs kopēt"
          placeholder="Izvēlēties versiju">
          <cds-select-item value="option-1">Versija 1</cds-select-item>
          <cds-select-item value="option-2">Versija 2</cds-select-item>
        </cds-select>
        <cds-divider size="5"></cds-divider>
      </cds-subselection>
    </cds-radio-button-group>
  `;
};
Default.storyName = 'Default';

export default {
  title: 'Custom-components/Subselection',
  parameters: {
    ...storyDocs.parameters,
  },
};
