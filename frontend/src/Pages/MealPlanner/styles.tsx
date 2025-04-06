import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { colors } from '../../Utils/theme';

export const PlannerContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: calc(100vh - 64px);

  @media (max-width: 768px) {
    padding: 1rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: ${colors.textMain};
    margin: 0;
  }
`;

export const AddRecipeButton = styled(Button)`
  background: ${colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  text-transform: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: ${colors.primary}ee;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .MuiSvgIcon-root {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const WeeklyGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DayHeader = styled.div<{ isCurrentDay?: boolean }>`
  font-weight: 500;
  color: ${props => props.isCurrentDay ? 'white' : colors.textMain};
  padding: 1rem;
  text-align: center;
  background: ${props => props.isCurrentDay 
    ? 'linear-gradient(90deg, #FFA366, #FFBC91)'
    : `${colors.primary}11`};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: ${props => props.isCurrentDay ? 'translateY(-2px)' : 'none'};
    box-shadow: ${props => props.isCurrentDay ? '0 4px 8px rgba(255, 163, 102, 0.2)' : 'none'};
  }
`;

export const MealTypeHeader = styled(DayHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;

  .meal-icon {
    font-size: 1.2rem;
  }
`;

export const MealCell = styled.div<{ mealType: string }>`
  min-height: 100px;
  border: 2px dashed ${colors.primary}33;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background: ${props => {
    switch (props.mealType) {
      case 'breakfast':
        return '#FFF5E0';
      case 'lunch':
        return '#E7F9E1';
      case 'dinner':
        return '#FFF0F6';
      default:
        return 'white';
    }
  }};

  &:hover {
    border-color: ${colors.primary}66;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`;

export const EmptyCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  .MuiSvgIcon-root {
    color: ${colors.primary}99;
    font-size: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    background: #FFF0E0;

    .MuiSvgIcon-root {
      color: ${colors.primary};
      transform: scale(1.1);
    }
  }
`;

export const MealCard = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: grab;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .image {
    width: 100%;
    height: 60px;
    background-size: cover;
    background-position: center;
  }

  .content {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      object-fit: cover;
    }

    h4 {
      font-size: 0.9rem;
      color: ${colors.textMain};
      margin: 0;
      line-height: 1.2;
    }
  }
`;

export const MobileView = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DayAccordion = styled.div`
  margin-bottom: 1rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const AccordionHeader = styled.div`
  padding: 1rem;
  background: ${colors.primary}11;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${colors.primary}22;
  }
`;

export const DayContent = styled.div`
  padding: 1rem;
`;

export const MealTypeSection = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 0.9rem;
    color: ${colors.textMain}99;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.1rem;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
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
  }
`;

export const SearchInput = styled(TextField)`
  margin-bottom: 1rem;
  width: 100%;

  .MuiOutlinedInput-root {
    background: white;
    
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${colors.primary};
    }
  }
`;

export const RecipeList = styled.div`
  margin: 1.5rem 0;
  max-height: 400px;
  overflow-y: auto;
`;

export const RecipePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primary}11;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .details {
    flex: 1;

    h4 {
      color: ${colors.textMain};
      margin-bottom: 0.25rem;
    }

    p {
      color: ${colors.textMain}99;
      font-size: 0.9rem;
    }
  }
`; 