#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa";
import chalk from "chalk";

const cwd = process.cwd();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// --- コピー元ディレクトリ ---
const templateDir = path.resolve(__dirname, `../templates/${template}`);

// --- コピー処理 ---
try {
  const files = await fs.readdir(templateDir);
  console.log(chalk.cyan(`📦 テンプレートを展開中...`));
  for (const file of files) {
    await fs.copy(path.join(templateDir, file), path.join(cwd, file));
  }
  console.log(chalk.green("✅ テンプレートコピー完了"));
} catch (err) {
  console.error(chalk.red("❌ コピーに失敗しました"), err);
  process.exit(1);
}

// --- npm install 実行対象ディレクトリ決定 ---
let installDir = cwd;
if (template === "mj-server") {
  installDir = path.join(cwd, "public");
}

// --- npm install 実行 ---
console.log(chalk.cyan(`📥 npm install を実行中...`));
await execa("npm", ["install"], { cwd: installDir, stdio: "inherit" });

// --- 完了メッセージ ---
console.log(chalk.green(`🎉 完了! テンプレートが展開されました`));
