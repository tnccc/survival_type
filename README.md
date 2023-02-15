#はじめに
JavaScriptの理解が少しずつ深くなってきたので、
サバイバルTypeScriptで体系的に学習を進めてみる。

- JavaScriptからTypeScriptへの書き換えは拡張子を.tsにする
- 型注釈を書き加えると、コンパイラは細かいチェックをしてくれる。
`function increment(num: number){}`
上記のように :number と型を指定することで数値型の値が入っているとエラーを表示してくれる。
increment(999) => ○
increment('999') => × (この場合、引数の値が文字列型のためエラーになる。)

