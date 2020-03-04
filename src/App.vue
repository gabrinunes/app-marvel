<template>
   <div id="app">
     <app-input @Buscar="ReceivingData"></app-input>
     <app-character @openDetails="ReceivingIdCharacter" v-show="listing"
     :Pesquisa="dados"
     >
     </app-character>
     <hr>
     <app-comics @openDetails="ReceivingIdComics"
     v-show="listing"
     :Pesquisa="dados" 
     ></app-comics>
     <app-details v-show="!listing"
     :DetailsIdCharacter="IdCharacter"
     :DetailsIdComics="idComics"
     ></app-details>
   </div>
</template>

<script>
import AppInput from './components/Input'
import AppCharacter from './components/Character'
import AppComics from './components/Comics'
import AppDetails from './components/Details'
export default {
    components:{AppInput,AppCharacter,AppComics,AppDetails},
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
      this.listing = id
     },
     ReceivingData(name){
     this.dados = name
     }
    }
}
</script>

<style>
</style>
