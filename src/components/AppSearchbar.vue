<script>
    import axios from 'axios';

    export default{
        name:'AppSearchbar',
        data(){
            return {
                archetypeList: [],
                apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
            }
        },
        created(){
            axios.get(this.apiArchetypeUrl)
                .then( (response) => {
                    // console.log(response.data);
                    this.archetypeList = response.data
                 })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
</script>

<template>
    <div class="input-group">
        <label for="archetypes">Archetypes:</label>

        <select name="archetypes" id="archetypes" v-model="archetypeName" @click="$emit('searched', archetypeName)">
            <option v-for="archetypes in archetypeList" :value="archetypes.archetype_name">{{ archetypes.archetype_name }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    div.input-group{
        display: flex;
        justify-content: center;
        padding: 2rem;
        label,
        select{
            padding: 0.5rem;
        }
    }
</style>