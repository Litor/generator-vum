let apiRootPath = 'jcsj-apiBaseNames-web';
let apiBaseName = '<%=moduleName %>';

export default {
  api: {
    demo: `/<%='${apiRootPath}'%>/<%='${apiBaseName}'%>/demo`
  },

  demo(params) {
    return Vue.http.post(this.api.demo, params).then(function(datas) {
      return datas.data;
    });
  }
};
