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
import storyDocs from './specification-type-story.mdx';

export const Propsed = () => {
  return html`
    <cds-specification-type
      specificationKods="TP1"
      specificationLable="asdasdasdas 1"
      specificationGroup="1">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type
      specificationKods="TP2"
      specificationLable="asdasdasdas 2"
      specificationGroup="2">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type
      specificationKods="TP3"
      specificationLable="asdasdasdas 3"
      specificationGroup="3">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type
      specificationKods="TP3"
      specificationLable="asdasdasdas 3"
      specificationGroup="3">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type
      specificationKods="TP3"
      specificationLable="asdasdasdas 3"
      specificationGroup="3"
      ?isDisabled=${false}>
    </cds-specification-type>
  `;
};

export const Disabled = () => {
  return html`
    <cds-specification-type
      label="ID:TP3"
      type="tehnical-specification"
      status="disabled">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type
      label="ID:TP3"
      type="clarification"
      status="disabled">
    </cds-specification-type>
    <cds-divider></cds-divider>
    <cds-specification-type label="ID:TP3" type="requirement" status="disabled">
    </cds-specification-type>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Specifiation Type',
};
