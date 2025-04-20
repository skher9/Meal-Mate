import styled from 'styled-components';
import { Button, Box, Typography } from '@mui/material';
import { colors } from '../../Utils/theme';

export const RecipeDetailContainer = styled(Box)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  }
`;

export const GlassCard = styled(Box)`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 2rem 3rem;
  max-width: 640px;
  width: 100%;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: fadeIn 0.8s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;

export const RecipeTitle = styled(Typography)`
  && {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
`;

export const SectionTitle = styled(Typography)`
  && {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 600;
    color: white;
    margin: 1.5rem 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const IngredientsList = styled(Box)`
  margin-left: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const IngredientItem = styled(Box)`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: ${colors.primary};
    font-size: 1.2rem;
  }
`;

export const DirectionsList = styled(Box)`
  counter-reset: step;
  margin-left: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1rem);
`;

export const DirectionItem = styled(Box)`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;

  &::before {
    counter-increment: step;
    content: counter(step);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    background: ${colors.primary};
    color: white;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const ActionButtons = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const ActionButton = styled(Button)`
  && {
    border-radius: 999px;
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    text-transform: none;
    transition: all 0.2s ease;
    color: white;
    border-color: white;

    &:hover {
      transform: translateY(-1px);
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const MetaInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
`;

export const ChefNote = styled(Typography)`
  && {
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 1.5rem;
    font-size: 0.95rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '💡';
      font-style: normal;
    }
  }
`;

export const TagsContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled(Box)<{ $type?: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;

  ${props => {
    switch (props.$type) {
      case 'veg':
        return `
          background-color: rgba(46, 125, 50, 0.2);
          border: 1px solid rgba(46, 125, 50, 0.4);
        `;
      case 'gf':
        return `
          background-color: rgba(13, 71, 161, 0.2);
          border: 1px solid rgba(13, 71, 161, 0.4);
        `;
      case 'egg':
        return `
          background-color: rgba(239, 108, 0, 0.2);
          border: 1px solid rgba(239, 108, 0, 0.4);
        `;
      case 'difficulty':
        return `
          background-color: rgba(194, 24, 91, 0.2);
          border: 1px solid rgba(194, 24, 91, 0.4);
        `;
      default:
        return `
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        `;
    }
  }}
`; 