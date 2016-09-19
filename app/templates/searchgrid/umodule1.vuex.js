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
  buttonList: [{
    text: Vue.t('<%=moduleName %>.buttonList.add'),
    clickEvent: '<%=moduleName %>:buttonlist:add',
    primary: true
  }, {
    text: Vue.t('<%=moduleName %>.buttonList.del'),
    clickEvent: '<%=moduleName %>:buttonlist:del'
  }, {
    text: Vue.t('<%=moduleName %>.buttonList.import'),
    clickEvent: '<%=moduleName %>:buttonlist:import'
  }],
  simpleSearch: {
    placeholder: Vue.t('<%=moduleName %>.simpleSearch.placeholder'),
    text:Vue.t('<%=moduleName %>.simpleSearch.text'),
    searchEvent: '<%=moduleName %>:search:top'
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
  },
  emapGrid: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html'),
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
    }, {
      colIndex: 'last',
      type: 'tpl',
      width: 300,
      column: {
        text: Vue.t('<%=moduleName %>.grid.opt_title'),
        cellsRenderer: function(row, column, value, rowData) {
          return "<a href='javascript:void(0)' data-name='<%=moduleName %>:grid:edit'  class='opt-button' style='padding: 0 5px;' data-row=" + JSON.stringify(rowData) + ">编辑</a>"
        }
      }
    }],
    sortable: true,
    columnsReorder: true
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
