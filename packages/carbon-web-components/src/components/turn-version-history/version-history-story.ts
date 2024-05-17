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
import storyDocs from './version-history-story.mdx';

export const Propsed = () => {
  const versionHistoryArray = [
    {
      versionLink: 'google',
      version: '1.0',
      date: '29.03.2022',
      tagType: 'green',
      tagText: 'good',
    },
    {
      versionLink: 'google',
      version: '2.0',
      date: '29.03.2023',
      tagType: 'green',
      tagText: 'good',
    },
    {
      versionLink: 'google',
      version: '3.0',
      date: '29.03.2024',
      tagType: 'red',
      tagText: 'conflict',
    },
  ];
  return html`
    <cds-version-history
      version="3.0"
      date="01.04.2022"
      .versionHistoryArray=${versionHistoryArray}></cds-version-history>
  `;
};
Propsed.storyName = 'Propsed';

export default {
  title: 'Custom-components/Version history',
  parameters: {
    ...storyDocs.parameters,
  },
};
