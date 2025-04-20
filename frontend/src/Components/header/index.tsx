import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Toolbar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  StyledAppBar,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  AuthButtonsContainer,
  AuthButton,
  MobileMenuButton,
  MobileDrawerList,
  ProfileMenuContainer
} from './styles';

const navigationLinks = [
  { text: 'Home', href: '/' },
  { text: 'Recipes', href: '/recipes' },
  { text: 'Meal Planner', href: '/meal-planner' },
  { text: 'My Notes', href: '/notes' },
  { text: 'About', href: '/about' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isAuthenticated = true; // Set to true for testing the profile menu

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

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setProfileMenuOpen(true);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    setProfileMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleProfileMenuClose();
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    handleProfileMenuClose();
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

            {/* Auth Buttons or Profile Menu */}
            {isAuthenticated ? (
              <ProfileMenuContainer>
                <IconButton
                  onClick={handleProfileMenuOpen}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={profileMenuOpen}
                  onClose={handleProfileMenuClose}
                  onClick={handleProfileMenuClose}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                  <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
                  <MenuItem onClick={handleProfileMenuClose}>Sign Out</MenuItem>
                </Menu>
              </ProfileMenuContainer>
            ) : (
              <AuthButtonsContainer>
                <AuthButton variant="contained" onClick={handleSignIn}>
                  Sign In
                </AuthButton>
                <AuthButton variant="contained" onClick={handleSignUp}>
                  Sign Up
                </AuthButton>
              </AuthButtonsContainer>
            )}

            {/* Mobile Menu Button - Only visible on mobile */}
            {isMobile && (
              <MobileMenuButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
              >
                <MenuIcon />
              </MobileMenuButton>
            )}
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
              <ListItem key={link.text} disablePadding>
                <ListItemButton onClick={() => handleNavigation(link.href)}>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
            {isAuthenticated && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleProfileClick}>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleSettingsClick}>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {!isAuthenticated && (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleSignIn}>
                    <ListItemText primary="Sign In" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleSignUp}>
                    <ListItemText primary="Sign Up" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </MobileDrawerList>
      </Drawer>
    </>
  );
};

export default Header; 