//$(function(){
//  $('li.lists__left__item--category').hover(function(){
//    $("ul:not(:animated)", this).slideDown();
//
//      console.log("hover")
//  }, function(){
//      $("ul.categoryTree",this).slideUp();
//      console.log("not hover")
//  });
//});
//
//
//$(function(){
//  $('li.lists__left__item--category').hover(function(){
//    //$("ul:not(:animated)", this).slideDown();
//    $("ul.categoryTree").css(hover,slidDown);
//      console.log("hover")
//  }, function(){
//      $("ul.categoryTree",this).slideUp();
//      console.log("not hover")
//  });
//});
//
$(function(){
  $('li.lists__left__item--category').hover(function(){
    //$("ul:not(:animated)", this).slideDown();
    $(".tree__display").css('display','block');
    
      console.log("hover")
  }, function(){
      $(".tree__display").css('display','none');
      console.log("not hover")
  });
});