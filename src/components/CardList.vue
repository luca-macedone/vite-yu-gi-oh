<script>
import { store } from "./../store";
import CardItem from "./CardItem.vue";
import LoadingScreen from "./LoadingScreen.vue";
export default {
    name: 'CardList',
    data(){
        return {
            store,
        }
    },
    components: {
        CardItem,
        LoadingScreen,
    },
}
</script>

<template>
    <div class="row g-3 row-cols-1 row-cols-md-3 row-cols-lg-5" v-if="store.cardList">
        <CardItem :href="card.card_images[0].image_url" :title="card.name" :type="card.archetype" v-for="card in store.cardList"/>
    </div>
    <LoadingScreen v-else/>
</template>

<style lang="scss" scoped></style>