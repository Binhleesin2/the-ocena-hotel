$('.slide__item-mid').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});

$('.slide__show').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
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

// $('.slide__image-right').slick({
//   dots: false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear',
//   autoplay: true,
//   autoplaySpeed: 2000,
//   prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
//   nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
// });

$('.slide__image-right').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // dots:true,
  prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
});