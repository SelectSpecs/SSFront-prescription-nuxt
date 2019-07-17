const cookie = (cook, name) => {
  const cookieString = `; ${cook}`;
  const result = cookieString.split(`; ${name}=`);
  return result.length === 2 ? result.pop().split(';').shift() : false;
};

export default cookie;
