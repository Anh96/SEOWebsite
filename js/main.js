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
                gsap.fromTo(document.querySelector(".c-1"), {y:100}, {y:0, duration: 1});
                // gsap.fromTo(".block-main-content__about-us .coll--right", {scale:0.3, opacity:0.6}, {scale:1, opacity:1, duration: 1.5});
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

    // --------------------------------------------------   Lazy Loading  -------------------------------------------------------------------- //
    lazyLoadFunction_AboutUs();
    lazyLoadFunction_SendBox();
    // lazyLoadFunction_Services();
    $(".c-1").lazy();

    // --------------------------------------------------   Render data    -------------------------------------------------------------------- //
    
            // render imgs
            $.ajax({
                url: "../data/data.json",
                success: function (data) {
                    // Projects
                    let projects = data.projects.map((proj)=>{
                        return `
                            <div class="grid-item" data-project = "${proj.project_field}">
                                <div class="m-row">
                                    <a class="s-row">
                                        <img src="${proj.img}" alt=""  loading = "lazy" class="lazy">
                                    </a>
                                </div>
                            </div>
                        `
                    })
                    .join("");
                    function lazyLoadFunction_Projects(){
                        if("IntersectionObserver" in window){
                            let observe = new IntersectionObserver(entries=>{
                                entries.forEach(entry=>{
                                    if(entry.isIntersecting){
                                        $(".block-main-content__project .grid-list").html(projects);
                                    }
                                    else{
                                        // $(".block-main-content__project .grid-list").empty();
                                    }
                                })
                            })
                            observe.observe(document.querySelector(".block-main-content__project .grid-list"));
                        }
                    }
                    lazyLoadFunction_Projects();
                    // Teams
                    let our_team = data.teams.map(team=>{
                        return `
                            <div class="grid-item">
                                <div class="m-row">
                                    <div class="buttons-group">
                                        <div class="button__facebook button--social">
                                            <i class="bi bi-facebook"></i>
                                        </div>
                                        <div class="button__instagram button--social">
                                            <i class="bi bi-instagram"></i>
                                        </div>
                                        <div class="button__twister button--social">
                                            <i class="bi bi-linkedin"></i>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <div class="member-info__member-name">
                                            <h2>${team.team_members_name}</h2>
                                        </div>
                                        <div class="member-info__member-job-title">${team.job_title}</div>
                                    </div>
                                </div>
                                <img src="${team.url}" alt="" loading= "lazy" class="lazy">
                            </div>
                        `
                    }).join("");
                    function lazyLoadFunction_OurTeam(){
                        if("IntersectionObserver" in window){
                            let observe = new IntersectionObserver(entries=>{
                                entries.forEach(entry=>{
                                    if(entry.isIntersecting){
                                        $(".block-main-content__our-team .grid-list").html(our_team);
                                    }
                                    else{
                                        $(".block-main-content__our-team .grid-list").empty();
                                    }
                                })
                            })
                            observe.observe(document.querySelector(".block-main-content__our-team"));
                        }
                    }
                    lazyLoadFunction_OurTeam();
            }});
           
            // img galery in footer
            $.getJSON("../data/data.json", (data)=>{
                let htmls = data.projects.map((proj)=>{
                    return `
                        <a class="s-row" data-project = "${proj.project_field}">
                            <img src="${proj.img}" alt="" style="object-fit: contain;" loading="lazy">
                        </a>
                    `
                })
                .join("");
                function lazyLoadFunction_FooterGallery(){
                    if("IntersectionObserver" in window){
                        let observe = new IntersectionObserver(entries=>{
                            entries.forEach(entry=>{
                                if(entry.isIntersecting){
                                    $(".block__block-footer .project-gallery .gallery-list").html(htmls);
                                }
                            })
                        })
                        observe.observe(document.querySelector(".block__block-footer .project-gallery"));
                    }
                }
                lazyLoadFunction_FooterGallery();
            });
            // testimonial slide
            $.getJSON("../data/data.json", (data)=>{
                let htmls = data.feedback.map((fdb)=>{
                    return `
                            <a class="grid-item" data-feedback = "${fdb.feedbackKey}">
                                <div class="m-row">
                                    <div class="s-row quote">"</div>
                                    <div class="s-row fbTxt">${fdb.feedbackDescription}</div>
                                    <div class="s-row block-flex">
                                        <div class="avatar">
                                            <img src="${fdb.feedbackUserInfo.avatar}" alt="${fdb.feedbackUserInfo}" srcset="" loading = "lazy">
                                        </div>
                                        <div class="client-info">
                                            <div class="client-info__name">${fdb.feedbackUserInfo.name}</div>
                                            <div class="client-info__position">${fdb.feedbackUserInfo.profession}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        `
                })
                .join("");
                function lazyLoadFunction_Testimonial(){
                    if("IntersectionObserver" in window){
                        let observe = new IntersectionObserver(entries=>{
                            entries.forEach(entry=>{
                                if(entry.isIntersecting){
                                    // Display "grid-item"
                                    $(".block-main-content__feedback .feedback-banner").html(htmls);
                                    $(".block-main-content__feedback .feedback-banner .grid-item").eq(0).addClass("active");
                                    const items = document.querySelectorAll(".block-main-content__feedback .feedback-banner .grid-item");
                                    const fdb = $(".block-main-content__feedback .feedback-banner");
                                    const origX_postion = $(fdb).offset().left;
                                    let currActive = 0; 
                                    // console.log($(fdb).offset().left+ $(fdb).width())
                                    setInterval(() => {
                                        // Auto toggle class "active"
                                        $(items).each(function(){
                                            $(this).removeClass("active");
                                        })
                                        currActive++;
                                        if(currActive>$(items).length){
                                            currActive = 1;
                                        }
                                        $(items).eq(currActive-1).addClass("active");
                                        // Auto show
                                        let x =  $(items).width()*(currActive-1) - origX_postion*(currActive-1) - origX_postion;
                                        if(x > 621){
                                            x = 665.5;
                                        }
                                        
                                        $(fdb).offset({left: -x});
                                        // console.log(x,$(fdb).offset().left)
                                    }, 2000);
                                }
                            })
                        })
                        observe.observe(document.querySelector(".block-main-content__feedback .feedback-banner"));
                    }
                }
                // $(".block-main-content__feedback .feedback-banner .grid-item").eq(0).addClass("active");

                lazyLoadFunction_Testimonial();
                draggableSlide();
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

// -----------------------------  function ---------------------------------------//
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
// handle Testimonial slides.
function draggableSlide(){
    let isDraggable = false;
    let  x, scrollX;
    const feedbackContainer = $(".block-main-content__feedback");
    const feedbackBanner = $(".block-main-content__feedback .feedback-banner");
    $(feedbackBanner).mousedown(function (e) { 
        $(this).css("cursor", "grabbing")
        isDraggable = true;
        x = e.pageX - $(feedbackBanner).offset().left;
        // checkBounding()
    });
    $(feedbackBanner).mouseup(function () { 
        isDraggable = false;
        $(this).css("cursor", "grab");
        checkBounding()

    });
    $(feedbackBanner).mousemove(function (e) { 
        if(!isDraggable) return;
        e.preventDefault();
        scrollX = e.pageX - x;
        $(feedbackBanner).offset({left: scrollX});
        // checkBounding()
    });
    function checkBounding(){
        const containerRect = $(feedbackContainer).offset();
        const feedbackRect = $(feedbackBanner).offset();
        if(parseInt($(feedbackBanner).offset().left) > 124.5){
            $(feedbackBanner).offset({left: -124.5})
        }
        if(parseInt($(feedbackBanner).offset().left) < -551){
            $(feedbackBanner).offset({left: -660})
        }
    }
}

// --------------------------------------------------   Lazy Loading  -------------------------------------------------------------------- //
function loading(img, url){
    // const aboutUs_imgURL = $('[about-us_src]').attr("about-us_src");
    $(img).attr("src", url);
    $(img).removeAttr(url);
}
let lazyLoadFunction_AboutUs = function(){
    if("IntersectionObserver" in window){
        var observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    loading(document.querySelector(".block-main-content__about-us img"), $('[about-us_src]').attr("about-us_src"));
                    gsap.fromTo(".block-main-content__about-us .coll--right", {scale:0.3, opacity:0.6}, {scale:1, opacity:1, duration: 1.5});
                }
                else{
                }
            })
        },{
            // threshold: 0.85
        })
        observer.observe(document.querySelector(".block-main-content__about-us"))
    }
}

let lazyLoadFunction_SendBox = function(){
    if("IntersectionObserver" in window){
        var observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    loading(entry.target, $('[send-box_src]').attr("send-box_src"));
                }
                else{
                }
            })
        },{
            // threshold: 0.85
        })
        observer.observe(document.querySelector(".block-main-content__send-box img"))
    }
}
function lazyLoadFunction_Services(){
    if("IntersectionObserver" in window){
        let observe = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.remove("notActive");
                }
                else{
                    entry.target.classList.add("notActive");
                }
            })
        })
        document.querySelectorAll(".service-item").forEach(serviceItem=>{
            observe.observe(serviceItem);
        })
    }
}

