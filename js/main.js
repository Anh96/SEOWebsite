$(document).ready(function () {
        // Toggle Nav Bar
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
            // ----- Grid Item Animation ----//
                // gsap.fromTo(".grid-item", {opacity: 0, scale: 0}, {opacity:1, scale:1, duration: 1.5});
            
            // ---- Abous Us --- //
                gsap.fromTo(".block-main-content__about-us .coll--left", {y:150}, {y:0, duration: 1});
                gsap.fromTo(".block-main-content__about-us .coll--right", {scale:0.3, opacity:0.6}, {scale:1, opacity:1, duration: 1.5});
            // ---- Send Box--- //
            gsap.fromTo(".block-main-content__send-box .newsletter", {y:250}, {y:0, duration: 1.5,});
            
            
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
    // --------------------------------------------------   Render data    -------------------------------------------------------------------- //
    
            // render imgs project 
            $.getJSON("../data/data.json", (data)=>{
                let htmls = data.projects.map((proj)=>{
                    return `
                        <div class="grid-item" data-project = "${proj.project_field}">
                            <div class="m-row">
                                <a class="s-row">
                                    <img src="${proj.img}" alt="">
                                </a>
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
                        <a class="s-row" data-project = "${proj.project_field}">
                            <img src="${proj.img}" alt="" style="object-fit: contain;">
                        </a>
                    `
                })
                .join("");
                $(".block__block-footer .project-gallery .gallery-list").html(htmls);
            });
            // feedback slide
            $.getJSON("../data/data.json", (data)=>{
                let htmls = data.feedback.map((fdb)=>{
                    return `
                            <a class="grid-item" data-feedback = "${fdb.feedbackKey}">
                                <div class="m-row">
                                    <div class="s-row quote">"</div>
                                    <div class="s-row fbTxt">${fdb.feedbackDescription}</div>
                                    <div class="s-row block-flex">
                                        <div class="avatar">
                                            <img src="${fdb.feedbackUserInfo.avatar}" alt="" srcset="">
                                        </div>
                                        <di class="client-info">
                                            <div class="client-info__name">${fdb.feedbackUserInfo.name}</div>
                                            <div class="client-info__position">${fdb.feedbackUserInfo.profession}</div>
                                        </di>
                                    </div>
                                </div>
                            </a>
                        `
                })
                .join("");
                $(".block-main-content__feedback .feedback-banner").html(htmls);
                $(".block-main-content__feedback .feedback-banner .grid-item").each(function () { 
                    if($(this).index()%2 != 0){
                        $(this).addClass("active");
                    }
                });
                dragDropSlide();
            });

    // --------------------------------------------------   Responsive and Scrolling   -------------------------------------------------------------------- //
    
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
        // Feedback Item CSS
    }
    // --------------------------------------------------   Handle Event    -------------------------------------------------------------------- // 
    // --------------------   Filter    -------------------- //  
    filter_project($(".project-filter div"));
})
// variables

// function
// ---- Filter Function ----- //
function filter_project(btns){
    $(btns).each(function(btn){
        $(this).click(function (e) { 
            e.preventDefault();
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            $(".block-main-content__project .grid-list .grid-item").hide()
            if( $(this).index() == 0 ){
                $(".block-main-content__project .grid-list .grid-item").show();
                gsap.fromTo(".grid-item", {opacity: 0, scale: 0}, {opacity:1, scale:1, duration: 1.2});
            }
            else if($(this).index() == 1){
                $(".block-main-content__project .grid-list .grid-item").each(function(){
                    if($(this).data("project") == "design"){
                        $(this).show();
                        gsap.fromTo($(this), {opacity: 0, scale: 0}, {opacity:1, scale:1, duration: 1.2});
                    }
                })
            }
            else {
                $(".block-main-content__project .grid-list .grid-item").each(function(){
                    if($(this).data("project") == "development"){
                        $(this).show();
                        gsap.fromTo($(this), {opacity: 0, scale: 0}, {opacity:1, scale:1, duration: 1.2});
                    }
                })
            }
        });
    })
    
}
// handle feedback-banner
function dragDropSlide(){
    let fdbContainer = $(".block-main-content__feedback");
    let fdb = $(".block-main-content__feedback .feedback-banner");
    let fdbItems = $(".block-main-content__feedback .feedback-banner .grid-item");
    let fdbItemWidth = $(fdbItems).width();
    let fdbWidth = fdbItemWidth * $(fdbItems).length;
    let isDraging = false;
    let speed =0, touchStart = 0, touchX =0, x=0, scrollX =0, oldScrollX =0;
    // lerp
    const lerp = (v0, v1, t) => {
        return v0 * ( 1 - t ) + v1 * t
    }
    //   dispose
    const dispose = (scroll) => {
        gsap.set($(fdbItems), {
          x: (i) => {
            return i * fdbItemWidth + scroll
          },
          modifiers: {
            x: (x, target) => {
              const s = gsap.utils.wrap(-fdbItemWidth, fdbWidth - fdbItemWidth, parseInt(x))
              return `${s}px`
            }
          }
        })
    } 
    // dispose(0)
    // hanlde mouse event
    var dragStart = (e)=>{
        touchStart = e.clientX || e.touches[0].clientX
        isDraging = true;
        $(fdbItems).addClass("is-draging");
        // console.log(touchStart)
    }
    var dragMove = (e)=>{
        if(!isDraging){
            return;
        }
        touchX = e.clientX || e.touches[0].clientX
        scrollX += (touchX - touchStart) * 1.5;
        e.preventDefault();
        touchStart = touchX;
    }
    var dragEnd = ()=>{
        isDraging = false;
        $(fdbItems).removeClass("is-draging");
    }
    // listener

    $(fdb).on("mousedown", dragStart);
    $(fdb).on("mousemove", dragMove);
    $(fdb).on("mouseup", dragEnd);

    const render = () => {
        requestAnimationFrame(render)
        x = lerp(x, scrollX, .1)
        dispose(x)
        
        speed = x - oldScrollX
        oldScrollX = x
        
        gsap.to($(fdbItems), {
        //   skewX: - speed * .2,
          rotate: speed * .01,
          scale: 1 - Math.min(100, Math.abs(speed)) * 0.003
        })
      }
      render()
}
