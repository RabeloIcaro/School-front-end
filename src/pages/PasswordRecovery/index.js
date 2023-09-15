import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

export default function PasswordRecovery(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid E-mail');
    }
    if (formErrors) return;

    dispatch(actions.passwordRestoreRequest({ email, prevPath }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Please, insert your e-mail.</h1>
      <p>A validation code will be sent.</p>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
        />
        <button type="submit">Log in</button>
      </Form>
    </Container>
  );
}
