$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        //Loop
        loop:true,
        //Navigation
        nav:true,
        navText: ["<img class = 'float-left' src = '../main_project/images/left-arrow02.png'>","<img class = 'float-right' src = '../main_project/images/right-arrow02.png'>"],
        //Items
        items:1,
        //Autoplay
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        //Position
        center: true,
        //Animation
        animateOut: 'fadeOut'
    })
  });
