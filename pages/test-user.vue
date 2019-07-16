<template lang="html">
  <div>
    <user />
  </div>
</template>

<script>
import user from '~/components/user/user';

export default {
  components: {
    user,
  },
  async fetch({ store }) {
    await store.dispatch('user/fetch');
  },
};
</script>

<style lang="scss" scoped>
</style>
