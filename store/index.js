import { setParams } from '~/helpers/api/axios';

export const state = () => ({

});

export const actions = {
  async nuxtServerInit() {
    setParams('Content-Type', 'application/json;charset=UTF-8');
  },
};
