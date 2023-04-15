$(document).ready(function () {
    $(window).scroll(function () { 
        if($(window).scrollTop()==0){
            $(".header-section__header-top div").css("color", "white");
            $(".navbar-list").css("color", "white");
            $(".button__go-top").css("display", "none");
        }
        if($(window).scrollTop()>0){
            $(".header-section__header-top div").css("color", "black");
            $(".navbar-list").css("color", "white");
            $(".header-section__header-top").css("width", "100%");
            $(".button__go-top").css("display", "block");
        }
    });
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
    // $(".block-main-content__project .grid-list").css({
    //     "position" : "relative",
    //     "display" : "flex",
    //     "flex-wrap": "wrap",
    //     "flex-direction" : "row",
    //     "width" : "100%",
    //     "height" : "fit-content"
    // })
    // $(".block-main-content__project .grid-item").css({
    //     "width" : "calc(100%/3)",
    //     "height" : "350px",
    //     "position" : "relative"

    // })
    // $(".block-main-content__project .s-row").css({
    //     "width" : "100%",
    //     "height" : "100%"
    // })
    // $(".block-main-content__project img").css({
    //     "width" : "100%",
    //     "height" : "100%",
    //     "object-fit" : "contain"
    // })
    // $.getJSON("../data/data.json", function (data) {
    //        for(let i of data){
    //             for(let j of i.products){
    //                 $(".block-main-content__project .grid-item").append(
    //                     `
    //                         <div class="m-row">
    //                             <div class="s-row">
    //                                 <img src="${j.img}" alt="${j.img}">
    //                             </div>
    //                         </div>
    //                     `
    //                 )
    //             }
    //        }
    //     }
    // );
});
