$(function() {
    $(".categories").mouseenter(function() {
    $("ul.category1").toggle();
    });
    $(".categories li ul").hide();
    $(".categories li").hover(function() {
        $(">ul:not(:animated)", this).stop(true, true).slideDown("fast");
        $(">a", this).addClass("active");
    }, function() {
        $(">ul:not(:animated)", this).stop(true, true).slideUp("fast");
        $(">li", this).removeClass("active");
  });
});