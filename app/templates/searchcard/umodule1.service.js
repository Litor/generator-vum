let app = '<%=moduleName %>';

export default {
  api: {
    getList_meta: `../statics/meta-info/<%='${app}'%>_getList.json`,
    getList_action: `<%='${app}'%>_getList`,
    addOrEdit_meta: `../statics/meta-info/<%='${app}'%>_addOrEdit.json`,
    addOrEdit_action: `<%='${app}'%>_addOrEdit`,
    delete_meta: `../statics/meta-info/<%='${app}'%>_delete.json`,
    getList: `/jcsj-apps-web/<%='${app}'%>/getList`,
    delete: `/jcsj-apps-web/<%='${app}'%>/delete`,
    getByWid: `/jcsj-apps-web/${app}/getByWid`,
    addOrEdit: `/jcsj-apps-web/<%='${app}'%>/addOrEdit`
  },

  addOrEdit(info) {
    return Vue.http.post(this.api.addOrEdit, { <%=moduleName %>: info });
  },

  getByWid(wid) {
    return Vue.http.post(this.api.getByWid, { wid: wid }).then(function(datas) {
      return datas.data.datas.rows[0];
    });
  }
};
