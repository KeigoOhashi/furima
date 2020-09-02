//$(function(){
//  $('li.lists__left__item--category').hover(function(){
//    $(".tree__display").css('display','block');
//  }, function(){
//      $(".tree__display").css('display','none');
//  });
//});
$(function() {
  $(".categories").hover(function() {
  $("ul.category__parent").toggle();
  });
  $(".categories li ul").hide();
  $(".category__parent li").hover(function() {
      $(">ul:not(:animated)", this).stop(true, true).slideDown("fast");
      $(">a", this).addClass("active");
  }, function() {
      $(">ul:not(:animated)", this).stop(true, true).slideUp("fast");
      $(">a", this).removeClass("active");
});
});