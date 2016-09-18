<template>
  <article bh-layout-role="single">
    <h2 v-html="pageopt.title"></h2>
    <section>
      <compTab :tabs="pageopt.tabs"></compTab>
    </section>
  </article>
</template>
<script>
import compTab from 'bh-vue/comp-tab/compTab.vue'

export default {
  components: { compTab},

  vuex: {
    getters: {
      pageopt: function(state) {
        return state.dwwh;
      }
    }
  }
}
</script>
