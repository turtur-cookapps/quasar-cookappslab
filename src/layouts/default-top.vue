<template>
  <div>
  <q-layout>
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat dense @click="onClickMainIcon">CookAppsLab</q-btn>
        </q-toolbar-title>
        <q-btn v-if="this.currentUser" dense flat icon="menu" label="LogOut" @click=onClicklogOut></q-btn>
      </q-toolbar>
      <q-tabs v-if="this.currentUser" align="left">
        <q-route-tab
          icon="face"
          to="/user"
          exact
          slot="title"
          label="유저관리"
        />
        <q-route-tab
          icon="group"
          to="/group"
          exact
          slot="title"
          label="그룹관리"
        />
        <q-route-tab
          icon="filter_list"
          to="/datagen"
          exact
          slot="title"
          label="이벤트생성"
        />
        <q-route-tab
          icon="fast_forward"
          to="/test"
          exact
          slot="title"
          label="테스트"
        />
        <q-route-tab
          icon="show_chart"
          to="/chart"
          exact
          slot="title"
          label="챠트"
        />
      </q-tabs>
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
    onClicklogOut () {
      firebase.auth().signOut().then(() => {
        this.$q.dialog({title: 'ㅃㅃ!'}).then(() => {
          this.setCurrentUser(null)
          this.$router.replace('/')
        })
      })
    },
    onClickMainIcon () {
      this.$router.replace('/')
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
