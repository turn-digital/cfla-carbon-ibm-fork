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
import storyDocs from './text-editor-story.mdx';

export const Default = () => {
  return html`
    <cds-text-editor
      onServerValidationErrorText="onServerValidationErrorText"></cds-text-editor>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Text editor',
};
