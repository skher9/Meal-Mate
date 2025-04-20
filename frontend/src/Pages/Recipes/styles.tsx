import styled from 'styled-components';
import { Button, Chip, Box, Typography, Paper } from '@mui/material';
import { colors } from '../../Utils/theme';

// Tag color mapping
const tagColors = {
  // Categories
  Breakfast: { bg: '#FFF3E0', text: '#E65100' },
  Lunch: { bg: '#E3F2FD', text: '#0D47A1' },
  Dinner: { bg: '#F3E5F5', text: '#4A148C' },
  Snack: { bg: '#E8F5E9', text: '#2E7D32' },
  Drink: { bg: '#E0F7FA', text: '#006064' },
  // Dietary
  Vegetarian: { bg: '#E8F5E9', text: '#2E7D32' },
  Vegan: { bg: '#E8F5E9', text: '#1B5E20' },
  'Gluten-Free': { bg: '#FFF3E0', text: '#E65100' },
  'Non-Vegetarian': { bg: '#FFEBEE', text: '#C62828' },
  // Regions
  Indian: { bg: '#FFF3E0', text: '#E65100' },
  Italian: { bg: '#F1F8E9', text: '#1B5E20' },
  Mexican: { bg: '#FBE9E7', text: '#BF360C' },
  Chinese: { bg: '#FFEBEE', text: '#B71C1C' },
  Japanese: { bg: '#F3E5F5', text: '#4A148C' },
  Thai: { bg: '#E0F2F1', text: '#004D40' },
};

export const RecipesContainer = styled(Box)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${colors.accent}10;
`;

export const HeaderSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HeaderContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .MuiTypography-h2 {
    color: ${colors.textMain};
    margin: 0 0 0.5rem;
    font-size: 2rem;

    svg {
      color: ${colors.primary};
    }
  }

  .MuiTypography-body1 {
    color: ${colors.textMain}99;
    margin: 0;
  }
`;

export const AddRecipeButton = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, ${colors.primary}, #FFBC91);
  color: ${colors.textLight};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 12px rgba(255, 163, 102, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 163, 102, 0.3);
  }

  .MuiSvgIcon-root {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const SearchSection = styled(Box)`
  margin-bottom: 2rem;
  background: ${colors.textLight};
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SearchBar = styled(Box)`
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${colors.primary}22;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: ${colors.primary}06;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    background: ${colors.textLight};
    box-shadow: 0 2px 8px rgba(255, 163, 102, 0.15);
  }

  &::placeholder {
    color: ${colors.textMain}66;
  }
`;

export const FilterContainer = styled(Paper)`
  padding: 1.5rem;
  background-color: ${colors.textLight};
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ActiveFilters = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

export const RecipeGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const RecipeCard = styled(Paper)`
  background: ${colors.textLight};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }

  .image {
    height: 180px;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .content {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    flex: 1;

    .MuiTypography-h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: ${colors.textMain};
      margin: 0;
      line-height: 1.4;
    }

    .MuiTypography-body2 {
      color: ${colors.textMain}99;
      font-size: 0.95rem;
      margin: 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tags {
      display: flex;
      gap: 0.5rem;
      margin-top: auto;
    }
  }
`;

export const EmptyState = styled(Box)`
  text-align: center;
  padding: 3rem;
  color: ${colors.textMain}99;
  background: ${colors.textLight};
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .MuiBox-root {
    width: 200px;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .MuiTypography-body1 {
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.textLight};
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  .MuiTypography-h2 {
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

export const TagChip = styled(Chip)<{ $isActive?: boolean; $label?: string }>`
  && {
    background-color: ${props => {
      if (props.$isActive) return colors.primary;
      const color = tagColors[props.$label as keyof typeof tagColors];
      return color ? color.bg : '#F5F5F5';
    }};
    color: ${props => {
      if (props.$isActive) return 'white';
      const color = tagColors[props.$label as keyof typeof tagColors];
      return color ? color.text : colors.textMain;
    }};
    font-size: 0.75rem;
    height: 24px;
    border-radius: 12px;
    transition: all 0.2s ease;
    font-weight: 500;

    &:hover {
      background-color: ${props => {
        if (props.$isActive) return colors.primary;
        const color = tagColors[props.$label as keyof typeof tagColors];
        return color ? color.bg : '#EEEEEE';
      }};
      transform: translateY(-1px);
    }
  }
`;

export const FilterGroup = styled(Box)`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`; 