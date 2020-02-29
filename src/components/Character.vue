<template>
 <div>
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
</template>

<script>
import axios from '../services/axios'
export default {
  props:['Pesquisa'],
     data(){
       return{
         character :''
       }
     },
     watch:{
      Pesquisa: function (){
      this.getCharacter()
      }
     },
     methods:{
      getCharacter(){
        axios.searchCharacter(this.Pesquisa, res =>{
          this.character = res.data.data.results
          console.log(this.character)
        })
      }
     }
}
</script>

<style>
</style>