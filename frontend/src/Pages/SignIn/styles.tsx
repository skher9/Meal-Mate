import styled from 'styled-components';
import { colors } from '../../Utils/theme';
import { Button, TextField, Checkbox } from '@mui/material';

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF5EA, #FFD6AD);
  padding: 1rem;
`;

export const SignInCard = styled.div`
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
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;

  a {
    color: ${colors.primary};
    text-decoration: none;
    font-size: 0.875rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: ${colors.primary};
  }
  
  &.Mui-checked {
    color: ${colors.primary};
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${colors.textMain};
  cursor: pointer;
`;

export const SignInButton = styled(Button)`
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}ee);
  color: ${colors.textLight};
  font-weight: 500;
  padding: 12px;
  font-size: 1rem;
  text-transform: none;
  border-radius: 8px;
  margin: 1rem 0;
  
  &:hover {
    background: linear-gradient(90deg, #e85a00, #e85a00ee);
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