import { html } from 'lit-html';
import './textEditor';

const translations = {
  title: 'Description',
  statusSave: 'Saved',
  statusSaving: 'Saving',
  statusBad: 'Error saving data',
  statusLoad: 'Loading',
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
  subscript:"subscript",
  clearFormatting: "Clear format style",
  fullScreen: "Show in fullscreen",
  redo: "Redo action",
  undo: "Undo action",
  paragraph: "Paragraph",
  heading1: "Heading 1",
  heading2: "Heading 2",
  heading3: "Heading 3",
  heading4: "Heading 4",
  heading5: "Heading 5",
  heading6: "Heading 6",
};

const userMeta = {
  name: "Reinis",
  date: "01.01.2001 20:01"
}

export const Default = () => {
  return html`
    <cds-text-editor 
        .translations="${translations}" 
        .userMeta="${userMeta}"
        .textLimit="${1000}">
    </cds-text-editor>
  `;
};

Default.storyName = 'Default';

export default {
  title: 'Custom-Components/textEditor',
};
