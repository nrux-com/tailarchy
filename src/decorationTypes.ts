import * as vscode from 'vscode';

const decorationTypes = {
  layout: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(88, 160, 63, 0.04)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(88, 160, 63, 0.04)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(88, 160, 63, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  'flexbox-and-grid': {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(219, 39, 119, 0.04)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(219, 39, 119, 0.04)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(219, 39, 119, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  spacing: {
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

  sizing: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(250, 255, 0, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(250, 255, 0, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(250, 255, 0, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  typography: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 153, 0, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 153, 0, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 153, 0, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },

  //
  backgrounds: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 255, 249, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 255, 249, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(0, 255, 249, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  borders: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(128, 0, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(128, 0, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(128, 0, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  effects: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(185, 182, 119, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(185, 182, 119, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(185, 182, 119, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  filters: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  tables: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  'transitions-and-animation': {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  transforms: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  interactivity: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  svg: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
  accessibility: {
    decorations: {
      subtle: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        borderRadius: '7px',
      }),
      hivis: vscode.window.createTextEditorDecorationType({
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        borderRadius: '2px 2px 7px 7px',
        borderColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
};

export default decorationTypes;
