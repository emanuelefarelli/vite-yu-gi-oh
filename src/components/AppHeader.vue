<script>
    export default{
        name:'AppHeader',
        data(){
            return {
    
            }
        },
        components:{
            
        }
    }
</script>

<template>
    <header>
        <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt="yu-gi-oh logo">
        <h1>
            yu-gi-oh api
        </h1>
    </header>
</template>

<style lang="scss" scoped>
    @use '../style/mixins/mixins.scss' as *;

    header{
        background-color: white;
        @include flex(row,space-around,center);
        height: 7rem;
        img{
        height: 3rem;
    }
}
</style>