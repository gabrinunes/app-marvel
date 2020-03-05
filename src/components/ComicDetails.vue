<template>
   <div>
     <b-card v-for="detalhes in detalhes" :key="detalhes.index"
  no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="detalhes.thumbnail.path + '/portrait_incredible.' + detalhes.thumbnail.extension" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="detalhes.title">
          <b-card-text>
            {{detalhes.description}}
          </b-card-text>
        </b-card-body>
        <h2 class="ml-2">Characters:</h2>
        <b-card-body  v-for="character in detalhes.characters.items" :key="character.index">
         <b-card-text>
           {{character.name}}
         </b-card-text>
        </b-card-body>
          <h2 class="ml-2">Creators:</h2>
           <b-card-body  v-for="creator in detalhes.creators.items" :key="creator.index">
          <b-card-text>
            {{creator.name}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  <b-button @click="backList">Voltar para lista</b-button>
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
<style>
</style>
