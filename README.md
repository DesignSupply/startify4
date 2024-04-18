# Startify4

Startify4はウェブサイトを作成するために必要なリソースがひととおり揃った静的コーディングの開発環境です。Viteを使った環境でデザインから静的コーディングまでシンプルなウェブページから、Vue.jsやReactを使ったウェブアプリケーション制作もワンストップで効率よく進めることができます。

また、デザインガイドライン付きのテンプレートと、デザインガイドラインに対応した変数やmixinなどが用意されたSassファイルが揃ったライブラリ（SCSS、SASS記法に対応）の[「Startify-styles」](https://github.com/DesignSupply/startify-styles "Startify-styles")と併用していただくことで、デザイン制作からコーディングまでのスムーズなワークフローを実現できます。


## Features

Startify4で主にできることは以下になります。

* ソースファイル編集の自動検知
* Pug・Handlebarsを使ったHTMLマークアップ
* ページメタデータ外部ファイル（JSON）読み込み
* ページテンプレートに対応したJSON-LD構造化データの設定（Pug）
* Sass（SCSS記法）のコンパイル
* StyleLint、ESLint、Markuplintのリンター対応
* Prettierのコードフォーマット対応
* Autoprefixerを使ったベンダープレフィックスの自動付与
* JavaScriptのトランスパイル
* TypeScriptのコンパイル（本番環境用・開発環境用）
* Vue.js（Pinia、Vue Router対応）・React（Context、React Router対応）の使用
* TailwindCSSの使用
* ソースコードのマッピングファイルの生成
* HTML、CSS、JavaScriptファイルのminify対応
* 開発用ローカルサーバーの起動と自動リロード



## Requirement

Node.js >= 16.x.x

npm >= 8.x.x

npx >= 8.x.x



## Installation

### 各種パッケージのインストール
プロジェクトディレクトリにフォルダー内のファイル一式を入れて、package.jsonがあるディレクトリまで移動し、必要なパッケージをインストールします。
```bash
$ npm install
```



## Usage

### 各種コマンド

#### 1. 開発環境用ファイル編集の監視
```bash
$ npm run dev
```

#### 2. 本番環境用ビルドファイルの作成
```bash
$ npm run build
```


## Note

* タイトル、ディスクリプション、OGPなどページ固有のmeta要素はsitedata.jsonのファイルで一括管理ができます。（Pug、Handlebars共通）
* 初期設定では開発用ローカルサーバーのポート番号は2000となっています。
* 初期設定ではバンドル対象のファイルはdist/assetsディレクトリ配下に、src/staticディレクトリに含まれる静的ファイルはdist/publicディレクトリ配下に出力されるようになっています。
* 初期設定ではHTMLのテンプレートエンジンはPugとなっており、src/_example-pug.htmlもしくはsrc/_example-handlebars.htmlを各種サンプルとして用意しています。
* .vueファイルをコンパイルする場合には、tsconfig.jsonのcompilerOptionsオプション内のjsxの指定を「preserve」に変更します。



## Author

Ogawa Shinya

info@designsupply-web.com



## License

Startify is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).