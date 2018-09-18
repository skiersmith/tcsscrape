<template>
  <div id="app">
    <!-- <div @click="closeError" v-if="error">
    </div> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    method: {
      userLogout() {
        this.$store.dispatch('logout', this.$store.state.user._id)
      },
      closeError(){
        this.$store.commit('clearError')
      }
    },
    computed: {
      user() {
        console.log(this.$store.state.user)
        return this.$store.state.user
      },
      error() {
        // return this.$store.state.error
      },
    },
    mounted(){
      
    }
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

  .nav-header {
    background-color: rgb(216, 103, 103);
    height: 7rem;
    width: 100vw;
    top: 0px;
    position: fixed;
    left: 0px;
    z-index: 2;
    /* display: flex; */
    /* justify-content: space-around; */
  }

  
</style>