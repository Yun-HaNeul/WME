$(function(){
    // main
    function over(){
        $(".sec1").addClass("active");
    }
    function main(){
        setTimeout(over,3000);
    }
    function flow(){
        $(".sloganWrap").css({"overflow":"visible"});
    }
    function main2(){
        if($(window).width() < 1200){
            setTimeout(flow,8000);
        }else {
            setTimeout(flow,9000);
        }
    }
    function partnerFunc(){
        $(".mainBox").addClass("active");
    }
    function partner(){
        setTimeout(partnerFunc,15000);
    }
    main();
    main2();
    partner();

    $(window).resize(function(){
        main2();
    })

    // menu Scroll
    const menu = $(".nav_list li");
    const contents = $("section");
    menu.eq(0).addClass("active");
    menu.click(function(e){
        e.preventDefault();
        let idx = $(this).index();
        let tt = contents.eq(idx).offset().top;

        $("html, body").animate({scrollTop:tt},800);

        menu.removeClass("active");
        $(this).addClass("active");
    })//click

    $(window).scroll(function(){
        let $sct = $(this).scrollTop();
        console.log($sct);
        contents.each(function(i){
            let tg = $(this);
            console.log(tg.offset().top-300);
            if(tg.offset().top - 300 < $sct){
                menu.removeClass("active");
                menu.eq(i).addClass("active");
                tg.addClass("active");
            }   
        })
        if($sct >= 2100 || $sct >= 1600){
            $(".header, .nav").addClass("active");
        }else {
            $(".header, .nav").removeClass("active");
        }
    })//scroll
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // topBtn
    const top = $(".f_topBtn");

    top.click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0},800);
    })
})//ready end