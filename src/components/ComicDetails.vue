<template>
   <div>
     <b-button @click="backList">Voltar para a Home</b-button>
     <b-card v-for="detalhes in detalhes" :key="detalhes.index"
      :img-src="detalhes.thumbnail.path + '/portrait_incredible.' + detalhes.thumbnail.extension" img-alt="Card image" img-left class="mb-3">
      <h2>Comic:</h2>
      <b-card-text>
        <h1 class="fonte">{{detalhes.title}}</h1>
      </b-card-text>
      <div class="break"></div>
      <h5>Creators:</h5>
      <b-card-text v-for="creator in detalhes.creators.items" :key="creator.index">
        <p>{{creator.name}},</p>
      </b-card-text>
      <div class="break"></div>
      <h5>Characters:</h5>
      <b-card-text v-for="character in detalhes.characters.items" :key="character.index">
        <p>{{character.name}},</p>
      </b-card-text>
    </b-card>
   </div>
</template>

<script>
import axios from '../services/axios'
export default {
    props:['DetailsIdComics'],
    data(){
      return {
         detalhes :[]
      }
    },
    watch:{
     DetailsIdComics : function (){
       this.BuscarQuadrinhosID()
     }
    },
    methods:{
       BuscarQuadrinhosID(){
         axios.getComicsBYID(this.DetailsIdComics, res =>{
           this.detalhes = res.data.data.results
           console.log(this.detalhes)
         })
       },
       backList(){
         this.$emit('backList')
       }
      }
    }

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:300,400,700&display=swap');
 .card-body{
   display:flex;
   align-items:baseline;
   flex-wrap: wrap;
   flex-direction: row;
   align-content: flex-start;
 }
.break{
   flex-basis:100%;
   height: 0%;
 }
.card-img-left {
    width:20%;
}
.fonte{
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
