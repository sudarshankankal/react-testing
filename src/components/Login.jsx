import React, { useState } from 'react';

export const Login = ({ onSubmit }) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    //do all the default login activities and then call the onsubmit prop method
    // onSubmit();
  };
  return (
    <div>
      <input
        type="text"
        value={email}
        name="email"
        onChange={(e) => updateEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={(e) => updatePassword(e.target.value)}
      />
      <button type="submit" name="submit" onClick={(e) => handleLogin(e)}>
        Login
      </button>
    </div>
  );
};