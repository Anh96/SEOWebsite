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
    gsap.fromTo(".container--homepage .block-header__header-content .content-heading",{y:0, opacity:0, scale: 0}, {y: -10, opacity:1, duration: 1.5, scale: 1},);
    gsap.fromTo(".container--homepage .block-header__header-content .content-desc",{y: 0, opacity:0, scale: 0.5}, {y: -10, opacity:1, duration: 1.5, scale: 1});
    $(".container--homepage .block-header__header-content .button").each(function(index, value){
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
    // render imgs project 
    $.getJSON("../data/data.json", (data)=>{
        let htmls = data.projects.map((proj)=>{
            return `
                <div class="grid-item">
                    <div class="m-row">
                        <div class="s-row">
                            <img src="${proj.img}" alt="">
                        </div>
                    </div>
                </div>
            `
        })
        .join("");
        $(".block-main-content__project .grid-list").html(htmls);
    });
    // img galery in footer
    $.getJSON("../data/data.json", (data)=>{
        let htmls = data.projects.map((proj)=>{
            return `
                <div class="s-row">
                    <img src="${proj.img}" alt="" style="object-fit: contain;">
                </div>
            `
        })
        .join("");
        $(".block__block-footer .project-gallery .gallery-list").html(htmls);
    });
});