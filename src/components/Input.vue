<template>
<body>
 <div class="jumbotron ">
    <div class="container">
      <h1 class="header-main-title">Marvel Comics Character Search</h1>
      <form id="connectionForm" v-on:submit.prevent>
        <div class="form-group">
          <b-input required type="text"  class="form-control character-search-box"
            placeholder="(Ex. Hulk, Iron Man, Spider-Man, etc...)" v-model="search" @keyup.enter="Buscar(search)"></b-input>
        </div>
        <b-button class="btn btn-danger mb-2 float-right search-character-button" @click="Buscar(search)">Search</b-button>
      </form>
    </div>
 </div> 
</body>
 
</template>

<script>
export default {
        data(){
          return {
            search:''
          }
        },
        methods:{
          Buscar(data){
            this.$emit('Buscar', data)
          }
        }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto:300,400,700&display=swap');
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #22262A;
}
.jumbotron {
    background-color: #151515;
}
.header-main-title {
    color: #fff;
}
.character-search-box, .search-character-button {
    border-radius: 0;
}
.search-character-button {
    background-color: #ED462F;
}
</style>