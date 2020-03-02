<template>
<div>
     <b-card-group deck>
     <div class="mb-2" v-for="comics in comics" :key="comics.name">
       <b-card
    :title="comics.title" 
    :img-src="comics.thumbnail.path + '/portrait_incredible.' + comics.thumbnail.extension" 
    img-alt="Image" 
    img-top >
      <b-card-text>
       {{comics.description}}
      </b-card-text>
    </b-card>
     </div>
  </b-card-group>
     </div>
</template>
<script>
import axios from '../services/axios'
export default {
    props:['Pesquisa'],
    data(){
       return {
         comics:[]
       }
    },
    watch:{
     Pesquisa: function () {
      this.BuscaQuadrinhos()
     }
    },
    methods:{
      BuscaQuadrinhos(){
        axios.searchComics(this.Pesquisa,res=>{
          this.comics = res.data.data.results
          console.log(this.comics)
        })
      }
    }
}
</script>

<style  scoped>
 .card{
   max-width:25rem;
 }
</style>

