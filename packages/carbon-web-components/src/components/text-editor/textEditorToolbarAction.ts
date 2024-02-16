import Quill from './quill/quill.js';

export function applyAlignment(quill: Quill, align) {
  const selection = quill.getSelection();
  if (selection) {
    quill.format('align', align);
  } else {
    // No active selection, apply alignment to entire editor content
    quill.root.style.textAlign = align;
  }
}

export function applyFormat(quill: Quill, format: 'bold' | 'italic' | 'underline') {
  const selection = quill.getSelection();
    if (selection) {
      quill.format(format, !quill.getFormat()[format]);
    } else {
      console.error('No text selected');
    }
}

export function indent(quill: Quill) {
  const selection = quill.getSelection();
    if (selection) {
      const format = quill.getFormat(selection.index, selection.length);
      const currentIndent = parseInt(format['indent'] || 0);
      const newIndent = currentIndent + 1;
      quill.format('indent', newIndent);
    }
}

export function outdent(quill: Quill) {
  const selection = quill.getSelection();
    if (selection) {
      const format = quill.getFormat(selection.index, selection.length);
      const currentIndent = parseInt(format['indent'] || '0', 10); // Ensure default is 0
      const newIndent = Math.max(0, currentIndent - 1); // Ensure newIndent is not negative
      quill.format('indent', newIndent);
    }
}

export function clearFormatting(quill: Quill) {
  const selection = quill.getSelection();
  if (selection) {
    quill.removeFormat(selection.index, selection.length);
  }
}

export function applyUndo(quill: Quill) {
  quill.history.undo();
}

export function applyRedo(quill: Quill) {
  quill.history.redo();
}