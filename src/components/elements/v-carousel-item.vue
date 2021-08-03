<template>
  <section class="comment">

    <transition-group name="fade" tag="div">
      <div  v-for="i in [currentIndex]" :key="i" class="vemotau-vokusipol">
        <div class="testimonial v-carousel-item">
            <img :src="currentImg" alt="фотография человека">
            <div class="gecedanam">{{currentLastName}} {{currentFirstName}}</div>
            <div class="apogered-gselected">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <p> {{currentText}}</p>
        </div>
      </div>
    </transition-group>

    <div class="panel_carousel">
        <span class="prev" @click="prev" id="left"><i class="fas fa-angle-left"></i></span>
        <span class="next" @click="next" id="right"><i class="fas fa-angle-right"></i></span>
    </div>
  </section>
</template>

<script>
// import vCarouselItem from './v-carousel-item.vue';
export default {
  name: 'v-carousel-item',
  data() {
    return {
      images: [
        '../img/comment_2.jpg',
        '../img/comment_1.jpg',
        '../img/comment_2.jpg',
      ],
      texts: [
        {
          first_name: 'first_name', last_name: 'last_name', text: 'Text in to! 1',
        },
        {
          first_name: 'first_name', last_name: 'last_name', text: 'Text in to! 2',
        },
        {
          first_name: 'first_name', last_name: 'last_name', text: 'Text in to! 3',
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentText: function() {
      return this.texts[Math.abs(this.currentIndex) % this.texts.length].text;
    },
    currentLastName: function() {
      return this.texts[Math.abs(this.currentIndex) % this.texts.length].last_name;
    },
    currentFirstName: function() {
      return this.texts[Math.abs(this.currentIndex) % this.texts.length].first_name;
    },
  },
  components: {},
};
</script>

<style scoped>
.testimonial, .comment{
  width: 100%;
}
.vemotau-vokusipol{
  
  margin: 0 auto;
}
</style>
