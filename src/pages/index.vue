<template>
  <q-page class="flex flex-center">
    {{aaa}}
    <q-btn @click="onClick"></q-btn>
  </q-page>
</template>

<style>
</style>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  methods: {
    onClick () {
      console.log(this.$store)
    }
  },
  computed: {
    ...mapGetters('cookappslab', [
      'aaa'
    ])
  }
}
</script>
