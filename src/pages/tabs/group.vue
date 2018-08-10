<template>
  <q-page class="flex flex-left">
    <div>
    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedSecond"
      row-key="uid"
      color="secondary"
    >
    </q-table>
    <q-input value="" ref="inputName" float-label="name" placeholder="name"/>
    <q-input value="" ref="inputType" float-label="type" placeholder="type"/>
    <q-input value="" ref="inputMail" float-label="mail" placeholder="mail"/>
    <q-btn label="create" @click="this.addUser"></q-btn>
    </div>
  </q-page>
</template>

<style>
</style>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Group',
  data () {
    return {
      tableData: [],
      columns: /* array of Objects */ [
        { id: 'uid', label: 'uid', field: 'uid', required: true, align: 'left', sortable: true },
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

      ],
      inputTextUserData: {
        name: 'a',
        type: 'a',
        mail: 'a'
      }
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.replace('/')
    }
    this.getUsers().then((users) => {
      this.tableData = users
    })
    // this.setUser('user1', {name:'user1', data1:'data1', data2:'data2'})
  },
  methods: {
    addUser () {
      this.inputTextUserData.name = this.$refs.inputName.model
      this.inputTextUserData.type = this.$refs.inputType.model
      this.inputTextUserData.mail = this.$refs.inputMail.model
      this.setUser(this.inputTextUserData).then((snap) => {
        this.$q.dialog({title: '완료!'}).then(() => {
          this.$refs.inputName.model = ''
          this.$refs.inputType.model = ''
          this.$refs.inputMail.model = ''
          this.reloadTable()
        })
      })
    },
    reloadTable () {
      this.getUsers().then((users) => {
        this.tableData = users
      })
    },
    ...mapActions('cookappslab', [
      'getUsers',
      'setUser'
    ])
  },
  computed: {
    ...mapGetters('cookappslab', [
      'currentUser',
      'users'
    ])
  }
}
</script>
