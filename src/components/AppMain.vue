<script>
    import CardsContainer from './CardsContainer.vue';
    import {store} from '../store';

    export default{
        name:'AppMain',
        data(){
            return {
                store,
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
                found {{ this.store.count }} cards:
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
            padding: 1rem 0;
            padding-left: 2rem;
            h2{
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>