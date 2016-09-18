import service from './<%=moduleName %>.service';
const SET_TITLE = 'SET_TITLE';

// init state
export const state = {
  title: Vue.t('<%=moduleName %>.title'),
  paperDialog: {
    currentView: '_SUBPAGE_',
    title: Vue.t('<%=moduleName %>.paperdialog_add_title')
  },
  propertyDialog: {
    currentView: '_SUBPAGE_',
    okEvent: '_SUBPAGE_SAVE_EVENT_',
    title: Vue.t('<%=moduleName %>.propertydialog_title'),
    footerShow: false
  },
  dialog: {
    currentView: '_SUBPAGE_',
    title: Vue.t('<%=moduleName %>.dialog_title')
  },
  buttonList: [{
    text: Vue.t('<%=moduleName %>.button_add'),
    clickEvent: '<%=moduleName %>:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('<%=moduleName %>.button_delete'),
    clickEvent: '<%=moduleName %>:buttonlist:del'
  }, {
    text: Vue.t('<%=moduleName %>.button_import'),
    clickEvent: '<%=moduleName %>:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('<%=moduleName %>.search_placeholder'),
    searchEvent: '<%=moduleName %>:search:top'
  },
  tipDialog: {
    del: {
      type: 'warning',
      title: Vue.t('<%=moduleName %>.tipDialog_del_title'),
      okEvent: '<%=moduleName %>:tipdialog:del'
    }
  },
  tipPop: {
    noselect: {
      state: 'warning',
      content: Vue.t('<%=moduleName %>.tipPop_noselect')
    },
    del_success: {
      state: 'success',
      content: Vue.t('<%=moduleName %>.tipPop_del_success')
    }
  },
  emapDatatable: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    method: 'POST',
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function(row, column, value, rowData) {
          return value ? '有效' : '无效';
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: Vue.t('<%=moduleName %>.table_opt'),
      width: 150,
      items: [{
        title: Vue.t('<%=moduleName %>.table_opt_edit'),
        name: '<%=moduleName %>:table:edit',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.table_opt_detail'),
        name: '<%=moduleName %>:table:detail',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.table_opt_delete'),
        name: '<%=moduleName %>:table:del',
        type: 'link'
      }]
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
