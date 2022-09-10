AOS.init();

$('.slide__img').slick({
  // autoplay: true,
  autoplaySpeed: 2000,
  // arrows: false,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});



$('.slide__show-all').slick({
  centerMode: true,
  centerPadding: '0px',
  speed: 1500,
  slidesToShow: 3,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToScroll:1,
  dots: true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 2
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


$('.list__slide-show').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // arrows: false,
  speed: 1500,
  // variableWidth: true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.conference-slide-image').slick({
  arrows: false,
  dots:true,
});

$('.feedback__mid-all').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  arrows: false,
  // variableWidth: true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.list__news-option').slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  // arrows: false,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        arrows: false,
        // variableWidth: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});