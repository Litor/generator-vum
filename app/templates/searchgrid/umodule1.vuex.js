import service from './<%=moduleName %>.service';

export const state = {
  keyword: '',
  selectedRows: [],
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
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: Vue.t('<%=moduleName %>.grid.opt_title'),
      width: 150,
      items: [{
        title: Vue.t('<%=moduleName %>.grid.opt_edit'),
        name: '<%=moduleName %>:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.grid.opt_detail'),
        name: '<%=moduleName %>:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('<%=moduleName %>.grid.opt_delete'),
        name: '<%=moduleName %>:grid:del',
        type: 'link'
      }]
    }
  }
};
