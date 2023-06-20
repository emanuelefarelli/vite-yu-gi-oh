<script>
    import SingleCard from './SingleCard.vue';

    export default{
        name:'CardsContainer',
        data(){
            return {       

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
    <section>
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