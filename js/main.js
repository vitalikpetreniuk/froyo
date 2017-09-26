$(function() {

    if($('.fr-slider').length)
    {
        $('.fr-slider').owlCarousel({
            nav: true,
            loop:true,
            margin:30,
            items: 1
        });
    }

    if($('.fr-pb-slider').length)
    {
        $('.fr-pb-slider').owlCarousel({
            nav: true,
            loop:true,
            margin:30,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            autoHeight: true
        });
    }


    if($('.fr-ice-slider').length)
    {
        $('.fr-ice-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.fr-ice-slider-nav',
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }]
        });
        $('.fr-ice-slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.fr-ice-slider',
            focusOnSelect: true,
            centerMode: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1701,
                    settings: {
                        slidesToShow: 6
                    }
                },
                {
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    if($('.fr-select-menu').length)
    {
        $('.fr-select-menu').selectmenu();
    }

    if($('.fr-select-s').length)
    {
        $('.fr-select-s').selectmenu();
    }

    if($('.fr-checkbox').length)
    {
        $('.fr-checkbox').iCheck();
    }

    if($('.fr-c-radio').length)
    {
        $('.fr-c-radio').iCheck();
    }

    if($('.fr-radio').length)
    {
        $('.fr-radio').iCheck({
            radioClass: 'fr-iradio'
        });
    }

    if($('.fr-cs-radio').length)
    {
        $('.fr-cs-radio').iCheck();
    }

    if($('.fr-d-checkbox').length)
    {
        $('.fr-d-checkbox').iCheck();
    }

    if($('.fr-tasks-list').length)
    {
        $('.fr-tasks-list').slimScroll({
            height: '464px',
            railVisible: true,
            railOpacity: 0.1,
            alwaysVisible: true
        });
    }

    if($('.fr-comments-list').length)
    {
        $('.fr-comments-list').slimScroll({
            height: '265px',
            railVisible: true,
            railOpacity: 0.1,
            alwaysVisible: true
        });
    }

    if($('.fr-style-slider').length)
    {
        $('.fr-style-slider').slider({
            min: 1,
            max: 7,
            value: 4,
            animate:"slow"
        });
    }

    $('.fr-slider-category .owl-dots').appendTo($('.fr-slider-category-block'));

    if($('.fr-section-nav a').length){
        $('.fr-section-nav a').on('click', function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);
            return false;
        });
    }

    if (Modernizr.touch){
        $('.fr-avatar').on('click', function(){
            $(this).toggleClass('active');
            $('.fr-usermenu-dropdown').toggleClass('active');
            if($('.fr-usermenu-dropdown').hasClass('active'))
            {
                $('.fr-shadow').addClass('active');
            }
            else if($('.fr-header-m').is(':visible'))
            {
                $('.fr-shadow').addClass('active');
            }
            else
            {
                $('.fr-shadow').removeClass('active');
            }
        });
    }
    else
    {
        $('.fr-avatar').mouseenter(function(){
            $(this).addClass('active');
            $('.fr-usermenu-dropdown').addClass('active');
        }).mouseleave(function(){
            $(this).removeClass('active');
            $('.fr-usermenu-dropdown').removeClass('active');
        });
        $('.fr-avatar:after').mouseenter(function(){
            $(this).addClass('active');
            $('.fr-usermenu-dropdown').addClass('active');
        }).mouseleave(function(){
            $(this).removeClass('active');
            $('.fr-usermenu-dropdown').removeClass('active');
        });
        $('.fr-usermenu-dropdown').mouseenter(function(){
            $(this).addClass('active');
            $(this).siblings('.fr-avatar').addClass('active');
        }).mouseleave(function(){
            $(this).removeClass('active');
            $(this).siblings('.fr-avatar').removeClass('active');
        });
    }

    $('.fr-notification > button').on('click', function(){
        $(this).toggleClass('open');
        $('.fr-notification-dropdown').toggleClass('active');
        if($('.fr-notification-dropdown').hasClass('active'))
        {
            $('.fr-shadow').addClass('active');
        }
        else
        {
            $('.fr-shadow').removeClass('active');
        }
    });

    $('html').on('mouseup', function (e) {
        var container = $(".fr-notification");

        if (container.has(e.target).length === 0){
            $(".fr-notification button.open").trigger('click');
        }
    });

    $('.fr-scroll-top').on('click', function(){
        $('html,body').animate({scrollTop: 0}, 700);
    });

    $('.fr-open-menu').on('click', function(){
        $('.fr-header-m').toggle('fast');
        $('.fr-shadow').addClass('active');
    });

    $('.fr-next').on('click', function(){
        $(this).addClass('fr-hidden');
        $(this).closest('.panel').next().find('.panel-title a').trigger('click');
    });

    $('.panel-heading a').on('click', function () {
        if($(this).closest('.panel').find('.panel-collapse').hasClass('in')){
            $(this).closest('.panel').prev().find('.fr-next').removeClass('fr-hidden');
        }else{
            $(this).closest('.panel').prev().find('.fr-next').addClass('fr-hidden');
        }
    });

    $('.fr-header-m-in > div:first button').on('click', function(){
        $('.fr-header-m').toggle('fast');
        $('.fr-shadow').removeClass('active');
    });

    $('.fr-dropdown button').on('click', function(){
        $(this).siblings().toggle('fast');
    });

    $('.fr-upgrate button').on('click', function(){
        $('.fr-upgrate').toggle('fast');
    });

    $('.fr-mob-nav button:first-child').on('click', function(){
        $(this).closest('.fr-tabs').find('.nav li.active a').parent().prev().find('a').trigger('click');
    });

    $('.fr-mob-nav button:last').on('click', function(){
        $(this).closest('.fr-tabs').find('.nav li.active a').parent().next().find('a').trigger('click');
    });

    $('.fr-mob-nav button').on('click', function(){
        var tText = $(this).closest('.fr-tabs').find('.nav li.active a').text();
        console.log(tText);
        $(this).siblings('span').text(tText);
    });

    $('.fr-task-top div:first-child').on('click', function(){
        $(this).closest('.fr-task').find('.fr-tasks-comments button').trigger('click');
    });

    $('.fr-btn-icon-ab').on('click', function(){
        $('.fr-ch-hidden').slideDown('fast');
    });

    $('.fr-radio').on('ifChecked',function(){
        $('.fr-plan-c-item').removeClass('active');
        $(this).closest('.fr-plan-c-item').addClass('active');
    });

    $('.fr-plan-c-item').on('click', function () {
        $(this).find('.fr-pc-radio:first-child .iCheck-helper').trigger('click');
    });

    if ($(window).height() < 768) {
        $('.fr-modal').addClass('active');
    }
    else {
        $('.fr-modal').removeClass('active');
    }

    $(window).on('resize', function () {

        if ($(window).height() < 768) {
            $('.fr-modal').addClass('active');
        }
        else {
            $('.fr-modal').removeClass('active');
        }
    });

    $('.fr-long-block').each(function(){
        var $bl = $(this),
            $th = $(this).children('div'),
            blW = $bl.outerWidth(),
            blSW = $bl[0].scrollWidth,
            wDiff = (blSW / blW) - 1, // widths difference ratio
            mPadd = 0, // Mousemove Padding
            damp = 100, // Mousemove response softness
            mX = 20, // Real mouse position
            mX2 = 0, // Modified mouse position
            posX = 0,
            mmAA = blW - (mPadd * 2), // The mousemove available area
            mmAAr = (blW / mmAA); // get available mousemove fidderence ratio

        $bl.mousemove(function (e) {
            mX = e.pageX - this.offsetLeft;
            mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
        });

        setInterval(function () {
            posX += (mX2 - posX) / damp;
            $th.css({
                marginLeft: -posX * wDiff
            });
        }, 10);
    });

});





var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    images = images||{};
    ss = ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.Froyo_animation_main_v4();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    fnStartAnimation();
}