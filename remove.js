function remove_stikyHeader(){
    var header =  document.getElementsByTagName("header");

    header[0].style.position = 'relative';
}


//以下はなくても動くと思われる
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



