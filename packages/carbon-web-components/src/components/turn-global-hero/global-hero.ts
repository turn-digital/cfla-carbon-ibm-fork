import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from './global-hero.scss';

@customElement(`${prefix}-global-hero`)
class GlobalHero extends LitElement {
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
      kods,
      detalas,
      autori,
      versijasInfo,
      statuss,
      statusuVesture,
      automatiskieStatusi,
      pogas,
      iesniegsanasTermins,
      ikonas,
    } = this.data || {};

    // const {projectId, page, setResp, setDisableBtn, disableBtn } = this.meta;

    const projectId = this.meta ? this.meta : 0;
    const page = this.meta ? this.meta : 0;
    const setResp = this.meta ? this.meta : 0;
    const setDisableBtn = this.meta ? this.meta : 0;
    const disableBtn = this.meta ? this.meta : 0;

    const leftSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 1
    );
    const rightSideButtons = pogas?.saraksts.filter(
      (item) => item.pozicija === 2
    );

    const { aktivaVersija } = versijasInfo || {}; // versijuVesture

    console.log(this.translations);

    return html`
      <div class="hero hero--new">
        ${kods !== null && kods !== undefined
          ? html`
              <div class="hero__head">
                <cds-accordion>
                  <cds-accordion-item class="cds--label" title=${kods}>
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
        <div class="hero__content">
          <div class="hero__box">
            <div class="hero__col">
              <h1 class="hero__title heading-03">${this.data?.nosaukums}</h1>
              ${autori !== null
                ? html`
                    <p class="hero__people">
                      ${autori?.map(
                        (item, i) => html`
                          <span key=${i} class="hero__person cds--label">
                            ${item.grupa === 'PV'
                              ? html`
                                  <cds-user-avatar
                                    size="16"
                                    class="avatar-icon"></cds-user-avatar>
                                  ${this.translations?.GLOBAL_PERSON_PV}:
                                  ${item.vardsUzvards}
                                `
                              : html`
                                  <cds-user
                                    size="16"
                                    class="avatar-icon"></cds-user>
                                  ${item.vardsUzvards}
                                `}
                          </span>
                        `
                      )}
                    </p>
                  `
                : ''}
            </div>
            <div class="hero__col">
              <div class="hero__buttons">
                <div class="hero__buttons-box">
                  ${leftSideButtons !== undefined
                    ? leftSideButtons?.length > 1
                      ? html`
                          <cds-select
                            classPrefix="cc-select"
                            class="hero__btn-select cc-select cc-select--btn"
                            @change=${(e) => {
                              if (
                                e.target.value.tips === 'mainitStatusu' ||
                                e.target.value.tips === 'izveidot'
                              ) {
                                this.statusModalData = e.target.value;
                                this.showStatusModal = true;
                              } else if (e.target.value.tips === 'parakstit') {
                                this.meta.setSignModal(true);
                              }
                            }}
                            .options=${leftSideButtons}
                            getOptionLabel=${(option) => option.pogasNosaukums}
                            getOptionValue=${(option) => option.pogasNosaukums}
                            controlShouldRenderValue=${true}
                            isSearchable=${false}
                            maxMenuHeight=${200}
                            placeholder=${this.translations
                              .PEC_SINGLE_CR_DROP_PLACEHOLDER}
                            .value=${{
                              id: '0',
                              pogasNosaukums: pogas.otrasPozicijasNosaukums,
                            }}></cds-select>
                        `
                      : leftSideButtons?.length !== 0
                      ? html`
                          <cds-button
                            @click=${() => {
                              if (
                                leftSideButtons[0].tips === 'mainitStatusu' ||
                                leftSideButtons[0].tips === 'izveidot'
                              ) {
                                this.statusModalData = leftSideButtons[0];
                                this.showStatusModal = true;
                              } else if (
                                leftSideButtons[0].tips === 'parakstit'
                              ) {
                                this.meta.setSignModal(true);
                              }
                            }}
                            size="sm"
                            kind=${leftSideButtons[0].veids}>
                            ${leftSideButtons[0].pogasNosaukums}
                          </cds-button>
                        `
                      : ''
                    : ''}
                  ${rightSideButtons !== undefined
                    ? rightSideButtons?.length > 1
                      ? html`
                          <cds-select
                            classPrefix="cc-select"
                            class="hero__btn-select cc-select cc-select--btn"
                            @change=${(e) => {
                              if (
                                e.target.value.tips === 'mainitStatusu' ||
                                e.target.value.tips === 'izveidot'
                              ) {
                                this.statusModalData = e.target.value;
                                this.showStatusModal = true;
                              } else if (e.target.value.tips === 'parakstit') {
                                this.meta.setSignModal(true);
                              }
                            }}
                            .options=${rightSideButtons}
                            getOptionLabel=${(option) => option.pogasNosaukums}
                            getOptionValue=${(option) => option.pogasNosaukums}
                            controlShouldRenderValue=${true}
                            isSearchable=${false}
                            maxMenuHeight=${200}
                            placeholder=${this.translations
                              .PEC_SINGLE_CR_DROP_PLACEHOLDER}
                            .value=${{
                              id: '0',
                              pogasNosaukums: pogas.otrasPozicijasNosaukums,
                            }}></cds-select>
                        `
                      : rightSideButtons?.length !== 0
                      ? html`
                          <cds-button
                            @click=${() => {
                              if (
                                rightSideButtons[0].tips === 'mainitStatusu' ||
                                rightSideButtons[0].tips === 'izveidot'
                              ) {
                                this.statusModalData = rightSideButtons[0];
                                this.showStatusModal = true;
                              } else if (
                                rightSideButtons[0].tips === 'parakstit'
                              ) {
                                this.meta.setSignModal(true);
                              }
                            }}
                            size="sm"
                            kind=${rightSideButtons[0].veids}>
                            ${rightSideButtons[0].pogasNosaukums}
                          </cds-button>
                        `
                      : ''
                    : ''}
                </div>
              </div>
            </div>
          </div>
          <div class="hero__box">
            <div class="hero__col">
              ${statusuVesture !== null
                ? statusuVesture?.length > 1
                  ? html`
                      <div class="hero__statuss">
                        <cds-accordion>
                          <cds-accordion-item
                            class="cds--label"
                            title=${html`
                              <cds-tag type="blue" title=${statuss?.nosaukums}>
                                ${statuss?.nosaukums}
                              </cds-tag>
                              <div class="hero__logged cds--label">
                                ${statuss?.datums}
                              </div>
                            `}>
                            ${statusuVesture.map(
                              (item, i) => html`
                                <p key=${i} class="hero__statuss-text">
                                  ${item?.datums} ${item?.nosaukums}
                                  ${item.persona}
                                  ${item?.komentars && item.komentars !== ''
                                    ? html`
                                        <cds-button
                                          @click=${() => {
                                            this.changeModal = true;
                                            this.changeContentModal =
                                              item.komentars;
                                          }}
                                          size="sm"
                                          kind="ghost">
                                          ${this.translations
                                            .GLOBAL_EXPLANATION}
                                        </cds-button>
                                      `
                                    : ''}
                                </p>
                              `
                            )}
                          </cds-accordion-item>
                        </cds-accordion>
                      </div>
                    `
                  : html`
                      <div class="hero__statuss">
                        <cds-tag type="blue" title=${statuss?.nosaukums}>
                          ${statuss?.nosaukums}
                        </cds-tag>
                        <div class="hero__logged cds--label">
                          ${statuss?.datums}
                        </div>
                      </div>
                    `
                : ''}
              ${automatiskieStatusi !== null && automatiskieStatusi?.length > 0
                ? html`
                    <div class="hero__autostatus">
                      <div class="cds--label">
                        ${this.translations?.AUTO_ADDED_STATUS}:
                      </div>
                      <ul>
                        ${automatiskieStatusi.map(
                          (item, i) => html`
                            <li key=${i}>
                              <span class="cds--label">
                                ${item?.nosaukums} - ${item?.datums}
                                ${item.laiks}
                                <cds-button
                                  hasIconOnly
                                  .renderIcon=${(props) =>
                                    html`<cds-edit
                                      size="16"
                                      ...=${props}></cds-edit>`}
                                  tooltipAlignment="end"
                                  tooltipPosition="bottom"
                                  iconDescription=${this.translations
                                    .GLOBAL_EDIT}
                                  kind="ghost"
                                  size="sm"
                                  @click=${() => {
                                    this.statusModalData = item.poga;
                                    this.showStatusModal = true;
                                  }}></cds-button>
                              </span>
                            </li>
                          `
                        )}
                      </ul>
                    </div>
                  `
                : ''}
              ${versijasInfo !== null
                ? html`
                    <div class="hero__statuss">
                      <div class="cds--label">
                        ${aktivaVersija?.versijasNr}
                        ${this.translations?.GLOBAL_PUBLIC_PERIOD}:
                        ${aktivaVersija?.publicesanasPeriods.datumsNo === null
                          ? 'n/a'
                          : aktivaVersija?.publicesanasPeriods.datumsNo}
                        ${aktivaVersija?.publicesanasPeriods.datumsLidz === null
                          ? ''
                          : ` - ${aktivaVersija?.publicesanasPeriods.datumsLidz}`}
                      </div>
                    </div>
                  `
                : ''}
              ${this.relatedDocuments && this.relatedDocuments?.length > 0
                ? html`
                    <div class="hero__autostatus">
                      <p class="cds--label cc-strong">
                        ${page === 'aaSingle'
                          ? this.translations
                              .GLOBAL_AGREEMENT_AMENDMENT_CONSTRUCTOR
                          : this.translations
                              .PROJECT_QUESTION_RELATED_DOCUMENTS}
                      </p>
                      <ul class="hero__autostatus-list">
                        ${this.relatedDocuments.map(
                          (item, i) => html`
                            <li key=${i}>
                              <span class="cds--label">
                                <cds-toolbox size="16"></cds-toolbox>
                                <a
                                  class="cds--link"
                                  href=${`/${this.extractLastTwoItemsFromURL(
                                    item.saite
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  ${item?.nosaukums}
                                  <cds-launch size="14"></cds-launch>
                                </a>
                              </span>
                            </li>
                          `
                        )}
                      </ul>
                    </div>
                  `
                : ''}
            </div>
            <div class="hero__col">
              ${iesniegsanasTermins !== null && iesniegsanasTermins !== ''
                ? html`
                    <div style="margin-top: 10px; margin-bottom: 10px;">
                      <div class="hero__timer">
                        <cds-countdown-timer
                          .time=${iesniegsanasTermins}
                          .type=${page}></cds-countdown-timer>
                      </div>
                    </div>
                  `
                : ''}
            </div>
          </div>
          ${ikonas !== null && ikonas?.length > 0
            ? html`
                <div class="hero__tool">
                  ${ikonas.map(
                    //@ts-ignore
                    (item, i) => html`
                      <cds-button
                        hasIconOnly
                        @click=${() => {
                          this.downloadFile(
                            item.adrese,
                            `${this.translations?.GLOBAL_STANDART_CONTRACT}_${
                              versijasInfo?.aktivaVersija?.versijasNr
                            }.${item.tips === 'markdown' ? 'md' : item.tips}`
                          );
                        }}
                        .renderIcon=${(props) =>
                          html`<cds-download
                            size="16"
                            ...=${props}></cds-download>`}
                        tooltipAlignment="end"
                        tooltipPosition="top"
                        .iconDescription=${item.pogasNosaukums}></cds-button>
                    `
                  )}
                </div>
              `
            : ''}
        </div>

        ${this.showStatusModal
          ? html`
              <cds-hero-status-modal
                .data=${this.statusModalData}
                .defaultDate=${automatiskieStatusi !== null
                  ? automatiskieStatusi[0]?.datums
                  : null}
                .meta=${{
                  projectId: projectId?.length ? projectId : 0,
                  showModal: this.showStatusModal,
                  setShowModal: (value) => {
                    this.showStatusModal = value;
                  },
                  setResp: setResp,
                  setDisableBtn: setDisableBtn,
                  disableBtn: disableBtn,
                  setNotifyErr: (value) => {
                    this.notifyErr = value;
                  },
                }}></cds-hero-status-modal>
            `
          : ''}
        ${this.changeModal
          ? html`
              <cds-modal
                .open=${this.changeModal}
                modalHeading=${this.translations?.AGREEMENT_CHANGEMODAL_HEADING}
                passiveModal
                @requestClose=${() => {
                  this.changeModal = false;
                }}>
                <p class="cds--label">
                  ${this.translations?.GLOBAL_EXPLANATION}
                </p>
                <div
                  class="body-compact-01"
                  .innerHTML=${this.changeContentModal}></div>
              </cds-modal>
            `
          : ''}
        ${this.notifyErr
          ? html`
              <cds-notification
                customClass="cc-notification cc-notification--block"
                kind="error"
                lowContrast
                title=${`403 - ${this.translations?.GLOBAL_ERROR}`}
                .arr=${[this.notifyErr]}></cds-notification>
            `
          : ''}
      </div>
    `;
  }
  static styles = styles;
}

export default GlobalHero;
