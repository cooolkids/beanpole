var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

$('header').mouseenter(function () {
  $('header').addClass('on')


})
$('header').mouseleave(function () {
  $('header').removeClass('on')

})

$('li.main-menu').mouseenter(function () {
  $(this).find('ul.sub-menu').stop().slideDown()
})

$('li.main-menu').mouseleave(function () {
  $('ul.sub-menu').stop().slideUp()
})

$('li.main-menu').mouseleave(function () {
  $('li.main-menu').removeClass('on')
})
$('li.main-menu').mouseenter(function () {
  $('li.main-menu').removeClass('on')
  $(this).addClass('on')
})


// 메뉴 클릭하면
$('li.main-menu a').click(function () {
  // 메뉴에 위치값을 지정해뒀으니 그값을 읽어줘
  let href = $(this).attr('href')
  // 지정한 section 윈도우창의 0의 위치에서 각 section의 시작점의 거리값을 구해줘 
  let secTop = $(href).offset().top
  // console.log(secTop)
  $('html').stop().animate({ "scrollTop": secTop })
})


$('nav ul li a').click(function () {
  let secHref = $(this).attr('href')
  let secTop = $(secHref).offset().top()

  $('nav ul li a').removeClass('on')
  $(this).addClass('on')
  $('html').animate({ 'scrollTop': secTop })
})

$('section').mousewheel(function (e, delta) {
  if (delta > 0) {
    let prev = $(this).prev().offset().top
    $('html').stop().animate({ 'scrollTop': prev }, 500)
  } else if (delta < 0) {
    let next = $(this).next().offset().top
    $('html').stop().animate({ 'scrollTop': next }, 500)
  }
})

let sect2top = $('#sect2').offset().top

$(window).scroll(function () {
  let scrTop = $(this).scrollTop()



  $('section').each(function (i) {
    let secTop = $(this).offset().top
    // console.log(secTop);
    if (scrTop >= secTop) {
      // $('.wrap').removeClass('on')
      // $('.wrap').eq(i).addClass('on')
      // $('nav li a').removeClass('on')
      // $('nav li').eq(i).find('a').addClass('on')
    }


  })
 init()
})

function init(){
  let scrTop = $(window).scrollTop()
  if (sect2top >scrTop) {
  
    $('header').addClass('first')
  } else {
    $('header').removeClass('first')
  }
  

}
init()