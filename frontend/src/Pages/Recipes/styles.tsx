import styled from 'styled-components';
import { Button, Chip } from '@mui/material';
import { colors } from '../../Utils/theme';

// Tag color mapping
const tagColors = {
  // Categories
  Breakfast: { bg: '#FFEBCB', text: '#6D3B00' },
  Lunch: { bg: '#E1F5FE', text: '#01579B' },
  Dinner: { bg: '#FCDDDD', text: '#6A1B1B' },
  Snack: { bg: '#F3E5F5', text: '#4A148C' },
  Drink: { bg: '#E0F7FA', text: '#006064' },
  // Dietary
  Vegetarian: { bg: '#E1F8E6', text: '#1B5E20' },
  Vegan: { bg: '#DCEDC8', text: '#33691E' },
  'Gluten-Free': { bg: '#E8F0FF', text: '#1A237E' },
  'Non-Vegetarian': { bg: '#FDE2E4', text: '#880E4F' },
  // Regions
  Indian: { bg: '#FFF3E0', text: '#E65100' },
  Italian: { bg: '#F1F8E9', text: '#1B5E20' },
  Mexican: { bg: '#FBE9E7', text: '#BF360C' },
  Chinese: { bg: '#FFEBEE', text: '#B71C1C' },
  Japanese: { bg: '#F3E5F5', text: '#4A148C' },
  Thai: { bg: '#E0F2F1', text: '#004D40' },
};

export const RecipesContainer = styled.div`
  padding: 2rem;
  width: calc(100% - 4rem);
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);
  background: #FAFAFA;

  @media (max-width: 768px) {
    padding: 1rem;
    width: calc(100% - 2rem);
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const HeaderContent = styled.div`
  h2 {
    color: ${colors.textMain};
    margin: 0 0 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;

    svg {
      color: ${colors.primary};
    }
  }

  p {
    color: ${colors.textMain}99;
    margin: 0;
  }
`;

export const AddRecipeButton = styled(Button)`
  color: white !important;
  background: linear-gradient(45deg, ${colors.primary}, #FFBC91) !important;
  padding: 0.75rem 1.5rem !important;
  font-weight: 600 !important;
  text-transform: none !important;
  border-radius: 12px !important;
  font-size: 1rem !important;
  transition: all 0.2s ease-in-out !important;
  box-shadow: 0 4px 12px rgba(255, 163, 102, 0.2) !important;
  
  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 16px rgba(255, 163, 102, 0.3) !important;
  }

  .MuiSvgIcon-root {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const SearchSection = styled.div`
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid ${colors.primary}22;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: ${colors.primary}06;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: white;
    box-shadow: 0 2px 8px rgba(255, 163, 102, 0.15);
  }

  &::placeholder {
    color: ${colors.textMain}66;
  }
`;

export const FilterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FilterChip = styled(Chip)<{ $isActive?: boolean }>`
  background: ${props => props.$isActive ? 
    `linear-gradient(45deg, ${colors.primary}, #FFBC91)` : 
    '#FFF2E0'} !important;
  color: ${props => props.$isActive ? 'white' : '#E85A00'} !important;
  font-weight: ${props => props.$isActive ? '600' : '500'} !important;
  padding: 0 12px !important;
  height: 32px !important;
  border-radius: 999px !important;
  transition: all 0.2s ease !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 13px !important;
  width: 100% !important;
  justify-content: center !important;

  &:hover {
    transform: translateY(-1px);
    background: ${props => props.$isActive ? 
      `linear-gradient(45deg, ${colors.primary}, #FFBC91)` : 
      '#FFA366'} !important;
    color: white !important;
    box-shadow: 0 2px 8px rgba(255, 163, 102, 0.2) !important;
  }

  &:active {
    transform: scale(0.96);
  }

  &.MuiChip-clickable:hover {
    background: #FFA366 !important;
    color: white !important;
  }
`;

export const TagChip = styled(Chip)<{ label: string }>`
  background: ${props => tagColors[props.label as keyof typeof tagColors]?.bg || '#F5F5F5'} !important;
  color: ${props => tagColors[props.label as keyof typeof tagColors]?.text || colors.textMain} !important;
  font-size: 0.8rem !important;
  height: 24px !important;
  font-weight: 500 !important;
  padding: 0 8px !important;
`;

export const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const RecipeCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(255, 163, 102, 0.15);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 20px rgba(255, 163, 102, 0.25);
  }

  .image {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-color: #FFF0E0;
    position: relative;

    &:empty::before {
      content: "🍽️";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
    }
  }

  .content {
    padding: 1.25rem;

    h4 {
      color: ${colors.textMain};
      margin: 0 0 0.75rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${colors.textMain}99;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  img {
    width: 200px;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  h2 {
    color: ${colors.textMain};
    margin: 0 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${colors.primary};
    }
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: ${colors.textMain};
      font-weight: 500;
    }
  }
`; 