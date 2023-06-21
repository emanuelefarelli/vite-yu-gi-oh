<script>
    import CardsContainer from './CardsContainer.vue';
    import AppSearchbar from './AppSearchbar.vue';
    import axios from 'axios';
    import {store} from '../store';

    export default{
        name:'AppMain',
        data(){
            return {
                apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
                cardList: [],  
                store,
            }
        },
        components:{
            CardsContainer,
            AppSearchbar
        },
        methods: {
            searchedCard(needle){
                axios.get(this.apiUrl, {
                    params: {
                        archetype: needle
                    }
                })
                .then( (response) => {
                    this.cardList = response.data.data;
                    console.log(response.data.data);
                    this.store.count = this.cardList.length;
                    this.store.loadingState = false;
                 })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        created(){
            this.searchedCard()
        }

    }
</script>

<template>

    <main v-if="store.loadingState === true">
        <AppSearchbar @searched="searchedCard"/>
        <div class="found-number-cards">
            <h2>
                Loading...
            </h2>
        </div>
    </main>

    <main v-else>
        <AppSearchbar @searched="searchedCard"/>
        <div class="found-number-cards">
            <h2>
                found {{ this.store.count }} cards:
            </h2>
        </div>
        <CardsContainer :cardList="cardList"/>
    </main>
</template>

<style lang="scss" scoped>
    @use '../style/mixins/mixins.scss' as *;
    main{
        width: 80%;
        background-color: white;
        padding: 2rem;
        margin: 0 auto;
        margin-top: 3rem;
        div.found-number-cards{
            background-color: #212529;
            color: white;
            @include flex(row,flex-start,center);
            padding: 1rem 0;
            padding-left: 2rem;
            h2{
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>