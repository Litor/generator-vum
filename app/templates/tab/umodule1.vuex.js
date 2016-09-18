import service from './<%=moduleName %>.service';
const SET_TITLE = 'SET_TITLE';

// initial state
export const state = {
  title: Vue.t('<%=moduleName %>.title'),
  tabs: [
    { title: Vue.t('<%=moduleName %>.tab1'), component: 'zywh' },
    { title: Vue.t('<%=moduleName %>.tab2'), component: 'xzwh' }
  ]
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
