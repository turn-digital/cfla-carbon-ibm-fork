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
import storyDocs from './technical-spec-story.mdx';


export const Propsed = () => {
  return html`
    <cds-checkbox>
      sfsf sd fs
      <cds-technical-spec
        label="ID:TP3"
        type="tehnical-specification">
      </cds-technical-spec>
      asdasd
    </cds-checkbox>
    <cds-divider></cds-divider>
    <cds-technical-spec
      label="ID:TP3"
      type="clarification">
    </cds-technical-spec>
    <cds-divider></cds-divider>
    <cds-technical-spec
      label="ID:TP3"
      type="requirement">
    </cds-technical-spec>
  `;
};

export const Disabled = () => {
  return html`
    <cds-technical-spec
      label="ID:TP3"
      type="tehnical-specification"
      status="disabled">
    </cds-technical-spec>
    <cds-divider></cds-divider>
    <cds-technical-spec
      label="ID:TP3"
      type="clarification"
      status="disabled">
    </cds-technical-spec>
    <cds-divider></cds-divider>
    <cds-technical-spec
      label="ID:TP3"
      type="requirement"
      status="disabled">
    </cds-technical-spec>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Technical Specifiation',
};
