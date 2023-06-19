<script>
    export default{
        name:'SingleCard',
        data(){
            return {
    
            }
        },

        props: {
            cardElement : Object
        }
    }
</script>

<template>
    <div class="card">
        <img :src="cardElement.card_images[0].image_url" alt="cardImage">
        <h1>
            {{ cardElement.name }}
        </h1>
        <p>
            {{ cardElement.race }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    div.card{
        height: 400px;
        width: calc(100% / 5);
        margin: 0.5rem;
        text-align: center;
        background-color: #d48f38;
        img{
            width: 100%;
        }
        h1,
        p{
            margin-bottom: 0.5rem;
        }
        h1{
            font-size: 1.2rem;
        }
        p{
            font-size: 1rem;
        }
    }
</style>