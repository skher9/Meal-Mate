import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  Section,
  FeaturesGrid,
  FeatureCard,
  AboutSection,
  CTASection,
  Footer
} from './styles';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      image: '/assets/Card1.png',
      title: 'Add & organize your own recipes',
      description: 'Keep all your favorite recipes in one place, organized and easy to find.'
    },
    {
      image: '/assets/Card2.png',
      title: 'Plan your meals week by week',
      description: 'Drag and drop recipes to plan your entire week in minutes.'
    },
    {
      image: '/assets/Card3.png',
      title: 'Reduce waste, save time & money',
      description: 'Generate shopping lists and reduce food waste with smart planning.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Plan. Cook. Enjoy.</h1>
          <p>Your personal recipe book and weekly meal planner 🍽️</p>
          <ButtonGroup>
            <PrimaryButton onClick={() => navigate('/recipes')}>
              Explore Recipes
            </PrimaryButton>
            <SecondaryButton onClick={() => navigate('/meal-planner')}>
              Start Planning
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <Section>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <img src={feature.image} alt={feature.title} />
              <div className="content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <AboutSection>
          <img src="/assets/AboutMeal.png" alt="Kitchen scene" />
          <div className="content">
            <h2>About MealMate</h2>
            <p>
              Built for food lovers who want simplicity, structure, and deliciousness. 
              MealMate helps you turn chaos into calm in the kitchen.
            </p>
            <PrimaryButton onClick={() => navigate('/about')}>
              Learn More
            </PrimaryButton>
          </div>
        </AboutSection>
      </Section>

      <CTASection>
        <h2>Start planning your meals like a pro.</h2>
        <p>Join MealMate today and transform your cooking experience.</p>
        <PrimaryButton onClick={() => navigate('/signup')}>
          Get Started For Free
        </PrimaryButton>
      </CTASection>

      <Footer>
        <div className="content">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/recipes">Recipes</a></li>
              <li><a href="/meal-planner">Meal Planner</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@mealmate.com">support@mealmate.com</a></li>
            </ul>
          </div>
        </div>
      </Footer>
    </HomeContainer>
  );
};

export default Home; 