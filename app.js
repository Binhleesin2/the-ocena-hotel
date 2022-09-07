AOS.init();

$('.slide__img').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // arrows: false,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});



$('.slide__show-all').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToScroll:1,
  dots: true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$('.slide__image-right').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // dots:true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.feedback__mid-all').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // dots:true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.list__news-option').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
