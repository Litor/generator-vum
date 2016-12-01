<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <bh-search @search='search' :value.sync='ps.emapDatatable.searchContent' :placeholder='$t("<%=moduleName %>.placeholder")' style="width:500px"></bh-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-datatable :options='ps.emapDatatable' v-ref:table @edit="tableEdit" @del="tableDel"></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from '../service'
import {EmapDatatable, bhSearch, bhButton} from 'bh-vue'

export default {
  components: { EmapDatatable, bhSearch, bhButton },

  computed: {
    ps(){
      return this.$store.state.<%=moduleName %>
    },
  },

  methods:{
    search(){
      this.$refs.table.reload()
    },

    add() {
      this.ps.paperDialog.title = Vue.t('<%=moduleName %>.paperDialog.add_title')
      Utils.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.add_title')
      })
    },

    del() {
      this.ps.selectedRows = this.$refs.table.checkedRecords()

      if (this.ps.selectedRows.length === 0) {
        Utils.tip({
          state: 'warning',
          content: Vue.t('<%=moduleName %>.tip.noselect')
        })
        return
      }

      Utils.toast({
        type: 'warning',
        title: Vue.t('<%=moduleName %>.toast.del'),
        okEvent: '<%=moduleName %>:toast:del'
      })
    },

    tableEdit(){
      Utils.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.edit_title')
      })
      Ubase.invoke('addedit.setValue', row)
    },

    tableDel(){
      this.ps.selectedRows = [row]
      Utils.toast({
        type: 'warning',
        title: Vue.t('<%=moduleName %>.toast.del'),
        okEvent: '<%=moduleName %>.doDelete'
      })
    },

    doDelete(){
      var checked = this.ps.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Utils.tip({
          state: 'success',
          content: Vue.t('<%=moduleName %>.tip.delSuccess')
        })
        this.$refs.table.reload()
      })
    }
  }
}
</script>
