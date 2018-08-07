<template>
  <q-page class="flex flex-center">
    <h6>{{this.currentUser.displayName}}</h6>
  </q-page>
</template>

<style>
</style>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  computed: {
    ...mapGetters('cookappslab', [
      'currentUser'
    ])
  }
}
</script>
