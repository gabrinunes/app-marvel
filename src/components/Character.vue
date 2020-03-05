<template>
 <div>
      <h3 v-show="!retorno">Não retornou personagens ou quadrinhos relacionados :(</h3>
      <b-spinner v-if="loading"></b-spinner>
      <div v-else>
       <h3 v-show="!sucesso">Done</h3>
       <b-card v-for="character in character" :key="character.index"
  no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="character.name">
          <b-card-text>
            {{character.description}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      </div>
</div>
</template>

<script>
import axios from '../services/axios'
export default {
  props:['Pesquisa'],
     data(){
       return{
         character :'',
         loading:false,
         retorno: true,
         sucesso:true
       }
     },
     watch:{
      Pesquisa: function (){
      this.getCharacter()
      this.retorno = true
      }
     },
     methods:{
      getCharacter(){
        this.loading = true
        axios.searchCharacter(this.Pesquisa, res =>{
          this.character = res.data.data.results
          this.loading = false
          if(this.character ==""){
            this.retorno = false
          }else{
            this.sucesso = false
          }
        }), error =>{
           this.loading = false;
           console.log(error)
        }
      },
      openDetails(id){
       this.$emit('openDetails',id)
      }
     }
}
</script>

<style>
</style>