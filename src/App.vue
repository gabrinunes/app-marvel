<template>
   <div id="app">
     <app-input @Buscar="ReceivingData" v-show="listing"></app-input>
     <app-character @openDetails="ReceivingIdCharacter" v-show="listing"
     :Pesquisa="dados"
     >
     </app-character>
     <hr>
     <app-comics @openDetails="ReceivingIdComics"
     v-show="listing"
     :Pesquisa="dados" 
     ></app-comics>
     <app-comic-details @backList="VoltaLista"
     v-show="!listing"
     :DetailsIdComics="idComics"
     ></app-comic-details>
   </div>
</template>

<script>
import AppInput from './components/Input'
import AppCharacter from './components/Character'
import AppComics from './components/Comics'
import AppComicDetails from './components/ComicDetails'
export default {
    components:{AppInput,AppCharacter,AppComics,AppComicDetails},
    data(){
      return {
        dados : '',
        IdCharacter :'',
        idComics:'',
        listing : true
      }
    },
    methods:{
     ReceivingIdCharacter(id){
     this.IdCharacter = id
     this.listing = false
     },
     ReceivingIdComics(id){
      this.idComics = id
      this.listing = false
     },
     ReceivingData(name){
     this.dados = name
     },
     VoltaLista(){
       this.listing = true
     }
    }
}
</script>

<style>
</style>
