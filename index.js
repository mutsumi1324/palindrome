module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}
//  Phraseオブジェクトを定義する
function Phrase(content) {
    // キー名ををcontentとするプロパティを定義し、引数を値として入れる
    this.content = content;

    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // コンテンツの文字だけを返す
    // 利用例:
    //  new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
    // パリンドロームならtrue、違うならfalseを返す
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse()
     }}
    