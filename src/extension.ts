import * as vscode from "vscode";
import { formatNumberWithSpaces, addFractionalPart, isNumber } from "./utils";

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
        let selectedText = document.getText(selection);

        if (isNumber(selectedText)) {
          // Format with spaces and fractional part
          const formattedNumber = formatNumberWithSpaces(selectedText);
          const formattedWithFraction = addFractionalPart(formattedNumber);

          vscode.window.showInformationMessage(formattedWithFraction);
        }
      }
    }
  );

  const cmdAddFractionalPart = vscode.commands.registerCommand(
    "nimiro.addFractionalPart",
    async () => {
      const nb = await vscode.window.showInputBox({
        placeHolder: "Insert number to add fractional part, example: 10000",
      });
      if (nb) {
        vscode.window.showInformationMessage(addFractionalPart(nb));
      }
    }
  );

  const cmdAddFractionalPartKbd = vscode.commands.registerCommand(
    "nimiro.addFractionalPartKbd",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        let selectedText = document.getText(selection);

        if (isNumber(selectedText)) {
          vscode.window.showInformationMessage(addFractionalPart(selectedText));
        }
      }
    }
  );

  context.subscriptions.push(cmdWithInput);
  context.subscriptions.push(cmdWithKbd);
  context.subscriptions.push(cmdAddFractionalPart);
  context.subscriptions.push(cmdAddFractionalPartKbd);
}

export function deactivate() {}
