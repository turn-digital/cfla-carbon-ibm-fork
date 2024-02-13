import { html } from 'lit-html';
import './textEditor';

const translations = {
  bold: 'Bold Translation',
  italic: 'Italic Translation',
  underline: "Underlined",
  alignLeft: "from left",
  alignCenter : "from center",
  alignRight : "from Right",
  alignJustify : "style justify",
  unorderedList: "list with points",
  orderedList: "list with numbers",
  indent: "indent",
  outdent: "outdent",
  textLink: "Insert the link",
  superscript: "superscript",
  subscript:"subscript"
};

export const Default = () => {
  return html`<cds-text-editor .translations="${translations}"></cds-text-editor> `;
};

Default.storyName = 'Default';

export default {
  title: 'Custom-Components/textEditor',
};
