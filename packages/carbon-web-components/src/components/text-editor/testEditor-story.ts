import { html } from 'lit-html';
import './textEditor';

export const Default = () => {
  return html`<cds-text-editor></cds-text-editor> `;
};

Default.storyName = 'Default';

export default {
  title: 'Custom-Components/textEditor',
};
