<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('<%=moduleName %>.simpleSearch.placeholder')" :search-event="'<%=moduleName %>:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-grid :options='pageState.emapGrid' v-ref:grid></emap-grid>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './<%=moduleName %>.service'
import EmapGrid from 'bh-vue/emap-grid/emapGrid.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapGrid, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.<%=moduleName %>
      },
    }
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
      var checked = this.$refs.grid.getGrid().checkedRecords()
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
      this.$refs.grid.reload({ searchContent: keyword })
    },

    '<%=moduleName %>:grid:detail': function(row) {
      this.pageState.propertyDialog.title = row['name']
      Vue.propertyDialog({
        currentView: '<%=moduleName %>',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('<%=moduleName %>.propertyDialog.title'),
        footerShow: false
      })
    },

    '<%=moduleName %>:buttonlist:import': function() {
      Vue.dialog({
        currentView: '<%=moduleName %>',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('<%=moduleName %>.dialog.title')
      })
    },

    '<%=moduleName %>:grid:edit': function(row) {
      Vue.paperDialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.paperDialog.edit_title')
      })
      Vue.broadcast('addedit:setvalue', row)
    },

    '<%=moduleName %>:grid:del': function(row) {
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
        this.$refs.grid.reload()
      })
    },

    '<%=moduleName %>:card:edit':function(row){
      console.log(row)
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
