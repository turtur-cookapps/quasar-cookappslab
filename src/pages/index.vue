<template>
  <q-page class="flex flex-center">
    {{$store.getters.example.aaa}}
    <q-btn @click="onClick"></q-btn>
  </q-page>
</template>

<style>
</style>

<script>
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
  }
}
</script>
