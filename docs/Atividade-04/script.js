// Inicializando o Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,          
    spaceBetween: 10,          
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true, 
    }    
});