import { setParams } from '~/helpers/api/axios';

export default ({ store }) => {
  if (store.state.user.user) {
    setParams('Authorization', 'Basic Nm5zOXAyb3NyNTUwOTc3MnE3MW9wM3A5cm45cjI2cjI6');
  }
};
