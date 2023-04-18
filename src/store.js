import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    cardList: null,
    isLoading: true,
    api_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=49&offset=0',
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
});