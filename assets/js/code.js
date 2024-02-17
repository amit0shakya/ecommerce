
let _trendTab=document.getElementsByClassName("navtab")[0].childNodes[1];
let _trendItems = document.getElementsByClassName("trendItems")[0].childNodes
let _tt
let _whichTab

function trendTab(_who,_tab){
    _whichTab=_tab;

    if(_tt){
        _tt.style.display='none';
    }

    if(_trendTab){
        _trendTab.style.backgroundColor='transparent';
    }

    switch(_tab){
        case 'laptop': _tt= _trendItems[1]
                            break;

        case 'watch':   _tt= _trendItems[3]
                            break;
        
        case 'new':     _tt =  _trendItems[5]
                            break;
    }

    _tt.style.display='initial';
    _who.style.backgroundColor="#fcc902";
    _trendTab = _who;
}

trendTab(_trendTab,'laptop');

// Owl Crousel Setup

let laptopCrousel = $('._laptops');
let watchCrousel = $('._watch')

$(document).ready(function(){

    laptopCrousel.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsiveClass:true,
      dots:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:4
        },
        1000:{
          items:6
        }
      }
    })

    watchCrousel.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        dots:false,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:4
          },
          1000:{
            items:6
          }
        }
      })


});

    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'

        switch(_whichTab){
            case 'laptop':  laptopCrousel.trigger('prev.owl.carousel', [500]);
                            break;
            
            case 'watch':   watchCrousel.trigger('prev.owl.carousel', [500]);
                            break;
        }

        

    })

    $('.owl-next').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'

        switch(_whichTab){
            case 'laptop':  laptopCrousel.trigger('next.owl.carousel', [500]);
                            break;
            
            case 'watch':   watchCrousel.trigger('next.owl.carousel', [500]);
                            break;
        }

    })

