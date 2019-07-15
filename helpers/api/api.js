import axios from 'axios';

const get = async (link = '', params = {}) => {
  try {
    const { data } = await axios.get(link, { params });
    return { data, status: true };
  } catch (error) {
    return { data: error, status: false };
  }
};
const post = async (link = '', objData = {}) => {
  try {
    const { data } = await axios.post(link, objData);
    return { data, status: true };
  } catch (error) {
    return { data: error, status: false };
  }
};
const put = async (link = '', objData = {}) => {
  try {
    const { data } = await axios.put(link, objData);
    return { data, status: true };
  } catch (error) {
    return { data: error, status: false };
  }
};
const delet = async (link = '', objData = {}) => {
  try {
    const { data } = await axios.delete(link, objData);
    return { data, status: true };
  } catch (error) {
    return { data: error, status: false };
  }
};
const patch = async (link = '', objData = {}) => {
  try {
    const { data } = await axios.patch(link, objData);
    return { data, status: true };
  } catch (error) {
    return { data: error, status: false };
  }
};

export {
  get,
  post,
  put,
  delet,
  patch,
};
