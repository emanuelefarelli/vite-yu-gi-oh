<script>
    import SingleCard from './SingleCard.vue';
    import axios from 'axios';
    import {store} from '../store.js';

    export default{
        name:'CardsContainer',
        data(){
            return {
                apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
                cardList: [],         
                store,      
            }
        },

        components:{
            SingleCard
        },

        created(){
            axios.get(this.apiUrl)
            .then( (response) => {
                this.cardList = response.data.data;
                this.store.count = this.cardList.length;
                this.store.loadingState = false;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
</script>

<template>
    <section v-if="store.loadingState === true">
        <h1>
            Loading cards ...
        </h1>
    </section>
    <section v-else>
        <SingleCard v-for="cardObj in cardList"
            :cardElement = "cardObj"
        />
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/mixins/mixins.scss' as *;
    section{
        @include flex();
    }
</style>