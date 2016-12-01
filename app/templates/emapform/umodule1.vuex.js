import service from '../service';

export const state = {
  options: {
    pagePath: service.api.demopagepath,
    modelName: service.api.demomodelname,
    outline: false,
    readonly: false,
    model: 'v'
  },
  outline: false
};
