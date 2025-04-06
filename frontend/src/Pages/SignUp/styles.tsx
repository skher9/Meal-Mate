import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { colors } from '../../Utils/theme';

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px); /* Subtract header height */
  background: linear-gradient(135deg, #FFF5EA, #FFD6AD);
  padding: 1rem;
`;

export const SignUpCard = styled.div`
  width: 100%;
  max-width: 450px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255, 163, 102, 0.2);

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-width: 90%;
  }
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
  gap: 1.25rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 8px;
    background-color: #ffffff;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
  }

  .MuiInputLabel-root {
    color: ${colors.textMain}cc;
    font-weight: 500;
    
    &.Mui-focused {
      color: ${colors.primary};
      font-weight: 600;
    }
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.primary};
    border-width: 2px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.textMain}40;
  }

  input::placeholder {
    color: ${colors.textMain}80;
    opacity: 1;
  }
`;

export const PasswordTip = styled.p`
  color: ${colors.textMain}99;
  font-size: 0.75rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

export const ErrorText = styled.p`
  color: ${colors.error};
  font-size: 0.75rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
`;

export const SignUpButton = styled(Button)`
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}ee);
  color: ${colors.textLight};
  font-weight: 500;
  padding: 12px;
  font-size: 1rem;
  text-transform: none;
  border-radius: 8px;
  margin-top: 1rem;
  
  &:hover {
    background: linear-gradient(90deg, #e85a00, #e85a00ee);
  }

  &:disabled {
    background: #cccccc;
    color: #666666;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${colors.textMain};
  font-size: 0.875rem;

  a {
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`; 