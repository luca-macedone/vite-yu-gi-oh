import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    cardList: null,
    isLoading: true,
    archetype: null,
    api_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    fetchCards(URL) {
        axios
            .get(URL)
            .then(response => {
                //console.log(response.data.data);
                this.cardList = response.data.data;
                setTimeout(()=>{
                    this.isLoading = false;
                }, 1500)
            })
            .catch(error => {
                console.log(error);
            })
    },
});