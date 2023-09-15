import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import PasswordReset from '../pages/PasswordReset';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Students} isClosed={false} />
      <MyRoute exact path="/student/:id/edit" component={Student} isClosed />
      <MyRoute exact path="/student/:id/delete" component={Student} isClosed />
      <MyRoute exact path="/student/" component={Student} isClosed />
      <MyRoute exact path="/photos/:id" component={Photos} isClosed />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute
        exact
        path="/passwordRecovery"
        component={PasswordRecovery}
        isClosed={false}
      />{' '}
      <MyRoute
        exact
        path="/passwordRecovery/code"
        component={PasswordReset}
        isClosed={false}
      />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
