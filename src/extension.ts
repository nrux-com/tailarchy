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

  const workspaceSettings = vscode.workspace.getConfiguration('tailarchy');
  const mergeSiblingClassNames = workspaceSettings.get(
    'mergeSiblingClassNames'
  );
  const visibilityLevel = workspaceSettings.get('visibility');

  for (const classNamesCategory of Object.values(classNamesCategories)) {
    const decorationsArray = [];

    for (const target of classNamesCategory.targets) {
      let match: RegExpExecArray | null;

      const regex = new RegExp(
        '(?<=\\s|\'|:|"|^)' + target + '[^\\s\'"]*(?=\\s|\'|"|$)',
        'g'
      );

      while ((match = regex.exec(activeTextEditorDocumentText))) {
        // a flex and grid specific fix
        // flex has classes like flex-col that would be detected as both layout and flex & grid categories
        // if this problem exists with other classes a better solution must be engineered
        if (
          match[0] !== 'flex' &&
          match[0].includes('flex') &&
          classNamesCategory.categoryUri === 'layout'
        )
          continue;

        if (
          match[0] !== 'grid' &&
          match[0].includes('grid') &&
          classNamesCategory.categoryUri === 'layout'
        )
          continue;

        let startPos = activeTextEditor.document.positionAt(match.index);

        let endPos = activeTextEditor.document.positionAt(
          match.index + match[0].length
        );

        const beforeMatch = decorationsArray.filter((e) =>
          e.range.contains(
            activeTextEditor.document.positionAt(match!.index - 1)
          )
        )[0];

        const afterMatch = decorationsArray.filter((e) =>
          e.range.contains(
            activeTextEditor.document.positionAt(
              match!.index + match![0].length + 1
            )
          )
        )[0];

        if (beforeMatch !== undefined && mergeSiblingClassNames) {
          startPos = beforeMatch.range.start;

          const beforeMatchIndex = decorationsArray.indexOf(beforeMatch);

          decorationsArray.splice(beforeMatchIndex, 1);
        }

        if (afterMatch !== undefined && mergeSiblingClassNames) {
          endPos = afterMatch.range.end;

          const afterMatchIndex = decorationsArray.indexOf(afterMatch);

          decorationsArray.splice(afterMatchIndex, 1);
        }

        const decoration = {
          range: new vscode.Range(startPos, endPos),
          hoverMessage: '**' + classNamesCategory.categoryName + '** rule(s)',
        };

        decorationsArray.push(decoration);
      }
    }

    const decorationTypeKey =
      classNamesCategory.categoryUri as keyof typeof decorationTypes;

    const decorations = decorationTypes[decorationTypeKey].decorations;

    activeTextEditor.setDecorations(
      visibilityLevel === 'Subtle' ? decorations.subtle : decorations.hivis,
      decorationsArray
    );
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
      addHighlights();
    }
  );

  context.subscriptions.push(subscriptionCommandDisposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
