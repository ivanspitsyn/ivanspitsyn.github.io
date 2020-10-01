const slider = $(document).ready(function () {
   $('.products').bxSlider({
      pager: false,

   });
});

$(".slider__arrow-prev").click((e) => {
   e.preventDefault();
   slider.goToPrevSlide();
});


$(".slider__arrow-next").click((e) => {
   e.preventDefault();
   slider.goToNextSlide();
});