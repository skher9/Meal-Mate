import styled from 'styled-components';
import { AppBar, Button } from '@mui/material';
import { colors } from '../../Utils/theme';

export const StyledAppBar = styled(AppBar)`
  background-color: ${colors.textLight};
  color: ${colors.textMain};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .MuiToolbar-root {
    min-height: 64px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  
  img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    padding: 4px;
  }
  
  span {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${colors.textMain};

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-left: 48px;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.textMain};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: transform 0.2s ease;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    color: ${colors.textMain};
    text-decoration: none;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

export const AuthButton = styled(Button)`
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primary}ee);
  color: ${colors.textLight} !important;
  font-weight: 500;
  padding: 6px 20px;
  font-size: 0.875rem;
  line-height: 1.75;
  height: 36px;
  text-transform: none;
  white-space: nowrap;
  
  &:hover {
    background: linear-gradient(90deg, ${colors.primary}ee, ${colors.primary});
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.textMain};
  padding: 8px;
  cursor: pointer;
  
  @media (max-width: 900px) {
    display: block;
    margin-left: auto;
  }
`;

export const MobileDrawerList = styled.div`
  width: 250px;
  padding: 1rem;

  .MuiListItem-root {
    padding: 0.5rem 1rem;
    color: ${colors.textMain};
    border-radius: 8px;
    margin-bottom: 0.5rem;

    &:hover {
      background-color: ${colors.primary}11;
    }
  }

  .MuiButton-root {
    width: 100%;
    margin-bottom: 0.5rem;
    color: ${colors.textLight};
    
    span {
      color: ${colors.textLight};
    }
  }
`; 