import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import rulesCategories from './rulesCategories';
import decorationTypes from './decorationTypes';

type RulesCategory = {
  categoryName: string;
  categoryUri: string;
  targets: string[];
};

type RulesCategories = {
  [categoryUri: string]: RulesCategory;
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

function getSettingsWithDefaultValues() {
  const workspaceSettings = vscode.workspace.getConfiguration('tailarchy');

  return {
    mergeSiblingClassNames:
      workspaceSettings.get<boolean>('mergeSiblingClassNames') ?? false,
    visibilityLevel: workspaceSettings.get<string>('visibility') ?? 'Subtle',
  };
}

async function addHighlightsToCategory(
  rulesCategory: RulesCategory,
  activeTextEditor: vscode.TextEditor
) {
  const workspaceSettings = getSettingsWithDefaultValues();
  const activeTextEditorDocumentText = activeTextEditor.document.getText();

  const decorationsArray = [];

  for (const target of rulesCategory.targets) {
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
        rulesCategory.categoryUri === 'layout'
      )
        continue;

      if (
        match[0] !== 'grid' &&
        match[0].includes('grid') &&
        rulesCategory.categoryUri === 'layout'
      )
        continue;

      let startPos = activeTextEditor.document.positionAt(match.index);

      let endPos = activeTextEditor.document.positionAt(
        match.index + match[0].length
      );

      const beforeMatch = decorationsArray.filter((e) =>
        e.range.contains(activeTextEditor.document.positionAt(match!.index - 1))
      )[0];

      const afterMatch = decorationsArray.filter((e) =>
        e.range.contains(
          activeTextEditor.document.positionAt(
            match!.index + match![0].length + 1
          )
        )
      )[0];

      if (
        beforeMatch !== undefined &&
        workspaceSettings.mergeSiblingClassNames
      ) {
        startPos = beforeMatch.range.start;

        const beforeMatchIndex = decorationsArray.indexOf(beforeMatch);

        decorationsArray.splice(beforeMatchIndex, 1);
      }

      if (
        afterMatch !== undefined &&
        workspaceSettings.mergeSiblingClassNames
      ) {
        endPos = afterMatch.range.end;

        const afterMatchIndex = decorationsArray.indexOf(afterMatch);

        decorationsArray.splice(afterMatchIndex, 1);
      }

      const decoration = {
        range: new vscode.Range(startPos, endPos),
        hoverMessage: '**' + rulesCategory.categoryName + '** rule(s)',
      };

      decorationsArray.push(decoration);
    }
  }

  const decorationTypeKey =
    rulesCategory.categoryUri as keyof typeof decorationTypes;

  const decorations = decorationTypes[decorationTypeKey].decorations;

  activeTextEditor.setDecorations(
    workspaceSettings.visibilityLevel === 'Subtle'
      ? decorations.subtle
      : decorations.hivis,
    decorationsArray
  );
}

async function addHighlights() {
  const activeTextEditor = vscode.window.activeTextEditor;

  if (!activeTextEditor) return;

  const categoriesOfTailwindRules = Object.values(
    rulesCategories as RulesCategories
  );

  for (const ruleCategory of categoriesOfTailwindRules) {
    addHighlightsToCategory(ruleCategory, activeTextEditor);
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
