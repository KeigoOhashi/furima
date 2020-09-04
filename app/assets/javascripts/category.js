//$(function(){
//  $('li.lists__left__item--category').hover(function(){
//    $(".tree__display").css('display','block');
//  }, function(){
//      $(".tree__display").css('display','none');
//  });
//});
$(function() {
  $(".categories").hover(function() {
  $("ul.category__parent").slideDown(500);
  });
  $(".categories li ul").hide();
  $(".categories li ").hover(function() {
      $(">ul:not(:animated)", this).stop(true, true).slideDown(500);
      $(">a", this).addClass("active");
  }, function() {
      $(">ul:not(:animated)", this).stop(true, true).slideUp(500);
      $(">a", this).removeClass("active");

  });
  });
  