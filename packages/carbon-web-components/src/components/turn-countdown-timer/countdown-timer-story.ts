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
import storyDocs from './countdown-timer-story.mdx';

export const Propsed = () => {
  return html`
    <cds-countdown-timer deadline="2024-12-16T00:00:00"></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2024-07-08T00:00:00"></cds-countdown-timer>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Countdown Timer',
};
