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
import storyDocs from './status-history-story.mdx';

const statusHistoryItems = [
  {
    date: '25.10.2019 10:34',
    status: 'Atgriezta precizēšanai 1',
    author: 'Elīne Millere',
    pamatojums: 'Pamatojums 1',
    id: '1',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 2',
    author: 'Test author',
    pamatojums: `<p><em><strong>zxczxczxczxczxczxcczxczxczxczxczxczxczxczxczx</strong></em></p>
    <p><strong>zxczxczxczxczxczxcczxczxczxczxczxczxczxczxczx</strong></p>
    <p style="padding-left: 120px;">zxczxczxczxczxczxcczxczxczxczxczxczxczxczxczx</p>
    <ol>
    <li>zxczxczxczxczxczxcczx</li>
    <li>zxczxczxczxczxczxcczx</li>
    <li>zxczxczxczxczxczxcczx</li>
    <li>zxczxczxczxczxczxcczx</li>
    </ol>`,
    id: '2',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 3',
    author: 'Test author',
    pamatojums: 'Pamatojums 3',
    id: '3',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 4',
    author: 'Test author',
    pamatojums: '',
    id: '4',
  },
  {
    date: '25.09.2019 16:13',
    status: 'Atgriezta precizēšanai 5',
    author: '',
    pamatojums: '',
    id: '5',
  },
];

export const Propsed = () => {
  return html`
    <cds-status-history
      .statusHistoryItems=${statusHistoryItems}
      currenStatusColor="green"
      currenStatusTitle="CFLA pārdomas"
      currenStatusDate="25.10.2019 10:34"></cds-status-history>
  `;
};
export const withHtmlInPamatojums = () => {
  return html`
    <cds-status-history
      .statusHistoryItems=${statusHistoryItems}
      currenStatusColor="red"
      currenStatusTitle="CFLA pārdomas"
      currenStatusDate="25.10.2019 10:34"></cds-status-history>
  `;
};

export default {
  parameters: {
    ...storyDocs.parameters,
  },
  title: 'Custom-components/Status History',
};
