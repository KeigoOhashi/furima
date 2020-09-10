

//  $(function() {
//    $(".categories").mouseenter(function() {
//    $("ul.category1").toggle();
//    });
//    $(".categories li ul").hide();
//    $(".categories li").hover(function() {
//        $(">ul:not(:animated)", this).stop(true, true).slideDown("fast");
//        $(">a", this).addClass("active");
//    }, function() {
//        $(">ul:not(:animated)", this).stop(true, true).slideUp("fast");
//        $(">li", this).removeClass("active");
//  });
//});

$(function(){
    let btn = $(".categories")
    let category_downlists = $(".category__parent")
    valGlobal1 = "nextbox";    // メソッドを超えて使用するのでグローバル変数
  
    btn.hover(      // カテゴリーボタンに乗った時
    function(){
      category_downlists.removeClass("non-show-list").addClass("show-list");
    });      // リストの型枠を表示
  
    $(".header__inner__main").hover(
      function(){
        category_downlists.removeClass("show-list").addClass("non-show-list");
      // 親リストを非常時にする。
      $(".ones").eq(1).empty();
      // 子を空にする
      $(".ones").eq(2).empty();
      // 孫を空にする
      });
  
  
    category_downlists.mouseleave(    // カテゴリーダウンリストから外れた時
      function(){
        category_downlists.removeClass("show-list").addClass("non-show-list");
      // 親リストを非常時にする。
      $(".ones").eq(1).empty();
      // 子を空にする
      $(".ones").eq(2).empty();
      // 孫を空にする
      });
  
      $(".category__parent").on("mouseenter","#oya",(function () {
        $(".ones").eq(2).empty();    
            // 親要素に乗った場合、孫を消去。孫から親に移動した時、孫が残り続けるのを防ぐ
      }));
  
        function childrenDownBuild(children){     // 一個一個整形用
          $(".ones").eq(nextBox).empty();     // すでに表示しているものを空にする
          $.each(children,
            function(index,child) {
            let html = 
            `<div class= "category-downlist__in__one" data-id = ${child.id}>
              <a href= "/items/${child.id}/list_from_category">${child.name}</a>
            </div>`
              // json を取り出して表示。idはカテゴリーのid。nameはカテゴリの名前
            $(".ones").eq(nextBox).append(html)      // onesにhtmlを追加する
            });
        };
  
      let parentIDs = [];
      var jqxhr;
        $(".ones").on("mouseenter",".category-downlist__in__one",(function () {// マウスが一つ一つのブロックに入ったら発動
          // ※hoverメソッドは、動的なクラスに対し指定できないためonメソッドでmouseenterを使用する必要あり！！
          nextBox = $(this).closest(".ones").data("next");
          // マウスが入った親のカスタムデータ（親なら１、子なら２、孫ならnil）を取得
  
          $(this).siblings().removeClass("red");     // 兄弟要素のredクラスを削除。親から子に行った時は削除しない
          $(this).addClass("red");
          // 自分を赤くする。親から子に遷移したときに残すよう。実際はcssのhoverで実装。（jqueryで実装すると動きがもたつくため）
          if(jqxhr){          // jqxhrが存在したら、abortで中断する。連続送信を避けるため
            jqxhr.abort();
            }
              let parentID = $(this).data('id');        //選択されたカテゴリーのカスタム属性data-id（つまり、そのカテゴリーのid)を格納
              parentIDs.push(parentID);      // hoverの順番を担保するため、取得順にidをparentIDsに格納
                var nextParentID = parentIDs.shift();
                // shiftメソッドで配列の最初の要素を削除。返り値は、削除した要素なので、nextnextParentIDに格納される。
                jqxhr = $.ajax({ // ajax通信の中身をjqxhrに格納する。
                                url: "/items/category_children",  
                                type: "GET",      // サーバに送信する
                                data: {     // nextParentID(parent_id)をparamsに格納しておくる。params[:parent_id]
                                parent_id: nextParentID
                                },
                                dataType: "json",
                                })
                                .done(function (children) {
                                  childrenDownBuild(children);
                                })
                                .fail(function (jqxhr,textStatus) { 
                                  // abort（中断）した場合、failを処理する仕様なので、alertを出現させせないために、textStatus === 'abort'の場合は、何もしない処理をさせる。
                                  if (textStatus === 'abort'){return;}
                                 alert("カテゴリー取得に失敗しました");
                                });
          }));
  });