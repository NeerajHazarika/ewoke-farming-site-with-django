$(document).ready(function(){
    $(".menu-bar").click(function(){
        $(".side-bar").css({"width":"30%","display":"block"});
    });
    $(".menu-bar-1").click(function(){
        $(".side-bar").css({"width":"40%","display":"block"});
    });
    $(".menu-bar-2").click(function(){
        $(".side-bar").css({"width":"60%","display":"block"});
    });
    $(".close").click(function(){
        $(".side-bar").css("width","0%");
    });
    $(window). scroll(function(){
        var scroll = $(window). scrollTop();
        if (scroll > 0) {
        $("#top-containt"). css("background" , "green");
        }
        else{
        $("#top-containt"). css("background" , "green");}})
    $('.parallax-window').parallax({imageSrc: 'desktop-1.jpg'});
});