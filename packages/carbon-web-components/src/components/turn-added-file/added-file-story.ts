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
import storyDocs from './added-file-story.mdx';

export const Propsed = () => {
  return html`
    <cds-added-file
      fileName="ZunL.jpg (0.4 MB)"
      fileCreationDate="15.02.2024 15:35"
      fileCreatedPerson="Ivans Bistrovs"
      fileUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></cds-added-file>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Added-file',
};
