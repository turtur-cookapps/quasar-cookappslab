<template>
  <q-page class="flex flex-center">

  </q-page>
</template>

<style>
</style>

<script>

import firebase from 'firebase'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {

    }
  },
  created () {
    this.$q.loading.show({
      spinnerSize: 200, // in pixels
      spinnerColor: 'orange'
    })
  },
  mounted () {
    var config = {
      apiKey: 'AIzaSyBnVm-EMwoY6GTOLt7vDx99chywobTrrTg',
      authDomain: 'turtur-cookappslab.firebaseapp.com',
      databaseURL: 'https://turtur-cookappslab.firebaseio.com',
      projectId: 'turtur-cookappslab',
      storageBucket: 'turtur-cookappslab.appspot.com',
      messagingSenderId: '118371064312'
    }

    firebase.initializeApp(config)

    if (!this.currentUser) {
      firebase.auth().onAuthStateChanged((user) => {
        this.$q.loading.hide()
        if (user) {
          this.setCurrentUser(user)
          this.$router.replace('/main')
        } else {
          this.$router.replace('/login')
        }
      })
    }
  },
  methods: {
    ...mapMutations('cookappslab', [
      'setCurrentUser'
    ])
  },
  computed: {
    ...mapGetters('cookappslab', [
      'currentUser'
    ])
  }
}
</script>
