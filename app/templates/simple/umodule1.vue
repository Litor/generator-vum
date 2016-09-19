<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      helloworld
    </section>
  </article>
</template>
<script>
import service from './<%=moduleName %>.service'

export default {
  components: {},

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.<%=moduleName %>
      },
    }
  },

  events: {
    
  }
}
</script>
