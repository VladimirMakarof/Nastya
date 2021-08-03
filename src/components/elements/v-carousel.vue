<template>
  <section class="comment">
    <div class="koguvcavis-varazdel">
      <h1 class="comment-h1">Отзывы о моей работе</h1>
        <div class="sagestim-lonials commentContent">
          <Slide v-model="number" :min="0" :max="3" />
        </div>
      </div>
  </section>
</template>

<script>
import Slide from './v-carousel-item.vue';

export default {
  components: {
    Slide,
  },
  data() {
    return {
      number: 0,
    };
  },
};
</script>

<style scoped>
  #comment-block{
    width: 100%;
    display: flex;
  }
</style>
