<template>
  <headerComponent/>
  <div>
    <router-view/>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
  },
};
</script>

<style>
  @import './assets/css/style.module.css';
  @import './assets/css/reset.module.css';
  @import './assets/fonts/fontawesome/all.min.css';
</style>
