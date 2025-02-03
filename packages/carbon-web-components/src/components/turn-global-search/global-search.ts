import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './global-search.scss';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * page title
 *
 * @element cds-global-search
 */

interface Ieraksts {
  Url: string;
  Nosaukums: string;
  OtraRinda?: string;
}

interface SearchResult {
  Ieraksti: Ieraksts[];
}

@customElement(`${prefix}-global-search`)
class CDSTurnGlobalSearch extends LitElement {
  @property({ type: Array }) searchResults: SearchResult[] = [];
  @property({ type: String }) value = '';
  @property({ type: Boolean }) loading = false;
  @property({ type: Boolean }) expanded = false;
  @property({ type: Boolean }) isActive = false;
  @property({ type: Number }) focusedIndex = -1; // Track the focused list item index
  @property({type: String}) urlToPost = 'https://5ea5e181-a7fe-4f98-a5cb-ba5676937d64.mock.pstmn.io/AttistibasPlans/Meklet'
  @property({type: String}) requestVerificationToken = ''
  
  // Fetch data from an API using POST method
  async fetchData() {
    const formData = new FormData()
    formData.append("q", this.value)
    try {
      const response = await fetch(this.urlToPost, {
        method: 'POST',
        headers: {
          '__RequestVerificationToken' : this.requestVerificationToken
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to fetch data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    } finally {
      this.loading = false;
    }
  }

  // Handle search box open
  async handleOpen(event) {
    this.loading = true;
    this.isActive = true;
    const { value } = event.target;
    this.value = value;

    if (value.length >= 3) {
      this.loading = true;
      const dynamicResults = await this.fetchData();
      this.searchResults = dynamicResults;
      this.loading = false;
    }else{
      const initialResults = await this.fetchData();
      this.searchResults = initialResults;
    }
  }

  // Handle input changes
  async handleInputChange(event) {
    const { value } = event.target;
    this.value = value;

    if (value.length >= 3) {
      this.loading = true;
      const dynamicResults = await this.fetchData();
      this.searchResults = dynamicResults;
      this.loading = false;
    }
  }

  async handleBlur() {
    // Check if focus is within the search results or the input field
    setTimeout(() => {
      const focusedElement = this.shadowRoot?.activeElement;
      const isInsideComponent =
        focusedElement?.closest('.global-search-input') || focusedElement?.closest('.search-results');
      
        console.log(isInsideComponent)
      // Only clear results if the focus is outside of the search component
      if (!isInsideComponent) {
        this.searchResults = [];
        this.value = '';
        this.isActive = false;
        this.expanded = false;
      }
    }, 0);
  }
  
  async handleClearInputButtonClick() {
    this.focusedIndex = -1
    this.searchResults = [];
    this.value = '';
    this.isActive = false;
  }

  handleKeyDown(event) {
    console.log("handlekeydown")
    // @ts-ignore
    const listLength = this.searchResults[0]?.Ieraksti.length || 0;
    if (!listLength) return;
  
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % listLength;
      this.updateFocusedItem();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + listLength) % listLength;
      this.updateFocusedItem();
    }else if (event.key === 'Tab' && event.shiftKey) {
      // Reset focusedIndex on Shift + Tab
      this.focusedIndex = -1;
    }
    else if (event.key === 'Enter' && this.focusedIndex >= 0) {
      console.log(this.focusedIndex)
      // @ts-ignore
      const focusedItem = this.searchResults[0]?.Ieraksti[this.focusedIndex];
      if (focusedItem) {
        window.location.href = focusedItem.Url; // Navigate to the URL
      }
    } 

    // Prevent closing search if the user is navigating with keyboard
    this.expanded = true
    this.isActive = true;

    // if (event.key === 'Escape') {
    //   this.shadowRoot?.getElementById("cds-search-global-component")?.removeAttribute("expanded")
    //   this.focusedIndex = -1
    //   this.searchResults = [];
    //   this.value = '';
    //   this.isActive = false;
    // }
  }

  updateFocusedItem() {
    const items = this.shadowRoot?.querySelectorAll('.search-results li a');
    items?.forEach((item, index) => {
      item.setAttribute('tabindex', '-1');
      if (index === this.focusedIndex) {
        item.setAttribute('tabindex', '0');
        // @ts-ignore
        item.focus();
      }
    });
  }


  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.handleClickOutside);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleClickOutside);
  }
  
  handleClickOutside = (event: MouseEvent) => {
    const searchContainer = this.shadowRoot?.querySelector('div');
    if (searchContainer && !searchContainer.contains(event.target as Node) && this.expanded) {
      this.handleBlur();
    }
  };

  render() {
    return html`
      <div style="${this.isActive ? "padding-right: 0px" : "padding-right: 48px"}" @keydown=${this.handleKeyDown}>
        <cds-search
          id="cds-search-global-component"
          expandable
          label-text="Search"
          @open=${()=>{console.log("asdasdas")}}
          @focus=${this.handleOpen}
          @input=${this.handleInputChange}
          @blur=${this.handleBlur}
          .expanded=${this.expanded}
          ._handleClearInputButtonClick=${this.handleClearInputButtonClick}
          .value=${this.value}
          size="lg"
          style="max-width: 500px;"
        ></cds-search>

        ${this.isActive
          ? html`
              ${this.loading
                ? html`
                    <div style="width: 500px;">
                      <cds-inline-loading status="active">Loading data...</cds-inline-loading>
                    </div>
                  `
                : html`
                    <div class="search-results">
                      <ul
                        aria-labelledby="search-label"
                        role="menu"
                        id="search-menu"
                        class="GlobalSearch-module--list--59b6a"
                      >
                        ${this.searchResults[0]?.Ieraksti.map(
                          (item, index) => html`
                            <li role="none">
                              <a
                                id="menu-item-${index}"
                                role="menuitem"
                                tabindex="-1"
                                href=${item.Url}
                              >
                                <strong>${item.Nosaukums}</strong>
                                <span>${item.OtraRinda || ''}</span>
                              </a>
                            </li>
                          `
                        )}
                      </ul>
                    </div>
                  `}
            `
          : ''}
      </div>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default CDSTurnGlobalSearch;
