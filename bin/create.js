#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import chalk from "chalk";

const cwd = process.cwd();

console.log(chalk.cyanBright("🚀 @obukata/project-starter\n"));

// --- テンプレート選択 ---
const { template } = await inquirer.prompt([
  {
    type: "list",
    name: "template",
    message: "どのテンプレートを使用しますか？",
    choices: [
      { name: "MJサーバ用", value: "mj-server" },
      { name: "制作パートナー用", value: "partner" }
    ]
  }
]);

// --- プロジェクト名入力 ---
const { projectName } = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "プロジェクト名を入力してください:",
    default: "my-project"
  }
]);

// --- コピー元・先のディレクトリ設定 ---
const templateDir = path.resolve(new URL(".", import.meta.url).pathname, `../templates/${template}`);
const destDir = path.join(cwd, projectName);

// --- コピー処理 ---
console.log(chalk.cyan(`📦 プロジェクトを作成中: ${projectName}`));
await fs.copy(templateDir, destDir);
console.log(chalk.green("✅ テンプレートコピー完了"));

// --- インストール対象ディレクトリを条件で変更 ---
let installDir = destDir;
if (template === "mj-server") {
  installDir = path.join(destDir, "public");
}

// --- npm install 実行 ---
console.log(chalk.cyan(`📥 npm install を実行中...（${installDir}）`));
process.chdir(installDir);
await execa("npm", ["install"], { stdio: "inherit" });

// --- 完了メッセージ ---
console.log(chalk.green(`🎉 完了! "${projectName}" フォルダが作成されました。`));
