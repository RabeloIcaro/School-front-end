import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      console.log(formErrors);
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      console.log(formErrors);
      formErrors = true;
      toast.error('Invalid E-mail');
    }
    if (password.length < 6 || password.length > 50) {
      console.log(formErrors);
      formErrors = true;
      toast.error('Your password must be between 6 and 50 caracters');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome: name,
        email,
        password,
      });
      toast.success('Login successful!');
      history.push('/login');
    } catch (err) {
      // const status = get(er, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
          />
        </label>
        <label htmlFor="email">
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your Email"
          />
        </label>
        <label htmlFor="password">
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>

        <button type="submit">Create your Account</button>
      </Form>
    </Container>
  );
}
