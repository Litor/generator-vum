<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <emap-form v-ref:form offset-top=0 :options="ps.options" :outline="ps.outline"></emap-form>
    </section>
    <footer>
      <a class="bh-btn bh-btn-primary waves-effect" @click="save()">保存</a>
      <a class="bh-btn bh-btn-default waves-effect" @click="cancel()">取消</a>
    </footer>
  </article>
</template>
<script type="text/ecmascript-6">
  import service from '../service'
  import emapForm from 'bh-vue/emap-form/emapForm.vue'

  export default {
    components: { emapForm },

    computed: {
      ps(){
        return this.$store.state.<%=moduleName %>
      },
    },

    methods:{
      setValue(val){
        this.$refs.form.setValue(val)
      },

      save(){
        var ret = this.$refs.form.validate()

        if (!ret) {
          return
        }
        var info = this.$refs.form.getValue()
        service.addOrEdit(info).then(({ data }) => {
          Utils.tip({
            state: 'success',
            content: Vue.t('<%=moduleName %>.saveSuccess')
          })
          Utils.propertyDialog('hide')
        })
      }
    }
  }
</script>
