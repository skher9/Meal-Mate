import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { colors } from '../../Utils/theme';

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px); /* Subtract header height */
  background: linear-gradient(135deg, #FFF5EA, #FFD6AD);
  padding: 1rem;
`;

export const ForgotPasswordCard = styled.div`
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255, 163, 102, 0.2);
`;

export const HeadingSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: ${colors.textMain};
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textMain}cc;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${colors.primary};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.primary};
  }
`;

export const SubmitButton = styled(Button)`
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}ee);
  color: ${colors.textLight};
  font-weight: 500;
  padding: 12px;
  font-size: 1rem;
  text-transform: none;
  border-radius: 8px;
  margin-top: 0.5rem;
  
  &:hover {
    background: linear-gradient(90deg, #e85a00, #e85a00ee);
  }
`;

export const BackToSignIn = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`; 