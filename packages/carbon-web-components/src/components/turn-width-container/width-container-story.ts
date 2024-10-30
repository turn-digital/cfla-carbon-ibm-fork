import { html } from 'lit-html';
import './width-container';
import storyDocs from './width-container-story.mdx';

export const Default = (args) => {
  const {} = args?.['cds-width-container'] ?? {};
  return html`
    <cds-width-container flex
      ><div>some info in flex</div>
      <div>some more info</div></cds-width-container
    >
    <br />
    <br />
    <cds-width-container width="200px"
      ><div>some info in 200px</div>
      <div>some more info</div></cds-width-container
    ><br />
    <br />
    <cds-width-container width="100px"
      ><div>some info in 100px</div>
      <div>some more info</div></cds-width-container
    >
  `;
};

export default {
  title: 'Custom-Components/Width container',
  parameters: {
    ...storyDocs.parameters,
  },
};
