import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form, H1 } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function PasswordReset(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid E-mail');
    }
    if (!code) {
      formErrors = true;
      toast.error('Insert a valid code');
    }
    if (!password) {
      formErrors = true;
      toast.error('Insert your new password');
    }
    if (password !== passwordConfirm) {
      formErrors = true;
      toast.error('Confirmation failed');
    }

    if (formErrors) return;

    dispatch(actions.passwordResetRequest({ email, prevPath, code, password }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <H1>
        <h1>Password Reset</h1>
      </H1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <p>Insert your e-mail.</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Validation Code"
        />
        <p>Insert the code that has been sent to your e-mail.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <p>Insert your new password.</p>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm your new Password"
        />
        <p>Confirm your new password.</p>
        <button type="submit">Confirm</button>
      </Form>
    </Container>
  );
}
