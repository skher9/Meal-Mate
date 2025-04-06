import styled from 'styled-components';
import { Button } from '@mui/material';
import { colors } from '../../Utils/theme';

export const AboutContainer = styled.div`
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #FFF5EA, #FFD6AD);
`;

export const HeroSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(180deg, #FFF9F1, transparent);

  h1 {
    color: ${colors.textMain};
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  p {
    color: ${colors.textMain}ee;
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    
    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;

export const MissionSection = styled.div`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const MissionText = styled.div`
  flex: 1;
  
  p {
    color: ${colors.textMain};
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

export const MissionImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const FeaturesSection = styled.div`
  padding: 4rem 2rem;
  background: #ffffff20;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255, 163, 102, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  h3 {
    color: ${colors.textMain};
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textMain}cc;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const DeveloperSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    color: ${colors.textMain};
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    color: ${colors.textMain}ee;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const ContactSection = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: #ffffff30;

  h2 {
    color: ${colors.textMain};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${colors.textMain}ee;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
`;

export const ContactButton = styled(Button)`
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}ee);
  color: ${colors.textLight};
  font-weight: 500;
  padding: 12px 24px;
  font-size: 1.1rem;
  text-transform: none;
  border-radius: 8px;
  
  &:hover {
    background: linear-gradient(90deg, #e85a00, #e85a00ee);
  }
`;

export const Footer = styled.footer`
  padding: 2rem;
  background: #FFE5D0;
  text-align: center;

  .links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;

    a {
      color: ${colors.textMain};
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        color: ${colors.primary};
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    a {
      color: ${colors.textMain};
      font-size: 1.5rem;
      
      &:hover {
        color: ${colors.primary};
      }
    }
  }
`; 