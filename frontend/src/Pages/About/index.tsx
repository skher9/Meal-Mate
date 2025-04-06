import React from 'react';
import { Link } from 'react-router-dom';
import {
  AboutContainer,
  HeroSection,
  MissionSection,
  MissionText,
  MissionImage,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  DeveloperSection,
  ContactSection,
  ContactButton,
  Footer
} from './styles';
import {
  AssignmentOutlined,
  CalendarTodayOutlined,
  FilterListOutlined,
  NoteAltOutlined,
  GitHub,
  LinkedIn,
  Twitter
} from '@mui/icons-material';

const About = () => {
  return (
    <AboutContainer>
      {/* Hero Section */}
      <HeroSection>
        <h1>Helping You Plan, One Meal at a Time 🍽️</h1>
        <p>
          MealMate is your personal companion for organizing recipes, planning meals,
          and making everyday cooking easier, healthier, and happier.
        </p>
      </HeroSection>

      {/* Mission Section */}
      <MissionSection>
        <MissionText>
          <p>
            We built MealMate to simplify meal planning — no more last-minute dinner
            stress, food waste, or scrolling endlessly for recipes. Our goal is to
            bring joy and ease into your kitchen with tools that make food planning
            smart and satisfying.
          </p>
        </MissionText>
        <MissionImage>
          <img 
            src="/assets/About.png" 
            alt="About MealMate"
            style={{ maxWidth: '400px' }}
          />
        </MissionImage>
      </MissionSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <div className="icon">
              <AssignmentOutlined fontSize="inherit" />
            </div>
            <h3>Recipe Organizer</h3>
            <p>Save and manage your own recipes</p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <CalendarTodayOutlined fontSize="inherit" />
            </div>
            <h3>Plan My Week</h3>
            <p>Assign meals to specific days</p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <FilterListOutlined fontSize="inherit" />
            </div>
            <h3>Smart Filters</h3>
            <p>Choose by dietary preferences</p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <NoteAltOutlined fontSize="inherit" />
            </div>
            <h3>Personal Notes</h3>
            <p>Add tips and tweaks per recipe</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* Developer Section */}
      <DeveloperSection>
        <h2>Who We Are</h2>
        <p>
          MealMate was built by Shravani, a full-stack developer who's passionate
          about code, clean design, and good food. This project is part of my
          portfolio. Feel free to check the code or connect with me!
        </p>
      </DeveloperSection>

      {/* Contact Section */}
      <ContactSection>
        <h2>Get in Touch</h2>
        <p>
          We'd love your feedback! Found a bug? Have a feature request? Want to say hi?
        </p>
        <ContactButton
          variant="contained"
          href="mailto:contact@mealmate.com"
        >
          Contact Us
        </ContactButton>
      </ContactSection>

      {/* Footer */}
      <Footer>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </div>
      </Footer>
    </AboutContainer>
  );
};

export default About; 