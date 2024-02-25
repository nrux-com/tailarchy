import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import classNamesCategories from './classNamesCategories';

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
        borderColor: 'rgba(63, 114, 160, 1)',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        // color: 'rgba(145, 198, 246, 1)',
      }),
    },
  },
};

async function addHighlights() {
  const activeTextEditor = vscode.window.activeTextEditor;

  if (!activeTextEditor) return;

  const activeTextEditorDocumentText = activeTextEditor.document.getText();

  let decorationsArray = [];

  for (const classNamesType of Object.values(classNamesCategories)) {
    for (const target of classNamesType.targets) {
      let match;
      let regex = new RegExp(
        '(?<=\\s|\'|"|^)' + target.name + '[^\\s\'"]*(?=\\s|\'|"|$)',
        'g'
      );

      while ((match = regex.exec(activeTextEditorDocumentText))) {
        let startPos = activeTextEditor.document.positionAt(match.index);

        let endPos = activeTextEditor.document.positionAt(
          match.index + match[0].length
        );

        let decoration = {
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
        // vscode.workspace.onDidChangeTextDocument(
        //   (event) => {
        //     console.log('onDidSaveTextDocument');
        //     addHighlights();
        //     // if (activeEditor && event.document === activeEditor.document && checkLanguage()) {
        //     //   triggerUpdateDecorations();
        //     // }
        //   },
        //   null,
        //   context.subscriptions
        // );
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
