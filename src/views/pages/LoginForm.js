import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
