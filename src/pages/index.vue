<template>
  <q-page class="flex flex-center bg">
    <div class="row">
      <div class="col-12 text-center board">
        <h3>Welcome</h3>
        <h3>CookAppsLab!</h3>
      </div>
      <div class="col-12 text-center board">
        <q-btn @click="onClick" color="white" size="lg" text-color="orange-8">Log in with Google</q-btn>
      </div>
      <div class="col-12 text-center board" >
        <h6>Log in with email</h6>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import firebase from 'firebase'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      config: {
        apiKey: 'AIzaSyBnVm-EMwoY6GTOLt7vDx99chywobTrrTg',
        authDomain: 'turtur-cookappslab.firebaseapp.com',
        databaseURL: 'https://turtur-cookappslab.firebaseio.com',
        projectId: 'turtur-cookappslab',
        storageBucket: 'turtur-cookappslab.appspot.com',
        messagingSenderId: '118371064312'
      }
    }
  },
  mounted () {
    this.showLoading()
    this.connectFirebase()
  },
  methods: {
    showLoading () {
      this.$q.loading.show({
        spinnerSize: 200, // in pixels
        spinnerColor: 'orange'
      })
    },
    connectFirebase () {
      if (!this.currentUser) {
        firebase.initializeApp(this.config)
        firebase.auth().onAuthStateChanged((user) => {
          this.$q.loading.hide()
          if (user) {
            this.setCurrentUser(user)
            this.$router.replace('/main')
          }
        })
      } else {
        this.$q.loading.hide()
        this.$router.replace('/main')
      }
    },
    onClick () {
      if (!firebase.auth().currentUser) {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then((result) => {
          this.setCurrentUser(result.user)
          let user = this.currentUser
          this.$q.dialog({title: '가입완료!', message: user.displayName}).then(() => {
            this.$router.push('/main')
          })
        })
      }
    },
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

<style lang="stylus">
@import '~variables'
.bg
  background-color $orange-1
.board
  background-color $orange-5
.board > h3
  color white
  font-weight bold
.board > h6
  color rgba(255, 255, 255, 0.5)
  font-weight 100
  text-decoration line-through
</style>
