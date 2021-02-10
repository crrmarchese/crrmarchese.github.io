//Navigation active link
var url = window.location.href.substr(window.location.href
  .lastIndexOf("/")+1);
       $(".nav.navbar-nav li a").each(function(){
            if($(this).attr("href") == url || $(this).attr("href") == '' )
            $(this).addClass("active");
       })


//Portfolio filter active buttons 
$(".filter-button-group button").on("click", function(){
    $("button").removeClass("active");
    $(this).addClass("active");
});
