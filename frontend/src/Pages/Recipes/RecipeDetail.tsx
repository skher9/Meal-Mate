import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  RecipeDetailContainer,
  GlassCard,
  RecipeTitle,
  TagsContainer,
  Tag,
  IngredientsList,
  IngredientItem,
  DirectionsList,
  DirectionItem,
  ActionButtons,
  ActionButton,
  MetaInfo,
  ChefNote,
  SectionTitle
} from './RecipeDetail.styles';
import { 
  Favorite, 
  FavoriteBorder, 
  Share, 
  Edit,
  Restaurant,
  AccessTime
} from '@mui/icons-material';
import { Recipe } from '../../interface/recipe-interface';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDetail, isRecipeDetailLoading } from '../../slices/recipe-detail/recipe-detail.selector';
import { fetchRecipeByIdThunk } from '../../slices/recipe-detail/recipr-detail.thunks';
import { RootState, AppDispatch } from '../../redux/store';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [isFavorite, setIsFavorite] = useState(false);
  const recipe = useSelector(recipeDetail);
  const isLoading = useSelector(isRecipeDetailLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeByIdThunk(Number(id)));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <RecipeDetailContainer>
        <div>Loading...</div>
      </RecipeDetailContainer>
    );
  }

  if (!recipe) {
    return (
      <RecipeDetailContainer>
        <div>Recipe not found</div>
      </RecipeDetailContainer>
    );
  }

  return (
    <RecipeDetailContainer
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/drzlks4sk/image/upload/${recipe.imageId})`,
      }}
    >
      <GlassCard>
        <RecipeTitle variant="h1">
          {recipe.title}
        </RecipeTitle>

        <MetaInfo>
          <span>By {recipe.authorName}</span>
          <span>•</span>
          <span>{recipe.category}</span>
          <span>•</span>
          <span>{recipe.region}</span>
        </MetaInfo>

        <TagsContainer>
          {recipe.isVegetarian && <Tag $type="veg">Vegetarian</Tag>}
          {recipe.isGlutenFree && <Tag $type="gf">Gluten Free</Tag>}
          {recipe.containsEgg && <Tag $type="egg">Contains Egg</Tag>}
          <Tag $type="difficulty">{recipe.difficulty}</Tag>
        </TagsContainer>

        <MetaInfo>
          <span><AccessTime /> Prep: {recipe.prepTime}</span>
          <span>•</span>
          <span><AccessTime /> Cook: {recipe.cookTime}</span>
          <span>•</span>
          <span><Restaurant /> {recipe.servings} servings</span>
        </MetaInfo>

        <SectionTitle variant="h3">
          Ingredients
        </SectionTitle>
        <IngredientsList>
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <IngredientItem key={index}>
              {ingredient}
            </IngredientItem>
          ))}
        </IngredientsList>

        <SectionTitle variant="h3">
          Directions
        </SectionTitle>
        <DirectionsList>
          {recipe.instructions.map((instruction: string, index: number) => (
            <DirectionItem key={index}>
              {instruction}
            </DirectionItem>
          ))}
        </DirectionsList>

        {recipe.notes && (
          <ChefNote variant="body2">
            Chef's Note: {recipe.notes}
          </ChefNote>
        )}

        <ActionButtons>
          <ActionButton
            variant="contained"
            startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? 'Favorited' : 'Add to Favorites'}
          </ActionButton>
          <ActionButton
            variant="outlined"
            startIcon={<Share />}
          >
            Share Recipe
          </ActionButton>
          <ActionButton
            variant="outlined"
            startIcon={<Edit />}
          >
            Edit Recipe
          </ActionButton>
        </ActionButtons>
      </GlassCard>
    </RecipeDetailContainer>
  );
};

export default RecipeDetail; 