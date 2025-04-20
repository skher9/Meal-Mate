import styled from 'styled-components';
import { Button, Card, Avatar } from '@mui/material';

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PageHeader = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #4E342E;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const ProfileCard = styled(Card)`
  background: #FFF9F1;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileAvatar = styled(Avatar)`
  width: 80px !important;
  height: 80px !important;
  border: 3px solid #FFA366;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #4E342E;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 0.25rem;
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled(Card)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .stat-icon {
    color: #FFA366;
    font-size: 2rem;
  }
  
  .stat-info {
    h4 {
      font-size: 1.2rem;
      color: #4E342E;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #4E342E;
  }
`;

export const SectionCard = styled(Card)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`;

export const NotesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const NoteCard = styled(Card)`
  background: #FFF9F1;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  h4 {
    font-family: 'Playfair Display', serif;
    color: #4E342E;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .note-date {
    color: #999;
    font-size: 0.8rem;
  }
`;

export const SettingsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .setting-info {
    h4 {
      color: #4E342E;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: #666;
      font-size: 0.9rem;
    }
  }
`;

export const ActionButton = styled(Button)`
  &.MuiButton-contained {
    background-color: #FFA366;
    color: white;
    
    &:hover {
      background-color: #FF8C42;
    }
  }
  
  &.MuiButton-outlined {
    border-color: #FFA366;
    color: #FFA366;
    
    &:hover {
      background-color: rgba(255, 163, 102, 0.1);
    }
  }
`; 