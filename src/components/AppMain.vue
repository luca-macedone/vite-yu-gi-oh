<script>
import CardList from "./CardList.vue";
export default {
    components: {
        CardList,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <CardList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/sass/partials/appMain.scss" as *;
</style>