<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-datatable :options='pageopt.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script>
import service from './<%=moduleName %>.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapDatatable, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.<%=moduleName %>
      },
    }
  },

  events: {
    '<%=moduleName %>:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    '<%=moduleName %>:buttonlist:add': function() {
      this.pageopt.paperDialog.title = Vue.t('<%=moduleName %>.paperDialog.add_title')
      Vue.paperDialog(this)
    },

    '<%=moduleName %>:buttonlist:del': function() {
      var checked = this.$refs.table.checkedRecords()
      this.pageopt.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip(this, 'noselect')
        return
      }
      Vue.toast(this, 'del')
    },

    '<%=moduleName %>:buttonlist:import': function() {
      Vue.dialog(this)
    },

    '<%=moduleName %>:table:detail': function(row) {
      this.pageopt.propertyDialog.title = row['name']
      Vue.propertyDialog(this)
    },

    '<%=moduleName %>:table:edit': function(row) {
      this.pageopt.paperDialog.title = Vue.t('<%=moduleName %>.paperDialog.edit_title')
      Vue.paperDialog(this)
      this.$broadcast('addedit:setvalue', row)
    },

    '<%=moduleName %>:table:del': function(row) {
      this.pageopt.selectedRows = [row]
      Vue.toast(this, 'del')
    },

    '<%=moduleName %>:toast:del': function() {
      var checked = this.pageopt.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip(this, 'del_success')
        this.$refs.table.reload()
      })
    }
    
  }
}
</script>
