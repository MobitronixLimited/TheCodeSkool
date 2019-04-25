import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

var owl = $('.news');
if (owl) {
    owl.owlCarousel({
        items:1,
        loop:true,
        nav:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });
}
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })
