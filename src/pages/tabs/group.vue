<template>
  <q-page class="flex flex-left">
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedSecond"
      row-key="name"
      color="secondary"
    >
    </q-table>
  </q-page>
</template>

<style>
</style>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Group',
  data () {
    return {
      tableData: [
        {
          name: 'user1',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user2',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user3',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user4',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user5',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user6',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user7',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user8',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user9',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        },
        {
          name: 'user10',
          mail: 'a@a.com',
          team: 'teamA',
          param1: 0,
          param2: 0,
          param3: 0,
          param4: 0,
          param5: 0
        }
      ],
      columns: /* array of Objects */ [
        { name: 'name', label: 'name', field: 'name', required: true, align: 'left', sortable: true },
        { name: 'team', label: 'team', field: 'team', sortable: true },
        { name: 'mail', label: 'mail', field: 'mail', sortable: true },
        { name: 'param1', label: 'param1', field: 'param1' },
        { name: 'param2', label: 'param2', field: 'param2' },
        { name: 'param3', label: 'param3', field: 'param3' },
        { name: 'param4', label: 'param4', field: 'param4', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'param5', label: 'param5', field: 'param5', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      selectedSecond: [

      ]
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.replace('/')
    }
  },
  methods: {
    deleteRow () {

    }
  },
  computed: {
    ...mapGetters('cookappslab', [
      'currentUser',
      'users'
    ])
  }
}
</script>
