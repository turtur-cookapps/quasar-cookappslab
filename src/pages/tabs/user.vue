<template>
  <q-page class="flex flex-left">
      <div class="col-2">
        <q-list>
          <q-list-header>Users</q-list-header>
          <q-item v-for="user in this.users" :key="user.uid">
            <q-item-side left inverted :letter=user.name.substring(0,1) />
            <q-item-main :label=user.name />
            <q-item-main :label=user.type />
            <q-item-side right icon="delete" color="gray" />
          </q-item>
        </q-list>
      </div>
      <div class="col-10 flex">
        들어갈 내용
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
      this.$router.replace('/')
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters('cookappslab', [
      'currentUser',
      'users'
    ])
  }
}
</script>
