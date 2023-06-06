$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 1500) 
        $(".scrolling").fadeIn();
        else
        $(".scrolling").fadeOut(400);
    })
})