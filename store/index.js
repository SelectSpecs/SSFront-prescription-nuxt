import cookie from '~/helpers/cookie';

export const state = () => ({

});

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const user = cookie(req.headers.cookie, 'user');
    commit('user/SET_USER', JSON.parse(user), { root: true });
  },
};
