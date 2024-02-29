import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import classNamesCategories from './classNamesCategories';
import decorationTypes from './decorationTypes';

type ClassNameCategory = {
  categoryName: string;
  categoryUri: string;
  targets: string[];
};

type ClassNamesCategories = {
  [categoryUri: string]: ClassNameCategory;
};

function initChangeListeners(): Array<vscode.Disposable> {
  const subscriptions: Array<vscode.Disposable> = [];

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      console.log('onDidChangeActiveTextEditor');
      addHighlights();
    },
    null,
    subscriptions
  );

  vscode.workspace.onDidChangeTextDocument(
    (event) => {
      console.log('onDidChangeTextDocument');
      addHighlights();
      // if (activeEditor && event.document === activeEditor.document && checkLanguage()) {
      //   triggerUpdateDecorations();
      // }
    },
    null,
    subscriptions
  );

  vscode.workspace.onDidSaveTextDocument(
    (event) => {
      console.log('onDidSaveTextDocument');
      addHighlights();
      // if (activeEditor && event.document === activeEditor.document && checkLanguage()) {
      //   triggerUpdateDecorations();
      // }
    },
    null,
    subscriptions
  );

  return subscriptions;
}

async function addHighlights() {
  const activeTextEditor = vscode.window.activeTextEditor;

  if (!activeTextEditor) return;

  const activeTextEditorDocumentText = activeTextEditor.document.getText();

  for (const classNamesType of Object.values(classNamesCategories)) {
    const decorationsArray = [];
    for (const target of classNamesType.targets) {
      let match;
      const regex = new RegExp(
        '(?<=\\s|\'|"|^)' + target + '[^\\s\'"]*(?=\\s|\'|"|$)',
        'g'
      );

      while ((match = regex.exec(activeTextEditorDocumentText))) {
        const startPos = activeTextEditor.document.positionAt(match.index);

        const endPos = activeTextEditor.document.positionAt(
          match.index + match[0].length
        );

        const decoration = {
          range: new vscode.Range(startPos, endPos),
          hoverMessage: '**' + classNamesType.categoryName + '** rule(s)',
        };

        decorationsArray.push(decoration);
      }
    }

    const decorationTypeKey =
      classNamesType.categoryUri as keyof typeof decorationTypes;

    const decorationType = decorationTypes[decorationTypeKey].decorations.hivis;

    activeTextEditor.setDecorations(decorationType, decorationsArray);
  }
}

function activate(context: ExtensionContext) {
  const activeTextEditor = vscode.window.activeTextEditor;
  if (!activeTextEditor) return;

  addHighlights();
  initChangeListeners();

  const subscriptionCommandDisposable = vscode.commands.registerCommand(
    'tailarchy.highlight',
    () => {
      try {
        console.log('command run highlight');
      } catch (e) {
        console.log(e);
      }
    }
  );

  context.subscriptions.push(subscriptionCommandDisposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
