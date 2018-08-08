<template>
  <q-page class="flex flex-center">
    <div>
      <h4>대시보드 들어갈 자리</h4>
    </div>
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
    if (!this.currentUser) {
      // this.$router.replace('/')
    }
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
