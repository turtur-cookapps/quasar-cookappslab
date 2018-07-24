<template>
  <q-page class="flex flex-center bg">
    <div class="row">
      <div class="col-12 text-center board">
        <h3>Welcome</h3>
        <h3>CookAppsLab!</h3>
      </div>
      <div class="col-12 text-center board">
        <q-btn color="white" size="lg" text-color="orange-8">Log in with Google</q-btn>
      </div>
      <div class="col-12 text-center board">
        <h6>Log in with email</h6>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
@import '~variables'
.bg
  background-color $orange
.board
  background-color $orange-7
.board > h3
  color white
  font-weight bold
.board > h6
  color rgba(255, 255, 255, 0.5); 
  font-weight 100
</style>