$(document).ready(function(){
    $('.movie-scroll-1 .item-group').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '40px',
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        rtl: true,
        accessibility:true,
        arrows:true,
        swipeToSlide:true


       
      });
  });