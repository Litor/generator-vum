<template>
  <article bh-layout-role="single">
    <h2>{{$t('<%=moduleName %>.title')}}</h2>
    <section>
      helloworld
    </section>
  </article>
</template>
<script type="text/ecmascript-6">
  import service from '../service'

  export default {
    components: {},

    computed: {
      ps(){
        return this.$store.state.<%=moduleName %>
      },
    },

    methods: {

    }
  }
</script>
