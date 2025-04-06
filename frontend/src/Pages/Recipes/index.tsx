import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Modal from '@mui/material/Modal';
import {
  RecipesContainer,
  HeaderSection,
  HeaderContent,
  AddRecipeButton,
  SearchSection,
  SearchBar,
  SearchInput,
  FilterSection,
  FilterChip,
  TagChip,
  RecipeGrid,
  RecipeCard,
  EmptyState,
  ModalContent
} from './styles';

interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string[];
  dietary: string[];
  region: string;
}

const CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drink'];
const DIETARY = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Non-Vegetarian'];
const REGIONS = ['Indian', 'Italian', 'Mexican', 'Chinese', 'Japanese', 'Thai'];

// Sample recipes data
const SAMPLE_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Avocado Toast with Poached Eggs',
    image: '/assets/recipes/avocado-toast.jpg',
    category: ['Breakfast'],
    dietary: ['Vegetarian'],
    region: 'International'
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    image: '/assets/recipes/carbonara.jpg',
    category: ['Dinner'],
    dietary: ['Non-Vegetarian'],
    region: 'Italian'
  },
  {
    id: '3',
    title: 'Masala Dosa',
    image: '/assets/recipes/masala-dosa.jpg',
    category: ['Breakfast', 'Lunch'],
    dietary: ['Vegetarian', 'Gluten-Free'],
    region: 'Indian'
  },
  {
    id: '4',
    title: 'Green Smoothie Bowl',
    image: '/assets/recipes/smoothie-bowl.jpg',
    category: ['Breakfast', 'Snack'],
    dietary: ['Vegan', 'Gluten-Free'],
    region: 'International'
  },
  {
    id: '5',
    title: 'Chicken Pad Thai',
    image: '/assets/recipes/pad-thai.jpg',
    category: ['Lunch', 'Dinner'],
    dietary: ['Non-Vegetarian'],
    region: 'Thai'
  },
  {
    id: '6',
    title: 'Margherita Pizza',
    image: '/assets/recipes/margherita.jpg',
    category: ['Dinner'],
    dietary: ['Vegetarian'],
    region: 'Italian'
  }
];

const Recipes: React.FC = () => {
  const [recipes] = useState<Recipe[]>(SAMPLE_RECIPES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleDietaryToggle = (diet: string) => {
    setSelectedDietary(prev =>
      prev.includes(diet)
        ? prev.filter(d => d !== diet)
        : [...prev, diet]
    );
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
      recipe.category.some(cat => selectedCategories.includes(cat));
    const matchesDietary = selectedDietary.length === 0 ||
      recipe.dietary.some(diet => selectedDietary.includes(diet));
    const matchesRegion = !selectedRegion || recipe.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesDietary && matchesRegion;
  });

  return (
    <RecipesContainer>
      <HeaderSection>
        <HeaderContent>
          <h2>
            <RestaurantIcon /> All Recipes
          </h2>
          <p>Explore meals from breakfast to dinner — and everything in between!</p>
        </HeaderContent>
        <AddRecipeButton onClick={() => setIsModalOpen(true)}>
          <AddIcon /> Add Recipe
        </AddRecipeButton>
      </HeaderSection>

      <SearchSection>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <FilterSection>
          {CATEGORIES.map(category => (
            <FilterChip
              key={category}
              label={category}
              $isActive={selectedCategories.includes(category)}
              onClick={() => handleCategoryToggle(category)}
            />
          ))}
        </FilterSection>

        <FilterSection>
          {DIETARY.map(diet => (
            <FilterChip
              key={diet}
              label={diet}
              $isActive={selectedDietary.includes(diet)}
              onClick={() => handleDietaryToggle(diet)}
            />
          ))}
        </FilterSection>

        <FilterSection>
          {REGIONS.map(region => (
            <FilterChip
              key={region}
              label={region}
              $isActive={selectedRegion === region}
              onClick={() => setSelectedRegion(prev => prev === region ? '' : region)}
            />
          ))}
        </FilterSection>
      </SearchSection>

      {filteredRecipes.length > 0 ? (
        <RecipeGrid>
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id}>
              <div
                className="image"
                style={{ backgroundImage: `url(${recipe.image})` }}
              />
              <div className="content">
                <h4>{recipe.title}</h4>
                <div className="tags">
                  {recipe.category.map(cat => (
                    <TagChip
                      key={cat}
                      label={cat}
                      size="small"
                    />
                  ))}
                  {recipe.dietary.map(diet => (
                    <TagChip
                      key={diet}
                      label={diet}
                      size="small"
                    />
                  ))}
                </div>
              </div>
            </RecipeCard>
          ))}
        </RecipeGrid>
      ) : (
        <EmptyState>
          <img src="/assets/empty-recipes.png" alt="No recipes found" />
          <p>No recipes found. Try changing your filters 🍽️</p>
        </EmptyState>
      )}

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalContent>
          <h2>Add New Recipe</h2>
          {/* Add Recipe form will be implemented here */}
        </ModalContent>
      </Modal>
    </RecipesContainer>
  );
};

export default Recipes; 