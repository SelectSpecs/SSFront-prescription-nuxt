export default ({ store, $axios }) => {
  if (store.state.user.user) {
    $axios.setToken('Nm5zOXAyb3NyNTUwOTc3MnE3MW9wM3A5cm45cjI2cjI6', 'Basic');
    // $axios.onError(() => {
    //   // const code = parseInt(error.response && error.response.status);
    //   redirect('/error');
    // });
  }
};
