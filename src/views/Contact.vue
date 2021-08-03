<template>
  <div>
    <contactComponent/>
  </div>
</template>

<script>
import contactComponent from '../components/elements/contactComponent.vue';

export default {
  name: 'App',
  components: {
    contactComponent,
  },
};

// loadScript("https://maps.googleapis.com/maps/api/js");
</script>

<style>
  @import '../assets/css/style.module.css';
  @import '../assets/css/reset.module.css';
  @import '../assets/fonts/fontawesome/all.min.css';
</style>
