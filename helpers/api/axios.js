import axios from 'axios';

const setParams = (name, value) => {
  axios.defaults.headers.common[name] = value;
};

const deleteParams = (name) => {
  delete axios.defaults.headers.common[name];
};

export { setParams, deleteParams };
