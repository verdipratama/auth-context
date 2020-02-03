export default formData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.username === 'verdipratama' && formData.password === '123' ? true : false) {
        resolve(formData.username);
      } else {
        reject('Ups.. username and password is incorrect');
      }
    }, 2000);
  });
};
