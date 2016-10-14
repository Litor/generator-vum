import service from './<%=moduleName %>.service';

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
  toast: {
    del: {
      type: 'warning',
      title: Vue.t('<%=moduleName %>.toast.del'),
      okEvent: '<%=moduleName %>:toast:del'
    }
  },
  tip: {
    noselect: {
      state: 'warning',
      content: Vue.t('<%=moduleName %>.tip.noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('<%=moduleName %>.tip.del_success')
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
