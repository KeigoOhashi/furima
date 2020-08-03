$(function(){
  $('.lists__left__item--first li').hover(function(){
      $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul.categoryTree",this).slideUp();
  });
});