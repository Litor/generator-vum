<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <simple-search v-ref:simplesearch :placeholder="$t('<%=moduleName %>.simpleSearch.placeholder')" :search-event="'<%=moduleName %>:search:top'"></simple-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-card :options='pageopt.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script>
import service from './<%=moduleName %>.service'
import EmapCard from 'bh-vue/emap-card/emapCard.vue'
import simpleSearch from 'bh-vue/simple-search/simpleSearch.vue'
import bhButton from 'bh-vue/bh-button/bhButton.vue'

export default {
  components: { EmapCard, simpleSearch, bhButton },

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.<%=moduleName %>
      }
    }
  },

  ready() {
    var self = this;
    $(this.$el).on('click', '.card-opt-button', function(e) {
      var row = $(this).data('row');
      var event = $(this).attr('data-event');
      self.$dispatch(event, row);
    })
  },

  methods:{
    add() {
      Vue.dialog({
        currentView: '<%=moduleName %>',
        okEvent: '_SUBPAGE_SAVE_EVENT_',
        title: Vue.t('<%=moduleName %>.dialog.title')
      })
    },

    del() {

    }
  },

  events: {
    '<%=moduleName %>:search:top': function() {
      var keyword = this.$refs.simplesearch.keyword
      this.$refs.table.reload({ searchContent: keyword })
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
