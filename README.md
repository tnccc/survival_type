# はじめに
JavaScriptの理解が少しずつ深くなってきたので、
サバイバルTypeScriptで体系的に学習を進めてみる。

- JavaScriptからTypeScriptへの書き換えは拡張子を.tsにする
- 型注釈を書き加えると、コンパイラは細かいチェックをしてくれる。
`function increment(num: number){}`
上記のように :number と型を指定することで数値型の値が入っているとエラーを表示してくれる。
increment(999) => ○
increment('999') => × (この場合、引数の値が文字列型のためエラーになる。)

## Reactでいいねボタンを作成する
コンポーネントを表現する方法は2種類

1. 関数コンポーネント
2. クラスコンポーネント

関数型コンポーネント
---
関数コンポーネントはJSの書き方と同じように記述できる。
```
function LikeButton() {
  const count: number = 999;
  return (
    <div className="likeButton">
      <span>♥{ count }</span>
    </div>
  )
}
```

クラス型コンポーネント
---
クラスコンポーネントではES6のクラスを利用して記述します。
関数ではないので定数を宣言できない。
代わりにcountというプロパティを用意して
this.countで描画できたけど・・・
クラスについて勉強不足なので要復習
```
class LikeButton extends React.Component{
  count = 999
  render() {
    return <div className="likeButton">
      <span>♥{ this.count }</span>
    </div>
  }
}
```