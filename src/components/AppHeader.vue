<template>
    <header>
        <nav class="nav justify-content-start align-content-center">
            <a class="nav-link d-flex gap-2" href="#">
                <img :src="this.logo" height="20"
                    alt="Logo">
                <h1 class="title p-0 m-0">Yu-Gi-Oh Api</h1>
            </a>
        </nav>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            logo :"https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg",
        }
    }
}
</script>

<style lang="scss" scoped>
@use "./../assets/sass/partials/appHeader.scss" as *;
</style>