$(function () {

    $('.cart__item__block__price .fa-heart').on('click', function () {
        let thisCart = $(this).parents('.cart__item__block__content').find('.cart__item__block__text p b').text();
        alert('это лайк карточки ' + thisCart);
    });

    $('.cart__item__block__user__name').on('click', function () {
        let thisCart = $(this).parents('.cart__item__block').index() + 1;
        alert('это имя пользователя карточки ' + thisCart);
    });

    $('.swiper-button-next_inside').on('click', function () {
        $('.swiper-button-next').click();
    });
    $('.swiper-button-prev_inside').on('click', function () {
        $('.swiper-button-prev').click();
    });


    /*var block = $(".cart__items__wrap").children();
    var blockHtml = block.html();
    console.log(blockHtml);*/


    function resizeSlider() {

        var slideItems = $(".cart__items__wrap").children();

        slideItems.each(function () {

            var childHtml = $(this).html();

            $('.swiper-wrapper').append('<div class="swiper-slide"><div class="cart__item__block">' + childHtml + '</div></div>');
        });

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 10,
            loop: true,
            /*pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },*/
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                }
            }
        });
    }

    $(document).ready(function () {

        resizeSlider();

    });

    $(window).resize(function () {

        resizeSlider();

    });


});
