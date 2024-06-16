// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { formatNumberWithSpaces, isNumber } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  const cmdWithInput = vscode.commands.registerCommand(
    "nimiro.formatNumber",
    async () => {
      const nb = await vscode.window.showInputBox({
        placeHolder: "Insert number to format, example: 100000",
      });
      if (nb) {
        vscode.window.showInformationMessage(formatNumberWithSpaces(nb));
      }
    }
  );

  const cmdWithKbd = vscode.commands.registerCommand(
    "nimiro.formatNumberKbd",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        const selectedText = document.getText(selection);

        if (isNumber(selectedText)) {
          vscode.window.showInformationMessage(
            formatNumberWithSpaces(selectedText)
          );
        }
      }
    }
  );

  context.subscriptions.push(cmdWithInput);
  context.subscriptions.push(cmdWithKbd);
}

// This method is called when your extension is deactivated
export function deactivate() {}
