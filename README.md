# kadai03　メモ帳アプリ

## ①課題内容（どんな作品か）
- 誰にも見せない前提の、自分用のtwitterを作りました

## ②工夫した点・こだわった点
- テキストボックス背景に未入力の際は文字列が表示されるようにした。
- Tweetした際に時間と共に入力内容が表示されるようにした。
- テキスト入力ボックスは、ツイートボタンを押した後に文字が残らないようJSを調整した。

## ③質問・疑問（あれば）
- local storageのkey要素としてボタン押した時間をkeyとして保存しているが、１分に一度しか保存できない仕様になってしまっているので、keyのデータとしては秒単位でとっておき、表示されるのは分単位、といったJSを組むにはどうすれば良いのか。
- アイコン画像をtableのtdに入れる形で左側に表示したかったが、テンプレートリテラル内では画像挿入をどのように書けば良いのかわからなかった。

## ④その他（感想、シェアしたいことなんでも）
- 最低限の機能だけが備わっているが、一件ずつ削除など、より複雑な機能もできれば入れ込みたかったので、今後のためにも時間が許す限り調べてみる。
