<script>
    import SingleCard from './SingleCard.vue';
    import axios from 'axios';

    export default{
        name:'CardsContainer',
        data(){
            return {
                apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
                cardList: [],               
            }
        },

        components:{
            SingleCard
        },

        created(){
            axios.get(this.apiUrl)
            .then( (response) => {
                console.log(response.data.data);
                this.cardList = response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
</script>

<template>
    <section>
        <SingleCard/>
    </section>
</template>

<style lang="scss" scoped>
    @use '../style/mixins/mixins.scss' as *;
    section{
        @include flex();
    }
</style>