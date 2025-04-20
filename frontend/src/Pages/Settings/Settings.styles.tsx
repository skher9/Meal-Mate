import styled from '@emotion/styled';
import { Card, Button, TextField, Switch, Select, MenuItem, List, ListItem, Alert } from '@mui/material';

export const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  background-color: #FFF9F1;
  min-height: 100vh;
`;

export const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    color: #4E342E;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const SettingsSection = styled(Card)`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 2rem;

  h3 {
    color: #4E342E;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #FFE0C4;
  }
`;

export const SettingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  .setting-info {
    margin-bottom: 0.5rem;

    h4 {
      color: #4E342E;
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    p {
      color: #666;
      font-size: 0.9rem;
    }
  }

  .setting-control {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .setting-info {
      flex: 1;
      margin-bottom: 0;
    }

    .setting-control {
      width: auto;
      min-width: 200px;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  
  .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

export const StyledButton = styled(Button)`
  &.save-button {
    background-color: #FFA366;
    color: white;
    &:hover {
      background-color: #E85A00;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &.delete-button {
    background-color: #FF6B6B;
    color: white;
    &:hover {
      background-color: #FF5252;
    }
  }
`;

export const StyledSwitch = styled(Switch)`
  .MuiSwitch-track {
    background-color: #FFE0C4;
  }
  .MuiSwitch-thumb {
    background-color: #FFA366;
  }
  .Mui-checked {
    .MuiSwitch-thumb {
      background-color: #E85A00;
    }
    + .MuiSwitch-track {
      background-color: #FFE0C4;
    }
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  
  .MuiOutlinedInput-notchedOutline {
    border-color: #FFA366;
  }
  
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #E85A00;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &:hover {
    background-color: #FFF9F1;
  }
`;

export const DeviceList = styled(List)`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
`;

export const DeviceListItem = styled(ListItem)`
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .device-info {
    flex: 1;
    
    .device-name {
      font-weight: 500;
      color: #4E342E;
    }
    
    .device-details {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;

export const SupportSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);

  h3 {
    color: #4E342E;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #FFE0C4;
  }
`;

export const SupportButton = styled(Button)`
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const FeedbackBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #FFE0C4;

  span {
    color: #4E342E;
    font-weight: 500;
  }

  .emoji-button {
    color: #FFA366;
    &:hover {
      color: #E85A00;
    }
  }
`;

export const StyledAlert = styled(Alert)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
`; 