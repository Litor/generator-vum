import service from './<%=moduleName %>.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('<%=moduleName %>.title'),
  paperDialog: {
    currentView: '<%=moduleName %>',
    title: Vue.t('<%=moduleName %>.paperDialog.add_title')
  },
  propertyDialog: {
    currentView: '<%=moduleName %>',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('<%=moduleName %>.propertyDialog.title'),
    footerShow: false
  },
  dialog: {
    currentView: '<%=moduleName %>',
    title: Vue.t('<%=moduleName %>.dialog.title')
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('<%=moduleName %>.tipDialog.del'),
      okEvent: '<%=moduleName %>:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('<%=moduleName %>.tipPop.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('<%=moduleName %>.tipPop.del_success')
    }
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
