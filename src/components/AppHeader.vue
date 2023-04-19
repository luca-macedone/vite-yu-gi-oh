<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppHeader",
    data() {
        return {
            store,
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg",
        }
    },
    methods: {
        filterCards() {
            this.store.isLoading = true;
            let filterURL;
            if (this.store.archetype !== 'All' && this.store.archetype !== null) {
                //console.log(this.store.archetype);
                filterURL = this.store.base_URL + this.store.cards_api_URL + `?archetype=${this.store.archetype}`;
            }
            else {
                filterURL = `${this.store.base_URL+this.store.cards_api_URL}?num=100&offset=0`;
            }
            this.store.fetchCards(filterURL);
        }
    },
    mounted() {
        this.store.fetchArchetypes();
    }
}
</script>

<template>
    <header class="position-relative">
        <nav class="nav p-2 justify-content-center justify-content-md-between align-content-center g-3">
            <a class="nav-link d-flex justify-content-center align-items-center gap-2" href="#">
                <img :src="this.logo" height="20" alt="Logo">
                <h1 class="title p-0 m-0">Yu-Gi-Oh Api</h1>
            </a>
            <form class="d-flex justify-content-center align-items-center flex-wrap">
                <label class="form-label" for="card-type-select">Please choose an archetype</label>
                <select class="form-select" name="card-type" id="card-type-select" v-if="store.cardArchetypes"
                    v-model="store.archetype" @change="filterCards()">
                    <option value="All" selected>First 100 cards</option>
                    <option :value="item.archetype_name" v-for="item in store.cardArchetypes"> {{ item.archetype_name }}
                    </option>
                </select>
            </form>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use "./../assets/sass/partials/appHeader.scss" as *;
</style>