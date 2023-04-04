$(document).ready(function () {
    // if($(window).width()>=1240){
    //     $(".container").addClass("container--xxl");
    // }
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
                // over
                $(this).addClass("tab-active");
                $(".navbar-list__item .tab-active").removeClass(".tab-active");
            }, function () {
                // out
                // $(".navbar-list__item.tab-active").removeClass(".tab-active");
            }
        );
        }
    })
});