<script>
import {store} from '../store';
export default {
    name: 'CardItem',
    data(){
        return {
            store,
        }
    },
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="col">
        <div class="card rounded-0 border-0" v-if="store.archetype !== 'All'">
            <img class="card-img-top rounded-0 border-0" :src="card.card_images[0].image_url" :alt="card.name">
            <div class="card-body">
                <h3 class="text-center">{{ card.name }}</h3>
                <p class="text-center">{{ card.archetype }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/sass/partials/cardItem" as *;
</style>