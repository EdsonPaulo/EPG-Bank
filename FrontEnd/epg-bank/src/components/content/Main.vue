<template>
  <div id="main-app">
    <sidebar/>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '../layout/Sidebar'

export default {
  name: 'main-app',
  components: { Sidebar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

main {
  margin-left: 200px;
}

</style>
