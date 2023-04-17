<script>
import { store } from "./../store";
import CardItem from "./CardItem.vue";
export default {
    name: 'CardList',
    data(){
        return {
            store,
        }
    },
    components: {
        CardItem,
    },
}
</script>

<template>
    <div class="row g-3 row-cols-1 row-cols-md-3 row-cols-lg-5">
        <CardItem :href="card.card_images[0].image_url" :title="card.name" :type="card.archetype" v-for="card in store.cardList"/>
    </div>
</template>

<style lang="scss" scoped></style>