import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControlLabel, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {
  SignInContainer,
  SignInCard,
  HeadingSection,
  FormContainer,
  StyledTextField,
  RememberMeContainer,
  StyledCheckbox,
  SignInButton,
  BottomText
} from './styles';

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sign in logic here
  };

  return (
    <SignInContainer>
      <SignInCard>
        <HeadingSection>
          <h2>Welcome Back to MealMate</h2>
          <p>Plan your meals with ease 🍲</p>
        </HeadingSection>

        <FormContainer onSubmit={handleSubmit}>
          <StyledTextField
            label="Email"
            type="email"
            placeholder="you@example.com"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            label="Password"
            type="password"
            placeholder="••••••••"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />

          <RememberMeContainer>
            <FormControlLabel
              control={
                <StyledCheckbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Link to="/forgot-password">Forgot Password?</Link>
          </RememberMeContainer>

          <SignInButton
            type="submit"
            variant="contained"
            fullWidth
          >
            Sign In
          </SignInButton>
        </FormContainer>

        <BottomText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </BottomText>
      </SignInCard>
    </SignInContainer>
  );
};

export default SignIn; 