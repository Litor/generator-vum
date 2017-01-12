let apiRootPath = 'apiRootPath';
let apiBaseName = '<%=moduleName %>';

export default {
  api: {
    demo: `/<%='${apiRootPath}'%>/<%='${apiBaseName}'%>/demo`
  },

  post(api, params){
    return Utils.post(this.api[api], params)
  }
};
