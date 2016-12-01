<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      <comp-tab :tabs="ps.tabs"></comp-tab>
    </section>
  </article>
</template>
<script  type="text/ecmascript-6">
import {compTab} from 'bh-vue'

export default {
  components: { compTab},

  computed: {
    ps(){
      return this.$store.state.<%=moduleName %>
    },
  },
}
</script>
