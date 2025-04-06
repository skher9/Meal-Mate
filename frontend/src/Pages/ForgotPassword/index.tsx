import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import {
  ForgotPasswordContainer,
  ForgotPasswordCard,
  HeadingSection,
  FormContainer,
  StyledTextField,
  SubmitButton,
  BackToSignIn
} from './styles';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically make an API call to request password reset
    // For now, we'll just show the success message
    setIsSubmitted(true);
    console.log('Password reset requested for:', email);
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordCard>
        <HeadingSection>
          <h2>Reset Your Password</h2>
          <p>
            {!isSubmitted 
              ? "Enter your email address and we'll send you a link to reset your password."
              : "If your email is registered with us, you'll receive a password reset link shortly."}
          </p>
        </HeadingSection>

        {!isSubmitted ? (
          <FormContainer onSubmit={handleSubmit}>
            <StyledTextField
              label="Email"
              type="email"
              placeholder="Enter your registered email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
            />

            <SubmitButton
              type="submit"
              variant="contained"
              fullWidth
            >
              Send Reset Link
            </SubmitButton>
          </FormContainer>
        ) : (
          <Link to="/signin" style={{ textDecoration: 'none', width: '100%' }}>
            <SubmitButton
              variant="contained"
              fullWidth
            >
              Return to Sign In
            </SubmitButton>
          </Link>
        )}

        {!isSubmitted && (
          <BackToSignIn>
            <Link to="/signin">Back to Sign In</Link>
          </BackToSignIn>
        )}
      </ForgotPasswordCard>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword; 