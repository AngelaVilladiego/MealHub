import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/signup', {  // replace with your Flask app's URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(formData),
    body: 
    {
        "username": "testuser3",
        "password": "testpassword3"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // handle response here
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;
