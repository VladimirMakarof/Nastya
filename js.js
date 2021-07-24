var app=new Vue({
    el: "#app",
    data:{
      cards:[{ cardSrc:'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{ cardSrc:'https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{ cardSrc:'https://images.pexels.com/photos/5103756/pexels-photo-5103756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{ cardSrc:'https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{ cardSrc:'https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{
        cardSrc:'https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{
        cardSrc:'https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },{
        cardSrc:'https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }
            ]
    },
  
    components: {
      'carousel': VueCarousel.Carousel,
      'slide': VueCarousel.Slide
    },
  });