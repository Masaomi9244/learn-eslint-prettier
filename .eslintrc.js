module.exports = {
    // envとは？
    // グローバルな変数を環境に応じて定義してくれるもの
    //「eslint env」でググって公式を見ると設定できるものを確認できる。
    // 基本的には使うものだけしか設定しない。
    "env": {
        "browser": true,
        "es2021": true,
        "node": true, //これがないと1行目のmoduleでエラーになる(rulesのno-undefに引っかかるため)
    },
    // parserOptionsとは？
    // JSが構文を解析するときに必要な情報を補足として付けるもの
    // ESLintはデフォルトだとES5まで(古いもの)しか対応してないので必要
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    // pluginsとは
    // ESLintがもともと持っていないrulesを拡張するもの
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    // "extends": ["plugin:react/recommended"], // 14~17,23行目と同じ設定。（どっちかがあれば使える）
    "rules": {
        "semi": ["warn", "always"], // セミコロンがないと警告
        "quotes": ["error", "double"], // ダブルクォーテーションじゃないとエラー
        "react/prop-types": "off",
        "no-undef": "error" // 未定義の変数をエラーにする
    }
};
