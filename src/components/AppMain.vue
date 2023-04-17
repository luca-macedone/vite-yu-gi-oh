<script>
import CardList from "./CardList.vue";
import CardCounter from "./CardCounter.vue";
export default {
    components: {
        CardList,
        CardCounter,
    }
}
</script>

<template>
    <main class="my-5">
        <div class="container p-3">
            <CardCounter />
            <CardList />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/sass/partials/appMain.scss" as *;
</style>