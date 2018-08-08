<template>
  <q-page class="flex flex-center bg">
    <div class="row">
      <div class="col-12 text-center board">
        <h3>Welcome</h3>
        <h3>CookAppsLab!</h3>
      </div>
      <div class="col-12 text-center board">
        <q-btn @click="onClickLoginBtn" color="white" size="lg" text-color="orange-8">Log in with Google</q-btn>
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
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Index',
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
    this.initFirebase(this.config)
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.showLoading()
      this.redirectLoginFirebase().then(this.goToMain).catch(this.hideLoading)
    },
    onClickLoginBtn () {
      this.showLoading()
      this.loginFirebase().then(this.goToMain)
    },
    goToMain () {
      this.hideLoading()
      this.$router.push('/main')
    },

    showLoading () {
      this.$q.loading.show({
        spinnerSize: 200, // in pixels
        spinnerColor: 'orange'
      })
    },
    hideLoading () {
      this.$q.loading.hide()
    },

    ...mapMutations('cookappslab', [
      'setCurrentUser'
    ]),
    ...mapActions('cookappslab', [
      'initFirebase',
      'loginFirebase',
      'redirectLoginFirebase'
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
