
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    slidesPerView:1,
    loop: true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false
    } ,

    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next",
        preVEl: ".swiper-button-next",
    }
    
  });
  