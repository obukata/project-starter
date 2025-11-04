# Project name

## ディレクトリ構成

```
root/
│
├─ src - 作業ディレクトリ
│  └─ assets
│     ├─ _postcss
│     ├─ fonts
│     ├─ scripts
│     ├─ styles
│     └─ images
│
└─ dist - 納品ディレクトリ
```

src 以下にて、ディレクトリ・ファイル名がアンダーバーから始まるものは dist コピー時に自動的に削除されます。

```
// 例
/src/assets/_postcss/*
/src/assets/images/_dummy.jpg
/src/_template/index.html
```

## Extensions

Editorconfig - 記述ルール

ESLint - javascript の Lint

Prettier - コード整形

PostCSS - PostCSS サポート

Highlight - コメントハイライト

Sonarlint - 総合 Lint

Comment Anchor - 各コメントのアンカー

## npm

```
初回環境セットアップ時
$ npm install

開発環境
$ npm run dev

納品時（出力されるdistを納品）
$ npm run build
```
