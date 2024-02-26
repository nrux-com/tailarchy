import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import classNamesCategories from './classNamesCategories';
import decorationTypes from './decorationTypes';

async function addHighlights() {
  const activeTextEditor = vscode.window.activeTextEditor;

  if (!activeTextEditor) return;

  const activeTextEditorDocumentText = activeTextEditor.document.getText();

  const decorationsArray = [];

  for (const classNamesType of Object.values(classNamesCategories)) {
    for (const target of classNamesType.targets) {
      let match;
      const regex = new RegExp(
        '(?<=\\s|\'|"|^)' + target.name + '[^\\s\'"]*(?=\\s|\'|"|$)',
        'g'
      );

      while ((match = regex.exec(activeTextEditorDocumentText))) {
        const startPos = activeTextEditor.document.positionAt(match.index);

        const endPos = activeTextEditor.document.positionAt(
          match.index + match[0].length
        );

        const decoration = {
          range: new vscode.Range(startPos, endPos),
          hoverMessage: '**' + classNamesType.category + '** rule(s)',
        };

        decorationsArray.push(decoration);
      }
    }

    activeTextEditor.setDecorations(
      decorationTypes[classNamesType.category as keyof typeof decorationTypes]
        .decorations.hivis,
      decorationsArray
    );
  }
}

function activate(context: ExtensionContext) {
  const activeTextEditor = vscode.window.activeTextEditor;
  if (!activeTextEditor) return;

  activeTextEditor.edit((editBuilder) => {
    console.log('editBuilder');
    addHighlights();
  });

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      console.log('onDidChangeActiveTextEditor');
      addHighlights();
    },
    null,
    context.subscriptions
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
    context.subscriptions
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
    context.subscriptions
  );

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      console.log('onDidChangeActiveTextEditor');
    },
    null,
    context.subscriptions
  );

  // vscode.workspace.onDidChangeTextDocument((event) => {
  //   console.log('onDidChangeTextDocument');
  //   if (event.document === vscode.window.activeTextEditor!.document) {
  //     console.log('Document changed.');
  //   }
  // });

  // vscode.workspace.onDidChangeTextDocument((event) => {
  //   console.log('onDidChangeTextDocument');

  //   // if (event.document === activeTextEditor.document) {
  //   addHighlights();
  //   // }
  // }, context.subscriptions);

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
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
