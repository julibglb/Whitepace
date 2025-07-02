import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../styles/style.scss';

const $body = $('body');
const $burger = $('.burger');
const $nav = $('.main-nav');
const $headerButtons = $('.header-buttons');



const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
        769: {
            slidesPerView: "auto",
            spaceBetween: 32,
            centeredSlides: true,
            centeredSlidesBounds: true,
            enabled: true,
        },
        1152: {
            slidesPerView: 3,
            centeredSlides: false,
            centeredSlidesBounds: false,
            enabled: false,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


function toggleMenu() {
    $nav.toggleClass('active');
    $body.toggleClass('has-active-modal');

    if ($(window).width() <= 1152) {
        $headerButtons.toggleClass('active');
    }
}

//Очищає всі налаштування бургер меню при відкриті на великих екранах
function resetMenuOnResize() {

    const windowWidth = $(window).width();

    if (windowWidth >= 1440) {
        $burger.removeClass('active');
        $nav.removeClass('active');
        $headerButtons.removeClass('active');
        $body.removeClass('has-active-modal');
    } else if (windowWidth <= 1152) {
        // Якщо меню відкрите — показати header-buttons в бургері
        if ($nav.hasClass('active')) {
            $headerButtons.addClass('active');
        } else {
            $headerButtons.removeClass('active');
        }
    } else {
        // Проміжна ширина — завжди приховуємо header-buttons
        $headerButtons.removeClass('active');
    }

}


$burger.on('click', toggleMenu);

$(window).on('resize', resetMenuOnResize);
