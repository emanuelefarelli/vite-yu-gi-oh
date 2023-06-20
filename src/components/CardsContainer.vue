<script>
    import SingleCard from './SingleCard.vue';
    import {store} from '../store.js';

    export default{
        name:'CardsContainer',
        data(){
            return {       
                store,      
            }
        },

        props: {
            cardList : Array
        },

        components:{
            SingleCard
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