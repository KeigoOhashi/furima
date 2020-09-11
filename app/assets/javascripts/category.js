$(function() {
    $("li.categories").hover(function() {
    $("ul.category__parent").toggle();
    });
    $(".categories li ul").hide();
    $(".categories li").hover(function() {
        $(">ul:not(:animated)", this).stop(true, true).slideDown("80");
        $(">a", this).addClass("active");
    }, function() {
        $(">ul:not(:animated)", this).stop(true, true).slideUp("80");
        $(">a", this).removeClass("active");
  });
});


