import service from '../service';

export const state = {
  currentEditRow: {},
  selectedRows: [],
  emapDatatable: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    params: {searchContent: ''},
    method: 'POST',
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function (row, column, value, rowData) {
          return value ? '有效' : '无效';
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    schema: false,
    operations: {
      title: Vue.t('<%=moduleName %>.table.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('<%=moduleName %>.table.opt_edit'),
        name: 'edit',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.table.opt_delete'),
        name: 'del',
        type: 'link'
      }]
    }
  }
};
