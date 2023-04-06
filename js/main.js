$(document).ready(function () {
    if($(window).scrollTop()==0){
        $(".header-section__header-top div").css("color", "white");
        $(".navbar-list").css("color", "white");
    }
    if($(window).scrollTop()>0){
        $(".header-section__header-top div").css("color", "black");
        $(".navbar-list").css("color", "white");
        $(".header-section__header-top").css("width", "100%");
    }
    $(".navbar-list__item").each(function(index, value){
        if(index < 5){
            $(this).hover(function (e) {
                $(this).toggleClass("tab-active");
            }
        );
        }
    })
    gsap.fromTo(".block-header__header-content .content-heading",{y:0, opacity:0, scale: 0}, {y: -10, opacity:1, duration: 1.5, scale: 1},);
    gsap.fromTo(".block-header__header-content .content-desc",{y: 0, opacity:0, scale: 0.5}, {y: -10, opacity:1, duration: 1.5, scale: 1});
    $(".block-header__header-content .button").each(function(index, value){
       if(index==0){
            gsap.fromTo($(this),{x: -20}, {x: 0, duration:1});
       }
       if(index==1){
           gsap.fromTo($(this),{x: 50}, {x: 0, duration:1});
        }
    })
    // service section animation
    // service-items animation
    gsap.fromTo(".service-item", {scale: 0, opacity: 0.1}, {scale:1, opacity:1, duration: 1.5});
    // readmore button animation 
    $(".service-item").hover(function(){
        // gsap.fromTo((".button"), {width: "0px", opacity: 0.1, backgroundColor: "none"}, {width: "auto", opacity:1, backgroundColor: "white", duration: 1.5})
        // console.log($(this).children($(".button")));
    })
    
});