import * as vscode from 'vscode';

const decorationTypes = {
  spacing: {
    category: 'spacing',
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 127, 244, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 127, 244, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(63, 114, 160, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
};

export default decorationTypes;
