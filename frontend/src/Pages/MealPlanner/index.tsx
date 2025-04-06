import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {
  PlannerContainer,
  HeaderSection,
  HeaderContent,
  AddRecipeButton,
  WeeklyGrid,
  DayHeader,
  MealCell,
  EmptyCell,
  MealCard,
  ModalContent
} from './styles';

interface Meal {
  id: string;
  name: string;
  notes?: string;
}

interface DayPlan {
  breakfast?: Meal;
  lunch?: Meal;
  dinner?: Meal;
}

interface WeekPlan {
  [key: string]: DayPlan;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner'];

// Sample meals data
const SAMPLE_MEALS = {
  Monday: {
    breakfast: { id: '1', name: 'Oatmeal with Berries' },
    lunch: { id: '2', name: 'Chicken Caesar Salad' },
    dinner: { id: '3', name: 'Grilled Salmon with Vegetables' }
  },
  Wednesday: {
    breakfast: { id: '4', name: 'Avocado Toast' },
    dinner: { id: '5', name: 'Spaghetti Bolognese' }
  },
  Friday: {
    lunch: { id: '6', name: 'Quinoa Buddha Bowl' },
    dinner: { id: '7', name: 'Homemade Pizza' }
  }
};

const MealPlanner: React.FC = () => {
  const [weekPlan, setWeekPlan] = useState<WeekPlan>(SAMPLE_MEALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; mealType: string } | null>(null);

  const handleAddMeal = (day: string, mealType: string) => {
    setSelectedSlot({ day, mealType });
    setIsModalOpen(true);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const mealData = event.currentTarget.getAttribute('data-meal');
    if (mealData) {
      event.dataTransfer.setData('text/plain', mealData);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetDay: string, targetMealType: string) => {
    event.preventDefault();
    const mealData = event.dataTransfer.getData('text/plain');
    const [sourceDay, sourceMealType] = mealData.split('-');

    if (sourceDay === targetDay && sourceMealType === targetMealType) return;

    const newWeekPlan = { ...weekPlan };
    
    // Initialize source and destination days if they don't exist
    if (!newWeekPlan[sourceDay]) newWeekPlan[sourceDay] = {};
    if (!newWeekPlan[targetDay]) newWeekPlan[targetDay] = {};

    // Get the meal being moved
    const meal = newWeekPlan[sourceDay][sourceMealType as keyof DayPlan];

    // Remove from source
    newWeekPlan[sourceDay] = {
      ...newWeekPlan[sourceDay],
      [sourceMealType]: undefined
    };

    // Add to destination
    newWeekPlan[targetDay] = {
      ...newWeekPlan[targetDay],
      [targetMealType]: meal
    };

    setWeekPlan(newWeekPlan);
  };

  return (
    <PlannerContainer>
      <HeaderSection>
        <HeaderContent>
          <h1>Meal Planner</h1>
          <AddRecipeButton onClick={() => setIsModalOpen(true)}>
            <AddIcon /> Add Recipe
          </AddRecipeButton>
        </HeaderContent>
      </HeaderSection>

      <WeeklyGrid>
        <Box /> {/* Empty cell for grid alignment */}
        {DAYS.map(day => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}

        {MEAL_TYPES.map(mealType => (
          <React.Fragment key={mealType}>
            <DayHeader>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</DayHeader>
            {DAYS.map(day => (
              <MealCell
                key={`${day}-${mealType}`}
                mealType={mealType}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, day, mealType)}
              >
                {weekPlan[day]?.[mealType as keyof DayPlan] ? (
                  <MealCard
                    draggable
                    data-meal={`${day}-${mealType}`}
                    onDragStart={handleDragStart}
                  >
                    {weekPlan[day][mealType as keyof DayPlan]?.name}
                  </MealCard>
                ) : (
                  <EmptyCell onClick={() => handleAddMeal(day, mealType)}>
                    <AddIcon />
                  </EmptyCell>
                )}
              </MealCell>
            ))}
          </React.Fragment>
        ))}
      </WeeklyGrid>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalContent>
          <h2>Add Recipe</h2>
          {/* Recipe selection content will be added here */}
        </ModalContent>
      </Modal>
    </PlannerContainer>
  );
};

export default MealPlanner; 