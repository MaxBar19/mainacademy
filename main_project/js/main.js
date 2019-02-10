$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        center: true
    })
  });
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
