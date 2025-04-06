import styled from 'styled-components';
import { Button } from '@mui/material';
import { colors } from '../../Utils/theme';

export const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

export const HeroSection = styled.div`
  position: relative;
  height: calc(100vh - 64px);
  min-height: 600px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/assets/Hero.png') center/cover no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    min-height: 500px;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${colors.primary} !important;
  color: white !important;
  padding: 0.75rem 2rem !important;
  font-size: 1.1rem !important;
  border-radius: 12px !important;
  text-transform: none !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(255, 163, 102, 0.3) !important;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 163, 102, 0.4) !important;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(10px);
  border: 2px solid white !important;

  &:hover {
    background: rgba(255, 255, 255, 0.25) !important;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;
    text-align: center;

    h3 {
      color: ${colors.textMain};
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
    }

    p {
      color: ${colors.textMain}99;
      margin: 0;
      line-height: 1.6;
    }
  }
`;

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .content {
    h2 {
      color: ${colors.textMain};
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${colors.textMain}99;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }
  }
`;

export const CTASection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('/assets/banner.png') center/cover no-repeat;
  padding: 6rem 2rem;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

export const Footer = styled.footer`
  background: ${colors.primary}11;
  padding: 4rem 2rem;
  color: ${colors.textMain};

  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: ${colors.textMain}99;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
  }
`; 