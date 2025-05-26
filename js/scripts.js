
/* section-1 coverflow 슬라이드 작동 */
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }
});


/* section-4 슬라이드 작동 */
const swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
});
const square = $('#sec-2 .sec-2-wrap .product-wrap .box .square')
const su = $('#sec-2 .sec-2-wrap .product-wrap .box .square .square-util')



/* section-2 부분 제품 설명 hover */
square.on('mouseenter', function () {
  $(this).find('.square-util').addClass('on');
});

square.on('mouseleave', function () {
  $(this).find('.square-util').removeClass('on');
});


/* header 부분 메뉴 열람 작동 */

const mbtn = $('#head .head-wrap .head-menu .head-menu-button');
const menu = $('#head .head-wrap .head-menu .menu-wrap');
const overlay = $('.overlay');

mbtn.on('click', function () {
  const isOpen = menu.hasClass('on');

  if (!isOpen) {
    menu.addClass('on');
    overlay.addClass('active');
    $('body').addClass('noscroll');
  } else {
    menu.removeClass('on');
    overlay.removeClass('active');
    $('body').removeClass('noscroll');
  }
});

// 오버레이 누르면 닫히게도 가능
overlay.on('click', function () {
  menu.removeClass('on');
  overlay.removeClass('active');
  $('body').removeClass('noscroll');
});



