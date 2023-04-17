<script>
export default {
    name: 'CardItem',
    props: {
        href: String,
        title: String,
        type: String,
    }
}
</script>

<template>
    <div class="col">
        <div class="card rounded-0 border-0">
            <img class="card-img-top rounded-0 border-0" :src="href" :alt="title">
            <div class="card-body">
                <h3>{{ title }}</h3>
                <p>{{ type }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "./../assets/sass/partials/cardItem" as *;
</style>