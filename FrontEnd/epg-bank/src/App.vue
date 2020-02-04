<template>
  <div id="app">
    <!--Se o usuario estiver logado-->
    <div v-if="logged">
      <main-app/>
    </div>

    <!--Se o usuario não estiver logado-->
    <div v-else>
      <login/>
    </div>
  </div>
</template>

<script>
import Login from './components/content/Login.vue'
import MainApp from './components/content/Main.vue'

export default {
  name: 'App',
  components: { Login, MainApp },
  data(){
    return {
      logged: true
    }
  },

}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
