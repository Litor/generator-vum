import service from './<%=moduleName %>.service';

// initial state
export const state = {
  title: Vue.t('<%=moduleName %>.title'),
  tabs: [
    { title: Vue.t('<%=moduleName %>.tab1'), component: 'zywh' },
    { title: Vue.t('<%=moduleName %>.tab2'), component: 'xzwh' }
  ]
};

// actions
export const setTitle = ({ actions, dispatch }, title) => {
  state.title = title;
};
