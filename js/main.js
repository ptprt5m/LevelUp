
$(document).ready(function(){
    $(".reviews-slider").owlCarousel();
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
    navText: ["<img src='http://s1.iconbird.com/ico/1012/human02/w32h321349046008back4.png'>","<img src='http://s1.iconbird.com/ico/1012/human02/w32h321349046714gtkgobackrtl4.png'>"]
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

function banTel() {
    if ((event.keyCode > 31 && event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 255)) event.returnValue = false;
}

