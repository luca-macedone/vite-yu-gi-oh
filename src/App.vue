<script>
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  export default {
    data(){
      return{
        store,
        // customURL: this.setURL,
      }
    },
    mounted() {
      // this.store.fetchCards(this.store.api_URL);
      this.store.fetchCards(`${this.store.base_URL+this.store.cards_api_URL}?num=100&offset=0`);
    },
    components: {
      AppHeader,
      AppMain,
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style scoped>
</style>
