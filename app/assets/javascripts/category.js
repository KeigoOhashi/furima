


$(function(){
  function appendOption(category){
    var html = `<option value="${category.id}">${category.name}</option>`;
    return html;
  }
  function appendChildrenBox(insertHTML){
    var childSelectHtml = "";
    childSelectHtml = `<div class="category__child" id="parent-form">
                        <select id="parent-form" name="product[category_id]" class="serect_field">
                          <option value="">---</option>
                          ${insertHTML}
                        </select>
                      </div>`;
    $('.category_child_drop').append(childSelectHtml);
  }
  function appendGrandchildrenBox(insertHTML){
    var grandchildSelectHtml = "";
    grandchildSelectHtml = `<div class="category__child" id="parent-form">
                                <option value="">---</option>
                                ${insertHTML}
                                </select>
                            </div>`;
    $('.category_grandchild_drop').append(grandchildSelectHtml);
  }
  $('#parent-form').on('change',function(){
    var parentId = document.getElementById('parent-form').value;
      $.ajax({
        url: '/products/get_category_children',
        type: 'GET',
        data: { parent_id: parentId },
        dataType: 'json'
      })
      .done(function(children){ 
        $('#children_wrapper').remove();
        $('#grandchildren_wrapper').remove();  
        var insertHTML = '';
        
        children.forEach(function(child){
          insertHTML += appendOption(child); 
        });
        appendChildrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
      
      $('#children_wrapper').remove();
      $('#grandchildren_wrapper').remove();
    })
  $('#child__category').on('change',function(){
    var childId = document.getElementById('child__category').value;
    if(childId != "" && childId != 21 && childId != 42 && childId != 55 && childId != 61 && childId != 66 && childId != 77 && childId != 80
                     && childId != 86 && childId != 94 && childId != 113 && childId != 125 && childId != 130 && childId != 151 && childId != 158 && childId != 165
                     && childId != 174 && childId != 182  && childId != 192  ){
      $.ajax({
        url: '/products/get_category_grandchildren',
        type: 'GET',
        data: { child_id: childId },
        dataType: 'json'
      })
      .done(function(grandchildren){
        console.log(grandchildren)
        $('#grandchildren_wrapper').remove();
        var insertHTML = '';
        grandchildren.forEach(function(grandchild){
          insertHTML += appendOption(grandchild);
        });
        appendGrandchildrenBox(insertHTML);
      })
      .fail(function(){
        alert('カテゴリー取得に失敗しました');
      })
    }else{
      $('#grandchildren_wrapper').remove();
    }
  })
});
