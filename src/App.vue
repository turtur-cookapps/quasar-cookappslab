<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'App',
  created () {
    var config = {
      apiKey: 'AIzaSyBnVm-EMwoY6GTOLt7vDx99chywobTrrTg',
      authDomain: 'turtur-cookappslab.firebaseapp.com',
      databaseURL: 'https://turtur-cookappslab.firebaseio.com',
      projectId: 'turtur-cookappslab',
      storageBucket: 'turtur-cookappslab.appspot.com',
      messagingSenderId: '118371064312'
    }
    firebase.initializeApp(config)
  }
}
</script>

<style>
</style>
