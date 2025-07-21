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
    <cds-countdown-timer deadline="2026-12-31 23:22:00" title="Atlikušais laiks līdz iesniegšanai" language = 'lv'></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2028-12-31 23:59:00" title="Atlikušais laiks līdz iesniegšanai" language = 'lv'></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2025-07-08T00:00:00" title="Atlikušais PROPS iesniegšanai" language = 'en'></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2024-11-26T00:00:00" title="Atlikušais TITLE iesniegšanai" language = 'lv'></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2024-11-26T00:00:00" title="Atlikušais TITLE iesniegšanai" language = 'en'></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2025-07-08T00:00:00" title="Atlikušais TITLE iesniegšanai" language = 'lv' type="simple"></cds-countdown-timer>
</br>
</br>
</br>
    <cds-countdown-timer deadline="2026-12-31 23:22:00" title="Atlikušais TITLE iesniegšanai" language = 'lv' type="simple"></cds-countdown-timer>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Countdown Timer',
};
