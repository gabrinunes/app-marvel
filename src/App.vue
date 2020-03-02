<template>
   <div id="app">
     <app-input @Buscar="ReceivingData"></app-input>
     <app-character
     :Pesquisa="dados"
     >
     </app-character>
     <hr>
     <app-comics
     :Pesquisa="dados" 
     ></app-comics>
   </div>
</template>

<script>
import AppInput from './components/Input'
import AppCharacter from './components/Character'
import AppComics from './components/Comics'
export default {
    components:{AppInput,AppCharacter,AppComics},
    data(){
      return {
        dados : '',
      }
    },
    methods:{
      ReceivingData(name){
        this.dados = name
      }
    }
}
</script>

<style>
</style>
