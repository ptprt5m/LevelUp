
$(document).ready(function(){
    $(".reviews-slider").owlCarousel();
    // $(".combo-slider").owlCarousel();
});

//reviews slider

var owl = $('.reviews-slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav: true,
    navText: ["<img src='../img/sliderNav/mynextimage.png'>","<img src='../img/sliderNav/myprevimage.png'>"]
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

//combo slider

// var owl = $('.combo-slider');
// owl.owlCarousel({
//     items:3,
//     loop:true,
//     margin:0,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     nav: true,
//     navText: ["<img src='../img/sliderNav/mynextimage.png'>","<img src='../img/sliderNav/myprevimage.png'>"]
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

function banTel() {
    if ((event.keyCode > 31 && event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 255)) event.returnValue = false;
}

