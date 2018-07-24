<template>
  <div>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>CookAppsLab</q-toolbar-title>
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

export default {
  name: 'default-top',
  data () {
    return {
      
    }
  },
  methods: {
    openURL
  }
}
</script>