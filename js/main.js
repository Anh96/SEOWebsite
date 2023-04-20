$(document).ready(function () {
            $(".navbar-list__item").each(function(index, value){
                if(index < 5){
                    $(this).hover(function (e) {
                        $(this).toggleClass("tab-active");
                    }
                );
                }
            })
    // -------------------------------------------------   Transition / Animation  ----------------------------------------------------------- //
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
            // ----- Service-items Animation ----//
                gsap.fromTo(".service-item", {scale: 0, opacity: 0.1}, {scale:1, opacity:1, duration: 1});
            
            // ---- Abous Us --- //
                // gsap.fromTo(".block-main-content__about-us .coll--left", {y:150}, {y:0, duration: 1, iteration:1});
                // gsap.fromTo(".block-main-content__about-us .coll--right", {scale:0.3, opacity:0.6}, {scale:1, opacity:1, duration: 1.5});
            // Init WOW 
            new WOW().init();
            
    // --------------------------------------------------   Scrolling    -------------------------------------------------------------------- //

        // ---------------------- Change CSS ------------------------- //
            $(window).scroll(function () { 
                if($(window).scrollTop()==0){
                    // CSS
                    $(".header-section__header-top").css({
                        "background-color" : "unset",
                        "padding": "0px 20px"
                    });
                    $(".header-section__header-top div").css("color", "white");
                    $(".navbar-list .navbar-list__item a").css("color", "white");
                    $(".navbar-list .navbar-list__item .sub-menu a").css("color", "#2124B1");
                    // --------------------------- Logo CSS Start------------------------------- //

                        $(".header-top__logo div i").css("color", "white")

                    // ---------------------------Logo CSS End --------------------------------- //
                    
                    // ----- .navbar-list .navbar-list__item .sub-menu .sub-menu__item CSS ---- //

                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").css("color", "#2124B1");
                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").mouseover(function () { 
                            $(this).css("color", "#4777F5");
                        });
                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").mouseout(function () { 
                            $(this).css("color", "#2124B1");
                        });
                    // ----------------------------------------------------------------------- //
                    $(".navbar-list .navbar-list__item i").css("color", "white");
                    $(".navbar-list").css("color", "white");
                    $(".button__go-top").css("display", "none");
                }
                if($(window).scrollTop()>0){
                    // CSS
                    $(".header-section__header-top").css({
                        "background-color" : "white",
                        "box-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    });
                    $(".header-section__header-top div").css("color", "#2124B1");
                    $(".navbar-list .navbar-list__item a").css("color", "#2124B1");
                    $(".navbar-list .navbar-list__item i").css("color", "#2124B1");
                    $(".navbar-list .navbar-list__item .sub-menu a").css("color", "#2124B1");
                    // --------------------------- Logo -------------------------------------------- //

                        $(".header-top__logo div i").css("color", "#2124B1")

                    // ---------------------------End Logo CSS ------------------------------------ //

                    // ----- .navbar-list .navbar-list__item .sub-menu .sub-menu__item CSS ---- //
                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").css("color", "#2124B1");
                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").mouseover(function () { 
                            $(this).css("color", "#4777F5");
                        });
                        $(".navbar-list .navbar-list__item .sub-menu .sub-menu__item").mouseout(function () { 
                            $(this).css("color", "#2124B1");
                        });
                    // ----------------------------------------------------------------------- //
                    $(".button__go-top").css("display", "block");
                }
            });
    // --------------------------------------------------   Render Imgs    -------------------------------------------------------------------- //
    
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

    // --------------------------------------------------   Responsive    -------------------------------------------------------------------- //
    
    if(window.innerWidth >= 1240){
        $(".header-section__header-top").css({
            "max-width": "1200px",
            "margin" : "0 auto",
        });
        $(window).scroll(function(){
            if($(window).scrollTop() == 0){
                $(".header-section__header-top").css({
                    "max-width": "1200px",
                    "margin" : "0 auto",
                });
            }
            if($(window).scrollTop()  > 0){
                $(".header-section__header-top").css({
                    "max-width": "100%",
                });
            }
        })
    }
    if(window.innerWidth < 995){
        $(".header-section__header-top").css({
            "max-width": "100%",
        });
        $(".header-top__navbar-menu-icon").click(function(){
            $(".header-top__navbar").toggle();
            $(".navbar-list").css({
                "width" : "100%",
                "background-color" : "white",
            });
        })
        $(window).scroll(function(){
            if($(window).scrollTop() == 0){
                $(".header-section__header-top").css("background-color", "white");
                $(".header-section__header-top div").css("color", "#2124B1");
                $(".navbar-list .navbar-list__item a").css("color", "#2124B1");
                $(".navbar-list .navbar-list__item .sub-menu a").css("color", "#2124B1");
                $(".header-top__logo div i").css("color", "#2124B1");
                $(".navbar-list .navbar-list__item i").css("color", "#2124B1");
            }
        })
    }
})