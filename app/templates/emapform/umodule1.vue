<template>
  <emap-form v-ref:form offset-top=0 :options="pageopt.options" :outline="pageopt.outline"></emap-form>
</template>
<script>
import service from './<%=moduleName %>.service'
import EmapForm from 'bh-vue/emap-form/emapForm.vue'

export default {
  components: { EmapForm },

  vuex: {
    getters: {
      pageopt: function(state) {
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
      console.log(ret)
      if (!ret) {
        return
      }
      var info = this.$refs.form.getValue()
      service.campusAddOrEdit(info).then(({ data }) => {
        Vue.tipPop(this, 'save_success')
        Vue.propertyDialog('hide')
      })
    }
  }
}
</script>
