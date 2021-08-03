<template>
  <div>
    <aboutComponent/>
  </div>
</template>

<script>
import aboutComponent from '../components/elements/aboutComponent.vue';

export default {
  name: 'App',
  components: {
    aboutComponent,
  },
};
</script>

<style>
  @import '../assets/css/style.module.css';
  @import '../assets/css/reset.module.css';
  @import '../assets/fonts/fontawesome/all.min.css';
</style>
