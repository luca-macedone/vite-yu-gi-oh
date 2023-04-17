<script>
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  export default {
    data(){
      return{
        store,
      }
    },
    mounted() {
      this.store.fetchCards(this.store.api_URL);
    },
    components: {
      AppHeader,
      AppMain,
    },
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style scoped>
</style>
