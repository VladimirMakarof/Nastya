<template>
  <div>
    <headerComponent/>
    <bioComponent/>
    <servicesComponent/>
    <commentComponent/>
    <footerComponent/>
  </div>
</template>

<script>
// import styles from './access/css/style.module.css';
import headerComponent from './components/headerComponent.vue';
import bioComponent from './components/elements/bioComponent.vue';
import servicesComponent from './components/elements/servicesComponent.vue';
import commentComponent from './components/elements/commentComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    bioComponent,
    servicesComponent,
    commentComponent,
    footerComponent,
  },
};
</script>

<style>
  @import './assets/css/style.module.css';
  @import './assets/css/reset.module.css';
  @import './assets/fonts/fontawesome/all.min.css';
</style>
