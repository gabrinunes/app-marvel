<template>
 <div class="container">
   <b-carousel 
   id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
   >
     <b-carousel-slide v-for="comics in comics" :key="comics.index"
     :caption="comics.title"
     :img-src="comics.thumbnail.path + '/portrait_incredible.' + comics.thumbnail.extension"
   ></b-carousel-slide>

   </b-carousel>
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
 .container{
   max-width:30rem;
   max-height:15rem; 
 }
</style>

