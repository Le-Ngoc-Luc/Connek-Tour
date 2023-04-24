const tourNames = [
  "Ha Long Bay",
  "Ba Ria",
  "Cat Ba",
  "Phu Quoc",
  "Nha Trang",
  "Phong Nha Ke Bang",
  "Da Nang",
  "Con Dao",
];

$(document).ready(function () {
  var $slider = $(".slide-tour");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $(".slide-tour").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    scrollbar: true,
    appendArrows: $(".slick-slider-nav"),
    prevArrow: `<button class='slick-prev '><i class="fa-solid fa-arrow-left"></i></i></button>`,
    nextArrow: `<button class='slick-next '><i class="fa-solid fa-arrow-right"></i></button>`,
    dots: true,
    appendDots: $(".slick-slider-dots"),
    customPaging: function (slider, i) {
      return `<span>${tourNames[i]}</span>`;
    },
    rtl: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// function customScollbar() {
//   const slideItemActives = $(".slide-tour-item");
//   const slideItemActive = Array.from(slideItemActives).find((element) =>
//     element.classList.contains("slide-tour-item")
//   );

//   console.log(slideItemActive);
// }

// customScollbar();
