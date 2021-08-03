<template>
  <div>
    <previewComponent/>
    <bioComponent/>
    <servicesComponent/>
    <v-carousel />
  </div>
</template>

<script>
import previewComponent from '../components/elements/previewComponent.vue';
import bioComponent from '../components/elements/bioComponent.vue';
import servicesComponent from '../components/elements/servicesComponent.vue';
import vCarousel from '../components/elements/v-carousel.vue';

export default {
  name: 'App',
  components: {
    previewComponent,
    bioComponent,
    servicesComponent,
    vCarousel,
    // vueSlickCarousel,
  },
};
</script>

<style>
  @import '../assets/css/style.module.css';
  @import '../assets/css/reset.module.css';
  @import '../assets/fonts/fontawesome/all.min.css';
</style>
