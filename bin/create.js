#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import chalk from "chalk";

const cwd = process.cwd();

console.log(chalk.cyanBright("🚀 @obukata/project-starter\n"));

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

const { projectName } = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "プロジェクト名を入力してください:",
    default: "my-project"
  }
]);

const templateDir = path.resolve(new URL(".", import.meta.url).pathname, `../templates/${template}`);
const destDir = path.join(cwd, projectName);

console.log(chalk.cyan(`📦 プロジェクトを作成中: ${projectName}`));
await fs.copy(templateDir, destDir);

process.chdir(destDir);
console.log(chalk.green("✅ テンプレートコピー完了"));
console.log(chalk.cyan("📥 npm install を実行中..."));
await execa("npm", ["install"], { stdio: "inherit" });

console.log(chalk.green(`🎉 完了! "${projectName}" フォルダが作成されました。`));
