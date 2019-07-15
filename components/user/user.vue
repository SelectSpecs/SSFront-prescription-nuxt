<template lang="html">
  <div class="user">
    <form @submit.prevent="submit">
      <input
        v-model="userData.first_name"
        type="text"
      >
      <input
        v-model="userData.last_name"
        type="text"
      >
      <button
        type="submit"
        name="button"
      >
        Save
      </button>
    </form>
    <div />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'User',

  data: () => ({
    userData: {

    },
  }),

  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
  },

  created() {
    this.userData = Object.assign({}, this.user.profile);
  },

  methods: {
    ...mapActions({
      edit: 'user/edit',
    }),

    submit() {
      this.edit(this.userData);
    },
  },
};
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dcdcdc;
    height: 100vh;
  }
  form {
    width: 600px;
    padding: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 50px;
      margin-bottom: 20px;
      font-size: 22px;
      padding: 20px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #dcdcdc;
    }
    button {
      width: 100%;
      font-size: 22px;
      background: pink;
      border-radius: 5px;
      border: 0;
      outline: none;
      height: 50px;
    }
  }
</style>
