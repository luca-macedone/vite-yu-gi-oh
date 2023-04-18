<script>
    import { store } from "../store.js";
    export default {
        name: 'CardCounter',
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="row mx-0">
        <div class="col px-3 py-2 mb-3">
            <h2 class="m-0 p-0" v-if="store.cardList">Found {{ store.cardList.length }} cards</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../assets/sass/partials/cardCounter.scss" as *;
</style>