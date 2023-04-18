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

<template>
    <header class="position-relative">
        <nav class="nav p-2 justify-content-center justify-content-md-between align-content-center g-3">
            <a class="nav-link d-flex justify-content-center align-items-center gap-2" href="#">
                <img :src="this.logo" height="20"
                    alt="Logo">
                <h1 class="title p-0 m-0">Yu-Gi-Oh Api</h1>
            </a>
            <form class="d-flex justify-content-center align-items-center" action="#">
                <label class=" w-50 form-label" for="card-type-select">Please choose a type</label>
                <select class=" w-50 form-select" name="card-type" id="card-type-select">
                    <option>Choose...</option>
                    <option value="alien" selected>Alien</option>
                </select>
            </form>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "./../assets/sass/partials/appHeader.scss" as *;
</style>