# TechUni website

## Project setup

```
npm install
```

# Requirement

Vue cli 2.6.11

# Compiles and hot-reloads for development

```
npm run serve
```

# Compiles and minifies for production

```
npm run build
```
# Tech.Uni website
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 使用技術

- [Vue](https://jp.vuejs.org/)
  -  UI ライブラリ。(Javascriptフレームワーク)
- [TypeScript](https://www.typescriptlang.org/)
  - 型があることでバグを防いだり、ドキュメント代わりになったり、チーム開発がスムースになります。
- [Sass](https://sass-lang.com/)
  - 『Sass（サース）』とは、Syntactically Awesome Style Sheetsの頭文字をとって出来た言葉で、日本語に訳すと”構造的にすばらしいスタイルシート”といった意味合いになります。
  - [scss]
    - 『波括弧{}』を使用してネスト（入れ子）を表現します。基本的な書き方はCSSとさほど変わらず、直感的にも書きやすくなっていることが特徴的です。
- [ESLint](https://eslint.org/)
  - コードを分析し問題点を指摘してくれるツールです。これがあることでメンバー同士のコード差異が少なくなったり、独自ルールを追加して書き方を統一できます。
- [Prettier](https://prettier.io/)
  - コードフォーマッターです。改行やクォーテーションなどを統一できます。ESLint とあわせて使うのが一般的で、ESLint だけでは実現できない部分をカバーします。

## セットアップ

### ① npm の準備

まずは npm がインストールされているか確認しましょう。ターミナルで下記コマンドを打ってバージョンが表示されたら、それ以降の手順は飛ばして OK です。

```
npm -v
```

npm が入っていなかった方は Node.js も入っていないと思うので、まずは Node.js をインストールしてください。インストール方法はたくさんありますが、[VOLTA](https://volta.sh/)をオススメしております。VOLTA のサイトを参考に Node.js をインストールしてください。

npm は Node.js とともに配布されるため、Node.js をインストールしたら npm も自動的にインストールされます。

### ② VS Code 拡張機能のインストール

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

上記の拡張機能をいれることで、保存時に自動で ESLint(+Prettier) が走り、コードを整形してくれます。

### ③ リポジトリのクローン

このリポジトリをローカル環境にクローンしてください。

コマンドで行う場合

```
git clone https://github.com/TechUni2020/homepage.git
```

VS Code で行う場合は、リポジトリをクローンする（英語だと Clone Repository）というボタンがあるので、それをクリックしていただき、`https://github.com/TechUni2020/homepage.git` を入力してエンターを押してください。

### ④ 依存関係のインストール

ターミナルを開き、下記コマンドで依存関係をインストールしましょう。以上で、環境構築は完了です。

```
npm install
```

## 開発する

開発を行う場合

```
npm run serve // localhost:8080 で立ち上がります
```

本番の動作確認を行う場合

```
npm run build // bundleファイルであるdist/が生成されます
```

## Git ブランチルール

`master`

- マージされると本番に自動反映されます。

`develop`

- 本番反映前に確認するための環境（ステージング環境）。
- 常駐しているブランチで、feature からの変更を受け付け、main にマージする。

`hotfix`

- 本番で発生した緊急のバグに対処するためのブランチ。
- 必ず main から分岐し、main と develop にマージする。

`feature/あなたのGitHub名_*`

- 開発にはここを用いる。
- 必ず develop から分岐し、develop にマージする。
- 「あなたの GitHub 名」にはアカウント名を入力。
- `*` は開発するものを簡易的に記入。
- 例: feature/shouhi_add-about-page

`main`, `develop`, `hotfix` に直接 push してはいけません。基本的に皆さんが触って良いのは `feature/あなたのGitHub名_*` ブランチだけです。

## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/tayzar133"><img src="https://avatars.githubusercontent.com/u/62434815?v=4" width="100px;" alt=""/><br /><sub><b>テザー ナイ ウィン</b></sub></a><br /><a href="https://github.com/TechUni2020/Tech.Uni_Members/commits?author=
tayzar-v98" title="Documentation">📖</a> <a href="#projectManagement-
tayzar-v98" title="Project Management">📆</a>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
