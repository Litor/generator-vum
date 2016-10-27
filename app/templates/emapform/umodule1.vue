<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <emap-form v-ref:form offset-top=0 :options="pageState.options" :outline="pageState.outline"></emap-form>
    </section>
    <footer>
      <a class="bh-btn bh-btn-primary waves-effect" @click="save()">保存</a>
      <a class="bh-btn bh-btn-default waves-effect" @click="cancel()">取消</a>
    </footer>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './<%=moduleName %>.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageState: function(state) {
        return state.<%=moduleName %>
      }
    }
  },

  events: {
    '<%=moduleName %>:setvalue': function(val) {
      this.$refs.form.setValue(val)
    },
    '<%=moduleName %>:save': function() {
      var ret = this.$refs.form.validate()
      
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.addOrEdit(info).then(({ data }) => {
        Vue.tip({
          state: 'success',
          content: Vue.t('<%=moduleName %>.tip.save_success')
        })
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
