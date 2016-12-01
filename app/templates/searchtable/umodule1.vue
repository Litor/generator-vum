<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('<%=moduleName %>.simpleSearch.placeholder')" :search-event="'<%=moduleName %>:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-datatable :options='pageState.emapDatatable' v-ref:table></emap-datatable>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './<%=moduleName %>.service'
import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapDatatable, simpleSearch, bhButton },

  computed: {
    ps(){
      return this.$store.state.<%=moduleName %>
    },
  },

  methods:{
    add() {
      this.pageState.paperDialog.title = Vue.t('<%=moduleName %>.paperDialog.add_title')
      Vue.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.add_title')
      })
    },

    del() {
      var checked = this.$refs.table.checkedRecords()
      this.pageState.selectedRows = checked
      if (checked.length === 0) {
        Vue.tip({
          state: 'warning',
          content: Vue.t('<%=moduleName %>.tip.noselect')
        })
        return
      }
      Vue.toast({
        type: 'warning',
        title: Vue.t('<%=moduleName %>.toast.del'),
        okEvent: '<%=moduleName %>:toast:del'
      })
    }
  },

  events: {
    '<%=moduleName %>:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    '<%=moduleName %>:table:detail': function(row) {
      this.pageState.propertyDialog.title = row['name']
      Vue.propertyDialog({
        currentView: '<%=moduleName %>',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('<%=moduleName %>.propertyDialog.title'),
        footerShow: false
      })
    },

    '<%=moduleName %>:table:edit': function(row) {
      Vue.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.edit_title')
      })
      Vue.broadcast('addedit:setvalue', row)
    },

    '<%=moduleName %>:table:del': function(row) {
      this.pageState.selectedRows = [row]
      Vue.toast({
        type: 'warning',
        title: Vue.t('<%=moduleName %>.toast.del'),
        okEvent: '<%=moduleName %>:toast:del'
      })
    },

    '<%=moduleName %>:toast:del': function() {
      var checked = this.pageState.selectedRows
      var wids = []

      checked.forEach((item) => {
        wids.push(item.wid)
      })

      service.delete(wids).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('<%=moduleName %>.tip.del_success')
        })
        this.$refs.table.reload()
      })
    }
    
  }
}
</script>
