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
    okEvent: '_SUBPAGE_SAVE_EVENT_',
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
    text: Vue.t('<%=moduleName %>.simpleSearch.text'),
    searchEvent: '<%=moduleName %>:search:top'
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
  },
  selectedRows: [],
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
      title: Vue.t('<%=moduleName %>.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('<%=moduleName %>.table.opt_edit'),
        name: '<%=moduleName %>:table:edit',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.table.opt_detail'),
        name: '<%=moduleName %>:table:detail',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.table.opt_delete'),
        name: '<%=moduleName %>:table:del',
        type: 'link'
      }]
    }
  }
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
