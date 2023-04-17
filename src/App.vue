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
      store.fetchCards(store.api_URL);
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
