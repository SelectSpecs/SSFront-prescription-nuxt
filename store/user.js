export const state = () => ({
  user: null,
});

export const getters = {
  get: state => name => state.user[name] || false,
};

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  // async fetch({ commit }) {
  //   const params = {
  //     LoginForm: {
  //       username: 'lwswnnscrm@gmail.com',
  //       password: 'qcq2008op',
  //     },
  //   };
  //   const { data, status } = await post(apiUrls.login, params);
  //   if (status) {
  //     // setParams('Authorization', data.token);
  //     commit('SET_USER', data);
  //   }
  // },

  async exit({ commit }) {
    this.$axios.setToken(false);
    commit('SET_USER', null);
  },

  async edit({ state, commit }, dataObj) {
    const obj = {
      password: 'qcq2008op',
      profile: {
        ...dataObj,
      },
    };
    const { data, status } = await this.$axios.put(`https://yii.omnismain.com/rest/users/${state.user.user_number}`, obj);
    if (status) {
      commit('SET_USER', data);
    }
  },
};
