import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { colors } from '../../Utils/theme';

export const NotesContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
  position: relative;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
`;

export const HeaderTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #4E342E;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
`;

export const HeaderText = styled.p`
  color: ${colors.textMain}cc;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled(TextField)`
  flex: 1;
  
  .MuiOutlinedInput-root {
    background: white;
    border-radius: 8px;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
  }
`;

export const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const NoteCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
`;

export const NoteTitle = styled.h3`
  color: ${colors.textMain};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const NotePreview = styled.div`
  color: ${colors.textMain}cc;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NoteMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: ${colors.textMain}99;
`;

export const UpdatedText = styled.span`
  color: ${colors.textMain}99;
`;

export const LinkedRecipe = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const AddNoteButton = styled(Button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${colors.primary};
  color: white;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  min-width: unset;
  box-shadow: 0 4px 12px rgba(255, 163, 102, 0.3);
  z-index: 100;
  
  &:hover {
    background: #e85a00;
  }

  @media (max-width: 600px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  max-width: 100%;
  overflow: hidden;
  
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1.5rem;
    border-radius: 12px;

    @media (max-width: 600px) {
      width: 160px;
      height: 160px;
      margin-bottom: 1rem;
    }
  }
`;

export const EmptyStateTitle = styled.h3`
  color: ${colors.textMain};
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const EmptyStateText = styled.p`
  color: ${colors.textMain}cc;
  margin-bottom: 1rem;
  padding: 0 1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const NoteFormModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const NoteForm = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 1.5rem;
    max-height: 95vh;
    border-radius: 8px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const FormTitle = styled.h2`
  color: ${colors.textMain};
  margin: 0;
`;

export const StyledTextField = styled(TextField)`
  .MuiInputLabel-root {
    color: ${colors.textMain}99;
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${colors.primary};
  }

  .MuiOutlinedInput-root {
    background: white;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
  }

  .MuiOutlinedInput-input {
    color: ${colors.textMain};
  }
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;

  .MuiAutocomplete-root {
    .MuiOutlinedInput-root {
      background: white;
    }
    
    .MuiInputLabel-root {
      color: ${colors.textMain}99;
    }

    .MuiInputLabel-root.Mui-focused {
      color: ${colors.primary};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const OrangeButton = styled(Button)`
  background: #FFA366;
  
  &:hover {
    background: #ff8533;
  }

  &.Mui-disabled {
    background: #FFA36666;
  }
`; 