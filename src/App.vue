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
      this.store.fetchCards(this.api_URL);
    },
    components: {
      AppHeader,
      AppMain,
    },
    computed: {
      setURL(){
        if((this.store.archetype !== 'All') && (this.store.archetype !== null)){
          return this.store.api_URL + `?archetype=${this.store.archetype}`;
        }else{
          return this.store.api_URL + '?num=100&offset=0';
          //return store.api_URL;
        }
      }
    }
  }
</script>

<template>
  <AppHeader :callFetch="store.fetchCards(setURL)"/>
  <AppMain/>
</template>

<style scoped>
</style>
