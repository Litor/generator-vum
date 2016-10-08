<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <simple-search v-ref:simplesearch :simple-search="pageopt.simpleSearch"></simple-search>
      <button-list :button-list="pageopt.buttonList"></button-list>
      <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script>
import service from './<%=moduleName %>.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import buttonList from 'bh-vue/button-list/buttonList.vue'

export default {
  components: { EmapCard, simpleSearch, buttonList },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.<%=moduleName %>
      }
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.opt-button', function(e) {
      var rowId = $(this).attr('data-id');
      var event = $(this).attr('data-event');
      self.$dispatch(event, rowId);
    })
  },

  events: {
    '<%=moduleName %>:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
    },

    '<%=moduleName %>:buttonlist:add': function() {
      Vue.dialog(this)
    },

    '<%=moduleName %>:card:edit':function(id){
      alert(id)
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
