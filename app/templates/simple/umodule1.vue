<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      helloworld
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
import service from './<%=moduleName %>.service'

export default {
  components: {},

  vuex: {
    getters: {
      pageState: function(state) {
        return state.<%=moduleName %>
      },
    }
  },

  events: {
    
  }
}
</script>
