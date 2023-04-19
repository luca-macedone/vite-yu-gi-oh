import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    cardList: null,
    isLoading: true,
    archetype: 'All',
    cardArchetypes: null,
    base_URL: 'https://db.ygoprodeck.com/api/v7',
    cards_api_URL: '/cardinfo.php',
    archetype_api_URL: '/archetypes.php',
    fetchCards(URL) {
        axios
            .get(URL)
            .then(response => {
                //console.log(response.data.data);
                this.cardList = response.data.data;
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
            })
    },
    fetchArchetypes() {
        const URL = this.base_URL + this.archetype_api_URL;
        axios
            .get(URL)
            .then(response => {
                //console.log(response.data);
                this.cardArchetypes = response.data;
                // console.log(this.archetype)
                // console.log(this.cardArchetypes)
            })
            .catch(error => {
                console.log(error);
            })
    },

});