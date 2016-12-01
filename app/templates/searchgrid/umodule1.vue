<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <bh-search @search='search' :value.sync='ps.emapGrid.searchContent' :placeholder='$t("<%=moduleName %>.placeholder")' style="width:500px"></bh-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-grid :options='ps.emapGrid' v-ref:grid @edit="gridEdit" @del="gridDel"></emap-grid>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './service'
import {EmapGrid, bhSearch, bhButton} from 'bh-vue'

export default {
  components: { EmapGrid, bhSearch, bhButton },

  computed: {
    ps(){
      return this.$store.state.<%=moduleName %>
    },
  },

  methods:{
    add() {
      this.ps.paperDialog.title = Vue.t('<%=moduleName %>.paperDialog.add_title')
      Utils.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.add_title')
      })
    },

    del() {
      this.ps.selectedRows = this.$refs.grid.getGrid().checkedRecords()

      if (this.ps.selectedRows.length === 0) {
        Utils.tip({
          state: 'warning',
          content: Vue.t('<%=moduleName %>.onSelect')
        })
        return
      }

      Utils.toast({
        type: 'warning',
        title: Vue.t('<%=moduleName %>.toast.del'),
        okEvent: '<%=moduleName %>:toast:del'
      })
    },

    search(){
      this.$refs.grid.reload()
    },

    gridEdit(){
      Utils.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.edit_title')
      })
      Ubase.invoke('addedit.setValue', row)
    },

    gridDel(){
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
        this.$refs.grid.reload()
      })
    }
  }
}
</script>
<style type="text/css">
.<%=moduleName %>-card-value {
  width: 106px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.<%=moduleName %>-card .sc-panel-thingNoImg-1-container {
  padding-right: 4px;
}

.<%=moduleName %>-card .sc-panel-thingNoImg-1-title {
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  margin-right: 0;
  vertical-align: middle;
}
</style>
