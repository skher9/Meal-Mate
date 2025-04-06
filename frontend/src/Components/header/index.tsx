import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Toolbar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledAppBar,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  AuthButtonsContainer,
  AuthButton,
  MobileMenuButton,
  MobileDrawerList
} from './styles';

const navigationLinks = [
  { text: 'Home', href: '/' },
  { text: 'Recipes', href: '/recipes' },
  { text: 'Meal Planner', href: '/meal-planner' },
  { text: 'My Notes', href: '/notes' },
  { text: 'About', href: '/about' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignIn = () => {
    navigate('/signin');
    setMobileMenuOpen(false);
  };

  const handleSignUp = () => {
    navigate('/signup');
    setMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <LogoContainer onClick={() => navigate('/')}>
              <img src="/assets/logo.png" alt="MealMate" />
              <span>MealMate</span>
            </LogoContainer>

            {/* Navigation Links */}
            <NavLinksContainer>
              {navigationLinks.map((link) => (
                <NavLink key={link.text} as={Link} to={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </NavLinksContainer>

            {/* Auth Buttons */}
            <AuthButtonsContainer>
              <AuthButton variant="contained" onClick={handleSignIn}>
                Sign In
              </AuthButton>
              <AuthButton variant="contained" onClick={handleSignUp}>
                Sign Up
              </AuthButton>
            </AuthButtonsContainer>

            {/* Mobile Menu Button */}
            <MobileMenuButton onClick={toggleMobileMenu}>
              <MenuIcon />
            </MobileMenuButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
      >
        <MobileDrawerList>
          <List>
            {navigationLinks.map((link) => (
              <ListItem
                key={link.text}
                onClick={() => handleNavigation(link.href)}
                component="div"
                sx={{ cursor: 'pointer' }}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
            <ListItem>
              <AuthButton fullWidth onClick={handleSignIn}>
                Sign In
              </AuthButton>
            </ListItem>
            <ListItem>
              <AuthButton fullWidth onClick={handleSignUp}>
                Sign Up
              </AuthButton>
            </ListItem>
          </List>
        </MobileDrawerList>
      </Drawer>
    </>
  );
};

export default Header; 