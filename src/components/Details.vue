<template>
   <div>
   </div>
</template>

<script>
import axios from '../services/axios'
export default {
    props:['DetailsIdCharacter','DetailsIdComics'],
    data(){
      return {
         detalhes :[]
      }
    },
    watch:{
     DetailsIdCharacter: function (){
       this.BuscarPersonagensID()
     },
     DetailsIdComics : function (){
       this.BuscarQuadrinhosID()
     }
    },
    methods:{
       BuscarQuadrinhosID(){
         axios.getComicsBYID(this.DetailsIdComics, res =>{
           this.detalhes = res.data.data.results
         })
       },
       BuscarPersonagensID(){
         axios.getCharacterByID(this.DetailsIdCharacter, res =>{
           this.detalhes = res.data.data.results
         })
       }
      }
    }

</script>

<style>

</style>