var cmt;

//テキスト表示部分
var showTxt = document.createElement("div"); // p要素作成
var newContent = document.createTextNode("コメント"); // テキストノードを作成
showTxt.appendChild(newContent); // p要素にテキストノードを追加
showTxt.setAttribute("id","flowText"); // p要素にidを設定
showTxt.style.position = "absolute";
showTxt.style.zIndex = 999;
showTxt.style.color = "white";
showTxt.style.fontSize = "80px";
showTxt.style.top = "100px";
var parent = document.getElementsByTagName("body")[0];
parent.insertBefore(showTxt, parent.firstChild);


function remove_stikyHeader(){
    var header =  document.getElementsByTagName("header");

    header[0].style.position = 'relative';
}

function ObserveStream(){
    //オブザーバーの作成
    var observer = new MutationObserver(() => {
        remove_stikyHeader();
    });
    //監視の開始
    
    observer.observe(document.getElementsByTagName("header")[0], {
        attributes: true,
        childList:  true,
        subtree: true
    });
    remove_stikyHeader();
    
}

//body変更時にObserveStreamを設定する。
//オブザーバーの作成
var observer = new MutationObserver(ObserveStream);
//監視の開始
observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});



