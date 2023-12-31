import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 20px;
    border: 1px solid ${colors.primaryDarkColor};

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
  .password {
    margin-bottom: 0px;
  }
`;

export const PasswordRecover = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
  margin-bottom: 20px;
  margin-top: 0px;
`;
