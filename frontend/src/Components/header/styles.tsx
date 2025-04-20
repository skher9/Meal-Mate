import styled from 'styled-components';
import { AppBar, Button, List, IconButton } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #fff;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .MuiToolbar-root {
    min-height: 64px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
  
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4E342E;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2rem;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled(Button)`
  color: #333;
  text-transform: none;
  font-size: 1rem;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: transparent;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const AuthButton = styled(Button)`
  background-color: #FFA366;
  color: white;
  
  &:hover {
    background-color: #FF8C42;
  }
`;

export const MobileMenuButton = styled(IconButton)`
  display: none;
  margin-left: auto;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileDrawerList = styled(List)`
  width: 250px;
`;

export const ProfileMenuContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  
  .MuiIconButton-root {
    color: #333;
    
    &:hover {
      color: #FFA366;
    }
  }
`; 