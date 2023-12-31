import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { Form, PasswordRecover } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid E-mail');
    }
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid password');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
        />
        <input
          className="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <PasswordRecover to="/passwordRecovery">
          Forgot password
        </PasswordRecover>

        <button type="submit">Log in</button>
      </Form>
    </Container>
  );
}
