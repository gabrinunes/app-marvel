<template>
<div>
     <b-card-group deck>
     <div class="mb-2" v-for="comics in list" :key="comics.id">
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
  <b-pagination v-show="pagination"
  :total-rows="rows"
  v-model="currentPage"
  :per-page="perPage"
  ></b-pagination>
     </div>
</template>
<script>
import axios from '../services/axios'
export default {
    props:['Pesquisa'],
    data(){
       return {
         comics:[],
         currentPage: 1,
         perPage: 3,
         pagination: false
         }
    },
    computed:{
      list(){
         const items = this.comics
         return items.slice(
           (this.currentPage - 1) * this.perPage,
           this.currentPage * this.perPage
         )
      },
      rows(){
        return this.comics.length
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
          this.pagination = true
          if(this.comics ==""){
            this.pagination = false
          }
        }),err =>{
          console.log(err);
        }
        }
        
      }
    }
</script>

<style  scoped>
 .card{
   max-width:25rem;
 }
</style>

