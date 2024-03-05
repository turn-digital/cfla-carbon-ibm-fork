/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './global-hero.scss';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import UserAvatar16 from '@carbon/icons/lib/user--avatar/16';
import Avatar16 from '@carbon/icons/lib/user--avatar/16';
import Edit16 from '@carbon/icons/lib/edit/16';
import ChevronDown16 from '@carbon/icons/lib/chevron--down/16';

@customElement(`${prefix}-global-hero-1`)
class GlobalHero1 extends LitElement {
  @property({ type: Object }) data;
  @property({ type: Object }) meta;
  @property({ type: Array }) relatedDocuments;
  @property({ type: Object }) translations;
  @property({ type: Object }) versijasInfo;

  @property({ type: Boolean }) showStatusModal = false;
  @property({ type: Object }) statusModalData = {};

  @property({ type: Boolean }) changeModal = false;
  @property({ type: String }) changeContentModal = '';

  @property({ type: Object }) notifyErr = null;

  @property({ type: Object }) countdownDate = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  };

  extractLastTwoItemsFromURL(url) {
    const parts = url.split('/');
    const lastThreeItems = parts.slice(-2).join('/');
    return lastThreeItems;
  }

  downloadFile = (link, title) => {
    const a = document.createElement('a');
    a.href = link;
    a.setAttribute('download', title);
    a.click();
    a.remove();
  };

  render() {
    const {
      // nosaukums,
      detalas,
      autori,
      versijasInfo,
      statuss,
      statusuVesture,
      automatiskieStatusi,
      pogas,
      iesniegsanasTermins,
      // paraksti,
      // ikonas,
    } = this.data || {};
    //@ts-ignore
    const { kods, apraksts } = detalas || {};

    const { aktivaVersija } = versijasInfo || {}; // versijuVesture

    //@ts-ignore
    const { projectId, page, setResp, setDisableBtn, disableBtn } = this.meta
      ? this.meta
      : {};

    const leftSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 1
    );
    const rightSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 2
    );

    // const extractLastTwoItemsFromURL = (url) => {
    //   const parts = url.split('/'); // Split the URL by '/'
    //   const lastThreeItems = parts.slice(-2).join('/'); // Get the last three items and join them with '/'

    //   return lastThreeItems;
    // };

    // const apiDate = new Date(iesniegsanasTermins);
    const deadline = new Date('2024-12-16T00:00:00');

    const formattedDate = `${(deadline.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${deadline
      .getDate()
      .toString()
      .padStart(2, '0')}.${deadline.getFullYear()} ${deadline
      .getHours()
      .toString()
      .padStart(2, '0')}:${deadline.getMinutes().toString().padStart(2, '0')}`;

    const currentDate = new Date();
    const isDeadlineOver = deadline.getTime() < currentDate.getTime();

    //@ts-ignore
    const timeDifference = deadline - currentDate;

    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    const days = Math.floor(
      (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );
    const hours = Math.floor(
      (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
    );
    const minutes = Math.floor(
      (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
    );

    this.countdownDate = { years, days, hours, minutes };

    return html`
      <div style="width: 100%">
        ${kods !== null && kods !== undefined
          ? html`
              <div style=" width: 100%">
                <cds-accordion style="background-color: #F5F5F5; width: 100%">
                  <cds-accordion-item
                    style="background-color: #F5F5F5"
                    title=${kods}>
                    ${detalas?.apraksts.map(
                      (item, i) =>
                        html`<p key=${i} class="hero__author label-01">
                          ${item}
                        </p>`
                    )}
                  </cds-accordion-item>
                </cds-accordion>
              </div>
            `
          : ''}

        <div
          class="main-container"
          style="display: flex; justify-content: space-between; width: 100%">
          <div class="left-conteiner" style="width: 60%">
            <div style="display: flex; align-items: center">
              <h3 style="font-size: 20px; line-height: 28px; font-weight: 400">
                ${this.data?.nosaukums}
              </h3>
              <span style="padding-top: 8px;">
                <cds-button kind="ghost" size="sm"
                  >${Edit16({ slot: 'icon', fill: '#027070' })}</cds-button
                >
              </span>
            </div>
            <div>
              ${autori !== null
                ? html`
                    ${autori?.map(
                      (item, i) => html`
                        <span
                          key=${i}
                          style=" display: flex; align-items: center; font-size: 12px;">
                          ${item.grupa === 'PV'
                            ? html`
                                <div style="display: flex; align-items: center">
                                  ${UserAvatar16({
                                    slot: 'icon',
                                  })}
                                  <p style="padding-left: 5px">
                                    ${this.translations?.GLOBAL_PERSON_PV}:
                                    ${item.vardsUzvards}
                                  </p>
                                </div>
                              `
                            : html`
                                <div style="display: flex; align-items: center">
                                  ${Avatar16({
                                    slot: 'icon',
                                  })}
                                  <p style="padding-left: 5px">
                                    ${item.vardsUzvards}
                                  </p>
                                </div>
                              `}
                        </span>
                      `
                    )}
                  `
                : ''}
            </div>

            <div style="width: 50%">
              ${statusuVesture !== null
                ? //change to statusuVesture.length > 1
                  statusuVesture.length > 1
                  ? html`
                      <cds-expandable-tile>
                        <cds-tile-above-the-fold-content
                          slot="above-the-fold-content">
                          <div style="display: flex; align-items: center; ">
                            <cds-tag type="blue" title=${statuss?.nosaukums}>
                              ${statuss?.nosaukums}
                            </cds-tag>
                            <div style="padding-left: 15px">
                              ${statuss?.datums}
                            </div>
                          </div>
                        </cds-tile-above-the-fold-content>
                        <cds-tile-below-the-fold-content>
                          ${statusuVesture.map(
                            (item, i) => html` <p
                              key="${i}"
                              className="hero__statuss-text">
                              ${item.datums} ${item.nosaukums} ${item.persona}
                              ${' '}
                              ${(item?.komentars &&
                                item.komentars !== '' &&
                                html`<cds-button kind="ghost" size="sm">
                                  ${Edit16({ slot: 'icon', fill: '#027070' })}
                                </cds-button>`) ||
                              html``}
                            </p>`
                          )}
                        </cds-tile-below-the-fold-content>
                      </cds-expandable-tile>
                    `
                  : html`
                      <div style="display: flex; align-items: center;">
                        <cds-tag type="blue" title=${statuss?.nosaukums}>
                          ${statuss?.nosaukums}
                        </cds-tag>
                        <div style="padding-left: 15px; font-size:12px;">
                          ${statuss?.datums}
                        </div>
                      </div>
                    `
                : ''}
            </div>

            ${automatiskieStatusi !== null && automatiskieStatusi.length > 0
              ? html`
                  <div style="font-size: 12px; margin-top: 20px;">
                    <p style="margin: 0;">
                      Automātiski tiks piešķirti statusi:
                    </p>
                    ${automatiskieStatusi.map(
                      //@ts-ignore
                      (item, i) => html`
                        <li key="{i}">
                          <span className="cds--label">
                            ${item.nosaukums} - ${item.datums} ${item.laiks}
                            <cds-button kind="ghost" size="sm">
                              ${Edit16({ slot: 'icon', fill: '#027070' })}
                            </cds-button>
                          </span>
                        </li>
                      `
                    )}
                  </div>
                `
              : ``}
            ${versijasInfo !== null
              ? html`
                  <div style="font-size: 12px; margin-top: 20px;">
                    ${aktivaVersija.versijasNr} Publicēšanas datums :${' '}
                    ${aktivaVersija.publicesanasPeriods.datumsNo === null
                      ? 'n/a'
                      : aktivaVersija.publicesanasPeriods.datumsNo}
                    ${aktivaVersija.publicesanasPeriods.datumsLidz === null
                      ? ''
                      : ` - ${aktivaVersija.publicesanasPeriods.datumsLidz}`}
                  </div>
                `
              : ''}
          </div>

          <div class="right-container">
            <div style="padding-top: 20px;">
              <cds-button kind="secondary" size="sm" style="padding-right: 13px"
                >Saglabāt
              </cds-button>
              <cds-button kind="primary" size="sm"
                >Mainīt statusu ${ChevronDown16({ slot: 'icon' })}
              </cds-button>
            </div>
            ${true
              ? html`
                  ${isDeadlineOver
                    ? html`<div class="countdown-timer">
                        <p class="countdown-timer__overdue">
                          Laiks ir beidzies
                        </p>
                      </div>`
                    : html`<div class="countdown-timer">
                        <div class="countdown-timer__title">
                          Atlikušais laiks līdz iesniegšanai
                        </div>
                        <div class="countdown-timer__time-left">
                          ${this.countdownDate.days !== 0
                            ? `${this.countdownDate.days} dienas ${this.countdownDate.hours}:${this.countdownDate.minutes}`
                            : `${this.countdownDate.hours}:${this.countdownDate.minutes}`}
                        </div>
                        <div class="countdown-timer__time-actual">
                          ${formattedDate}
                        </div>
                      </div>`}
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default GlobalHero1;
