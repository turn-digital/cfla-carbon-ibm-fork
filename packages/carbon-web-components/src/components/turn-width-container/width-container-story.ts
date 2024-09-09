import { html } from 'lit-html';
import './width-container';
import storyDocs from './width-container-story.mdx';

export const Default = (args) => {
  const {} = args?.['cds-width-container'] ?? {};
  return html`
    <cds-width-container flex
      ><div>asdasdasdas</div>
      <div>.b,mcv.b,mvcbc</div></cds-width-container
    >
  `;
};

export default {
  title: 'Custom-Components/Width container',
  parameters: {
    ...storyDocs.parameters,
  },
};
