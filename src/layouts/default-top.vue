<template>
  <div>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>CookAppsLab</q-toolbar-title>
        <q-btn v-if="this.currentUser" dense flat icon="menu" label="LogOut" @click=onClickForlogOut></q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import firebase from 'firebase'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'default-top',
  data () {
    return {
    }
  },
  methods: {
    openURL,
    onClickForlogOut () {
      firebase.auth().signOut().then(() => {
        this.$q.dialog({title: 'ㅃㅃ!'}).then(() => {
          this.setCurrentUser(null)
          this.$router.push('/login')
        })
      })
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
