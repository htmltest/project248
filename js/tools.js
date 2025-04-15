$(document).ready(function() {

    $('.land-washing-welcome-btn a, .land-washing-menu-item a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 0;
            if ($('header').length == 1) {
                curOffset = $('header').outerHeight();
            }
            $('html, body').scrollTop(curBlock.offset().top - curOffset);
        }
        e.preventDefault();
    });

    var swiper = new Swiper('.land-washing-catalogue-list .swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 171,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: $('.land-washing-catalogue-list .swiper-button-next')[0],
            prevEl: $('.land-washing-catalogue-list .swiper-button-prev')[0],
        },
        pagination: {
            el: $('.land-washing-catalogue-list .swiper-pagination')[0],
            type: 'fraction',
        }
    });

    if ($('header').length == 1) {
        $('.land-washing-wrapper').addClass('full');
    }
});

var landWashingTechSwiper = null;

$(window).on('load resize', function() {

    $('.land-washing-techs-list').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landWashingTechSwiper.destroy();
        }
        if ($(window).width() < 1168) {
            landWashingTechSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                navigation: {
                    nextEl: $('.land-washing-techs-list .swiper-button-next')[0],
                    prevEl: $('.land-washing-techs-list .swiper-button-prev')[0],
                },
                pagination: {
                    el: curSlider.find('.swiper-pagination')[0],
                    clickable: true
                }
            });
        }
    });

});

$(window).on('load resize scroll', function() {

    $('.land-washing-design-container').each(function() {
        var windowScroll = $(window).scrollTop();
        var windowWidth = $(window).width();
        var designTop = $('.land-washing-design-container').offset().top;
        if ($('header').length == 1) {
            designTop = designTop - $('header').outerHeight();
        }
        var designHeight = $('.land-washing-design-container').outerHeight();
        if (windowScroll >= designTop) {
            $('.land-washing-design-container').addClass('fixed');
            if (windowScroll > designTop + designHeight * 0.8) {
                $('.land-washing-design-bg, .land-washing-design-title, .land-washing-design-screen').css({'margin-top': designTop + designHeight * 0.8 - windowScroll});
            } else {
                $('.land-washing-design-bg, .land-washing-design-title, .land-washing-design-screen').css({'margin-top': 0});
            }
        } else {
            $('.land-washing-design-container').removeClass('fixed');
            $('.land-washing-design-bg, .land-washing-design-title, .land-washing-design-screen').css({'margin-top': 0});
        }

        var animateStart = designTop;
        var animateStop = designTop + designHeight * 0.8;
        var animateSize = (animateStop - animateStart) * 0.2;
        var animateHalfSize = animateSize * 0.5;

        var animateScreen1Start = animateStart;
        var animateScreen1Stop = animateStart + animateSize / 2;
        var animateScreen2Start = animateStart + animateSize;
        var animateScreen2Stop = animateStart + animateSize * 1.5;
        var animateScreen3Start = animateStart + animateSize * 2;
        var animateScreen3Stop = animateStart + animateSize * 2.5;
        var animateScreen4Start = animateStart + animateSize * 3;
        var animateScreen4Stop = animateStart + animateSize * 4;
        var animateScreen5Start = animateStart + animateSize * 4;
        var animateScreen5Stop = animateStart + animateSize * 5;

        var activeScreen = 0;
        if (windowScroll >= animateScreen1Start) {
            activeScreen = 1;
            if (windowScroll >= animateScreen2Start) {
                activeScreen = 2;
                if (windowScroll >= animateScreen3Start) {
                    activeScreen = 3;
                    if (windowScroll >= animateScreen4Start) {
                        activeScreen = 4;
                        if (windowScroll >= animateScreen5Start) {
                            activeScreen = 5;
                        }
                    }
                }
            }
        }
        switch(activeScreen) {
            case 1:
                var startTitle1Hide = animateScreen1Start;
                var stopTitle1Hide = animateScreen1Start + (animateScreen1Stop - animateScreen1Start) / 2;
                var startTitle2Show = animateScreen1Start + (animateScreen1Stop - animateScreen1Start) / 2;
                var stopTitle2Show = animateScreen1Stop;
                if (windowScroll >= startTitle1Hide) {
                    var title1HidePercent = (windowScroll - startTitle1Hide) / (stopTitle1Hide - startTitle1Hide);
                    if (title1HidePercent < 0) {
                        title1HidePercent = 0;
                    }
                    if (title1HidePercent > 1) {
                        title1HidePercent = 1;
                    }
                    $('.land-washing-design-title-1').css({'opacity': 1 - title1HidePercent});
                    if (windowScroll >= startTitle2Show) {
                        var title2ShowPercent = (windowScroll - startTitle2Show) / (stopTitle2Show - startTitle2Show);
                        if (title2ShowPercent < 0) {
                            title2ShowPercent = 0;
                        }
                        if (title2ShowPercent > 1) {
                            title2ShowPercent = 1;
                        }
                        $('.land-washing-design-title-2').css({'opacity': title2ShowPercent});
                    } else {
                        $('.land-washing-design-title-2').css({'opacity': 0});
                    }
                }
                $('.land-washing-design-title-3').css({'opacity': 0});
                $('.land-washing-design-title-4').css({'opacity': 0});
                $('.land-washing-design-title-5').css({'opacity': 0});

                if (windowScroll >= animateScreen1Start) {
                    var screen1Percent = (windowScroll - animateScreen1Start) / (animateScreen1Stop - animateScreen1Start);
                    if (screen1Percent < 0) {
                        screen1Percent = 0;
                    }
                    if (screen1Percent > 1) {
                        screen1Percent = 1;
                    }
                    $('.land-washing-design-screen-1 img').css({'transform': 'scale(' + (2.5 * screen1Percent + 1) + ')', 'opacity': 1});
                    $('.land-washing-design-screen-3 img').css({'transform': 'scale(' + (2.5 * screen1Percent + 1) + ')', 'opacity': 0});
                }

                $('.land-washing-design-screen-4 img').css({'opacity': 0});
                $('.land-washing-design-screen-5 img').css({'opacity': 0});

                break;
            case 2:
                $('.land-washing-design-title-1').css({'opacity': 0});
                var startTitle2Hide = animateScreen2Start;
                var stopTitle2Hide = animateScreen2Start + (animateScreen2Stop - animateScreen2Start) / 2;
                var startTitle3Show = animateScreen2Start + (animateScreen2Stop - animateScreen2Start) / 2;
                var stopTitle3Show = animateScreen2Stop;
                if (windowScroll >= startTitle2Hide) {
                    var title2HidePercent = (windowScroll - startTitle2Hide) / (stopTitle2Hide - startTitle2Hide);
                    if (title2HidePercent < 0) {
                        title2HidePercent = 0;
                    }
                    if (title2HidePercent > 1) {
                        title2HidePercent = 1;
                    }
                    $('.land-washing-design-title-2').css({'opacity': 1 - title2HidePercent});
                    if (windowScroll >= startTitle3Show) {
                        var title3ShowPercent = (windowScroll - startTitle3Show) / (stopTitle3Show - startTitle3Show);
                        if (title3ShowPercent < 0) {
                            title3ShowPercent = 0;
                        }
                        if (title3ShowPercent > 1) {
                            title3ShowPercent = 1;
                        }
                        $('.land-washing-design-title-3').css({'opacity': title3ShowPercent});
                    } else {
                        $('.land-washing-design-title-3').css({'opacity': 0});
                    }
                }
                $('.land-washing-design-title-4').css({'opacity': 0});
                $('.land-washing-design-title-5').css({'opacity': 0});

                if (windowScroll >= animateScreen2Start) {
                    var screen2Percent = (windowScroll - animateScreen2Start) / (animateScreen2Stop - animateScreen2Start);
                    if (screen2Percent < 0) {
                        screen2Percent = 0;
                    }
                    if (screen2Percent > 1) {
                        screen2Percent = 1;
                    }
                    $('.land-washing-design-screen-1 img').css({'transform': 'scale(' + (2.5 * (1 - screen2Percent) + 1) + ')', 'opacity': 1});
                    $('.land-washing-design-screen-3 img').css({'transform': 'scale(' + (2.5 * (1 - screen2Percent) + 1) + ')', 'opacity': screen2Percent});
                }

                $('.land-washing-design-screen-4 img').css({'opacity': 0});
                $('.land-washing-design-screen-5 img').css({'opacity': 0});

                break;

            case 3:
                $('.land-washing-design-title-1').css({'opacity': 0});
                $('.land-washing-design-title-2').css({'opacity': 0});
                var startTitle3Hide = animateScreen3Start;
                var stopTitle3Hide = animateScreen3Start + (animateScreen3Stop - animateScreen3Start) / 2;
                var startTitle4Show = animateScreen3Start + (animateScreen3Stop - animateScreen3Start) / 2;
                var stopTitle4Show = animateScreen3Stop;
                if (windowScroll >= startTitle3Hide) {
                    var title3HidePercent = (windowScroll - startTitle3Hide) / (stopTitle3Hide - startTitle3Hide);
                    if (title3HidePercent < 0) {
                        title3HidePercent = 0;
                    }
                    if (title3HidePercent > 1) {
                        title3HidePercent = 1;
                    }
                    $('.land-washing-design-title-3').css({'opacity': 1 - title3HidePercent});

                    $('.land-washing-design-screen-1 img').css({'opacity': (1 - title3HidePercent)});
                    $('.land-washing-design-screen-3 img').css({'opacity': (1 - title3HidePercent)});
                    if (windowScroll >= startTitle4Show) {
                        var title4ShowPercent = (windowScroll - startTitle4Show) / (stopTitle4Show - startTitle4Show);
                        if (title4ShowPercent < 0) {
                            title4ShowPercent = 0;
                        }
                        if (title4ShowPercent > 1) {
                            title4ShowPercent = 1;
                        }
                        $('.land-washing-design-title-4').css({'opacity': title4ShowPercent});
                        $('.land-washing-design-screen-4 img').css({'opacity': title4ShowPercent});
                    } else {
                        $('.land-washing-design-title-4').css({'opacity': 0});
                        $('.land-washing-design-screen-4 img').css({'opacity': 0});
                    }
                }

                break;

            case 4:
                $('.land-washing-design-title-1').css({'opacity': 0});
                $('.land-washing-design-title-2').css({'opacity': 0});
                $('.land-washing-design-title-3').css({'opacity': 0});
                $('.land-washing-design-screen-1 img').css({'transform': 'scale(1)', 'opacity': 0});
                $('.land-washing-design-screen-3 img').css({'transform': 'scale(1)', 'opacity': 0});
                var startTitle4Hide = animateScreen4Start;
                var stopTitle4Hide = animateScreen4Stop;
                if (windowScroll >= startTitle4Hide) {
                    var title4HidePercent = (windowScroll - startTitle4Hide) / (stopTitle4Hide - startTitle4Hide);
                    if (title4HidePercent < 0) {
                        title4HidePercent = 0;
                    }
                    if (title4HidePercent > 1) {
                        title4HidePercent = 1;
                    }
                    $('.land-washing-design-title-4').css({'opacity': 1 - title4HidePercent});

                    $('.land-washing-design-screen-4 img').css({'opacity': (1 - title4HidePercent)});

                    $('.land-washing-design-title-5').css({'opacity': 0});
                    $('.land-washing-design-screen-5 img').css({'opacity': 0});
                }

                break;

            case 5:
                $('.land-washing-design-title-1').css({'opacity': 0});
                $('.land-washing-design-title-2').css({'opacity': 0});
                $('.land-washing-design-title-3').css({'opacity': 0});
                $('.land-washing-design-title-4').css({'opacity': 0});
                $('.land-washing-design-screen-1 img').css({'transform': 'scale(1)', 'opacity': 0});
                $('.land-washing-design-screen-3 img').css({'transform': 'scale(1)', 'opacity': 0});
                $('.land-washing-design-screen-4 img').css({'opacity': 0});

                var startTitle5Show = animateScreen5Start;
                var stopTitle5Show = animateScreen5Stop;
                if (windowScroll >= startTitle5Show) {
                    var title5ShowPercent = (windowScroll - startTitle5Show) / (stopTitle5Show - startTitle5Show);
                    if (title5ShowPercent < 0) {
                        title5ShowPercent = 0;
                    }
                    if (title5ShowPercent > 1) {
                        title5ShowPercent = 1;
                    }
                    $('.land-washing-design-title-5').css({'opacity': title5ShowPercent});
                    $('.land-washing-design-screen-5 img').css({'opacity': title5ShowPercent});
                }

                break;

            default:
                $('.land-washing-design-title-1').css({'opacity': 1});
                $('.land-washing-design-title-2').css({'opacity': 0});
                $('.land-washing-design-title-3').css({'opacity': 0});
                $('.land-washing-design-title-4').css({'opacity': 0});
                $('.land-washing-design-title-5').css({'opacity': 0});

                $('.land-washing-design-screen-1 img').css({'transform': 'scale(1)', 'opacity': 1});
                $('.land-washing-design-screen-3 img').css({'transform': 'scale(1)', 'opacity': 0});
                $('.land-washing-design-screen-4 img').css({'opacity': 0});
                $('.land-washing-design-screen-5 img').css({'opacity': 0});

                break;
        }

    });

});