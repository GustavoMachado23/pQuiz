<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  // mounted() {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     console.log(user)
  //     this.$router.push('dashboard')
  //   })
  // }
}
</script>

<style>
@import './assets/styles.css';
@import url('https://fonts.googleapis.com/css?family=Antic');
</style>
