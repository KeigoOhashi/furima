$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}">${category.name}</option>`;
    return html;
  }
 // 子セレクトボックスのhtml作成
  function appendChildrenBox(insertHTML){
    var childSelectHtml = "";
    childSelectHtml = `<div class="category__child" id="child-form">
                       <select class="category__child--form" name="product[category_id]"  id="child_category">
                          <option value="">---</option>
                          ${insertHTML}
                        </select>
                      </div>`;
 // 出現させるクラスの指定
    $('.category_child_drop').append(childSelectHtml);
  }
   // 孫セレクトボックスのhtml作成
  function appendGrandchildrenBox(insertHTML){
    var grandchildSelectHtml = "";
    grandchildSelectHtml = `<div class="category__grandchild" id="grandchild-form">
                            <select class="category__grandchild-form" name="product[category_id]" id="grandchild_category" >
                                <option value="">---</option>
                                ${insertHTML}
                                </select>
                            </div>`;
// 親セレクトボックスの選択肢を変えたらイベント発火
    $('.category_child_drop').append(grandchildSelectHtml);
  }
  $('#parent-form').on('change',function(){
    var parentId = document.getElementById('parent-form').value;
     $.ajax({
        url: '/products/get_category_children',
        type: 'GET',
        data: { parent_id: parentId },
        dataType: 'json'
      })
//DBからjson.jbuilder経由でJSONにデーターを渡す
      .done(function(children){ 
        $('#child-form').remove();
        $('#grandchild-form').remove();  
        var insertHTML = '';
        
        children.forEach(function(child){
 // forEachでchildに一つずつデータをinsertHTMLに代入｡子のoptionが一つずつ作成される
          insertHTML += appendOption(child); 
        });
        appendChildrenBox(insertHTML);
      })
      .fail(function(){
        alert();
      })
// 親の選択肢を変えたら、子と孫を削除｡ 
        $('#category__child').empty();
        $('#category__grandchild').empty(); 
    })
 // document､もしくは親を指定しないと発火しない 
    $(document).on('change', "#child_category", function(){
      var childId = document.getElementById('child_category').value;
      $.ajax({
        url: '/products/get_category_grandchildren',
        type: 'GET',
        data: { child_id: childId },
        dataType: 'json'
      })
      .done(function(grandchildren){
        $('#grandchild-form').remove();
        var insertHTML = '';
        grandchildren.forEach(function(grandchild){
          insertHTML += appendOption(grandchild);
        });
        appendGrandchildrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    
  })
});
