import service from './service';

export const state = {
  selectedRows: [],
  emapGrid: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html'),
    params:{searchContent: ''},
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
        name: 'edit',
        type: 'link'
      },{
        title: Vue.t('<%=moduleName %>.grid.opt_del'),
        name: 'del',
        type: 'link'
      }]
    }
  }
};
