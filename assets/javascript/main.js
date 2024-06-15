$(".sponcer").slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".taplet").slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
$(".page-button").slick({
  arrows: false,
  dots: false,
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        dots: false,
        autoplay: false,
        pauseOnHover: false,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: false,
        autoplay: false,
        pauseOnHover: false,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
