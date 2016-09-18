import service from './<%=moduleName %>.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: '年级维护',
  dialog: {
    currentView: 'njadd',
    width: '300px',
    height: '200px',
    title: '新增',
    okEvent: 'njadd:ok'
  },
  buttonList: [{
    text: '新增',
    clickEvent: '<%=moduleName %>:buttonlist:add',
    primary: true
  }],
  simpleSearch: {
    placeholder: '请输入',
    searchEvent: '<%=moduleName %>:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: '您选择需要删除的信息吗？',
      okEvent: '<%=moduleName %>:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: '请选择需要删除的信息？'
    },
    del_success: {
      state: 'success',
      content: '删除成功！'
    }
  },
  emapCard: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html')
  }
};

// mutations
export const mutations = {
  [SET_TITLE](state, data) {
    state.title = data.title;
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  return dispatch(SET_TITLE, { title: title });
};
