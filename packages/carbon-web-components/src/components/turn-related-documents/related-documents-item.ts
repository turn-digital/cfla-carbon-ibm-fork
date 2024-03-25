/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './related-documents.scss';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

//icons
import Launch16 from '@carbon/icons/lib/launch/16';

//libs for cleaning html
import DOMPurify from 'dompurify';

/**
 * Related documents item.
 *
 * @element cds-related-documents-item
 */
@customElement(`${prefix}-related-documents-item`)
class CDSRelatedDocumentsItem extends LitElement {
  @property({ type: String }) linkTitle = 'Saistītas PI';
  @property({ type: String }) linkUrl = 'https://www.google.com';
  /**
   * Can be one of: _blank, _self
   */
  @property({ type: String }) target = '_blank';

  sanitizeIcon(icon) {
    return DOMPurify.sanitize(icon, { ADD_TAGS: ['svg'], ADD_ATTR: ['xmlns'] });
  }

  render() {
    const { linkTitle, linkUrl, target } = this;

    return html`
      <li class="related-documents__links-item">
        <slot class="related-documents__link-icon" name="icon"></slot>
        <cds-link href="${linkUrl}" target="${target || '_blank'}">
          ${linkTitle} ${target === '_self' ? '' : Launch16({ slot: 'icon' })}
        </cds-link>
      </li>
    `;
  }

  static styles = styles;
}

export default CDSRelatedDocumentsItem;
