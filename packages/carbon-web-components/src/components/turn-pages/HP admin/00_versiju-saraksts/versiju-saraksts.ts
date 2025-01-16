/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../../../globals/settings';
import { carbonElement as customElement } from '../../../../globals/decorators/carbon-element';

@customElement(`${prefix}-hp-admin-view-00`)
class CDSHPAdminView00 extends LitElement {
  render() {
    return html` <div></div> `;
  }
}

export default CDSHPAdminView00;
