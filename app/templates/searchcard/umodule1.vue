<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <bh-search @search='search' :value.sync='ps.keyword' :placeholder='$t("<%=moduleName %>.placeholder")' style="width:500px"></bh-search>
      <div class="bh-mv-16">
        <bh-button type="primary" @click="add" :small="false">{{$t('<%=moduleName %>.buttonList.add')}}</bh-button>
        <bh-button type="primary" @click="del" :small="false">{{$t('<%=moduleName %>.buttonList.del')}}</bh-button>
      </div>
      <emap-card :options='ps.emapCard' v-ref:table></emap-card>
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './service'
import {EmapCard, bhSearch, bhButton} from 'bh-vue'

export default {
  components: { EmapCard, bhSearch, bhButton },

  computed: {
    ps(){
      return this.$store.state.<%=moduleName %>
    }
  },

  methods:{
    search(){
      this.$refs.table.reload({ searchContent: this.ps.keyword })
    },

    add() {
      Utils.dialog({
        currentView: '<%=moduleName %>',
        title: Vue.t('<%=moduleName %>.dialog.title')
      })
    },

    del() {

    },

    cardEdit(){

    },

    cardDel(){

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
