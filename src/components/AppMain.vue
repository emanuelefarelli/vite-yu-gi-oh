<script>
    import CardsContainer from './CardsContainer.vue';
    export default{
        name:'AppMain',
        data(){
            return {
    
            }
        },
        components:{
            CardsContainer
        }
    }
</script>

<template>
    <main>
        <div>
            <h2>
                found n cards:
            </h2>
        </div>
        <CardsContainer/>
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
        div{
            background-color: #212529;
            color: white;
            @include flex(row,flex-start,center);
            padding-left: 1rem;
            h2{
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>