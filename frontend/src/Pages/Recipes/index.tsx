import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Card, Paper } from '@mui/material';
import {
  RecipesContainer,
  HeaderSection,
  HeaderContent,
  AddRecipeButton,
  SearchSection,
  SearchBar,
  SearchInput,
  FilterSection,
  RecipeGrid,
  RecipeCard,
  EmptyState,
  ModalContent,
  ActiveFilters,
  FilterContainer
} from './styles';
import { Recipe } from '../../interface/recipe-interface';
import { allRecipes, isRecipesLoading } from '../../slices/recipe/recipe.selector';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipesThunk } from '../../slices/recipe/recipe.thunks';
import { categories, regions, difficulties, dietaryFilters } from '../../constants/recipe-filter.constant';
import { useTheme } from '@mui/material/styles';

const Recipes: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(allRecipes);
  const isLoading = useSelector(isRecipesLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const queryParams: Record<string, string> = {};
    
    // Add category filter if not 'All'
    if (filters.category && filters.category !== 'All') {
      queryParams.category = filters.category;
    }

    // Add region filter
    if (filters.region) {
      queryParams.region = filters.region;
    }

    // Add difficulty filter
    if (filters.difficulty) {
      queryParams.difficulty = filters.difficulty;
    }

    // Add dietary filters
    dietaryFilters.forEach(({ key }) => {
      if (filters[key] !== undefined) {
        queryParams[key] = filters[key];
      }
    });

    // Add search term
    if (searchTerm) {
      queryParams.search = searchTerm;
    }

    dispatch(fetchAllRecipesThunk(queryParams) as any);
  }, [filters, searchTerm, dispatch]);

  const handleRecipeClick = (recipeId: number) => {
    navigate(`/recipes/${recipeId}`);
  };

  const toggleFilter = (key: string, value: string) => {
    setFilters(prev => {
      const isSame = prev[key] === value;
      const updated = { ...prev };
      if (isSame) {
        delete updated[key];
      } else {
        updated[key] = value;
      }
      return updated;
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearAllFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  const renderActiveFilters = () => {
    const activeFilters = [];
    
    if (filters.category && filters.category !== 'All') {
      activeFilters.push(
        <Chip
          key="category"
          label={`Category: ${filters.category}`}
          onDelete={() => toggleFilter('category', '')}
          sx={{ m: 0.5 }}
        />
      );
    }

    if (filters.region) {
      activeFilters.push(
        <Chip
          key="region"
          label={`Region: ${filters.region}`}
          onDelete={() => toggleFilter('region', '')}
          sx={{ m: 0.5 }}
        />
      );
    }

    if (filters.difficulty) {
      activeFilters.push(
        <Chip
          key="difficulty"
          label={`Difficulty: ${filters.difficulty}`}
          onDelete={() => toggleFilter('difficulty', '')}
          sx={{ m: 0.5 }}
        />
      );
    }

    dietaryFilters.forEach(({ label, key }) => {
      if (filters[key] === 'true') {
        activeFilters.push(
          <Chip
            key={key}
            label={label}
            onDelete={() => toggleFilter(key, '')}
            sx={{ m: 0.5 }}
          />
        );
      }
    });

    return activeFilters;
  };

  return (
    <RecipesContainer>
      <HeaderSection>
        <HeaderContent>
          <Typography variant="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <RestaurantIcon /> All Recipes
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore meals from breakfast to dinner — and everything in between!
          </Typography>
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
            onChange={handleSearchChange}
          />
        </SearchBar>
        <FilterContainer>
          <Paper 
            elevation={0}
            sx={{ 
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                '@media (max-width: 600px)': {
                  flexDirection: 'column'
                }
              }}>
                <FormControl 
                  size="small" 
                  sx={{ 
                    minWidth: 180, 
                    maxWidth: 200,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: 'background.paper',
                      '& .MuiSelect-select': {
                        color: 'primary.main'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main'
                      }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'primary.main'
                    },
                    '& .MuiSelect-icon': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <InputLabel sx={{ fontSize: '14px', color: 'primary.main' }}>Category</InputLabel>
                  <Select
                    value={filters.category || 'All'}
                    label="Category"
                    onChange={(e) => toggleFilter('category', e.target.value)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: 'background.paper',
                          '& .MuiMenuItem-root': {
                            color: 'primary.main',
                            '&.Mui-selected': {
                              backgroundColor: 'rgba(255, 163, 102, 0.08)',
                              color: 'primary.main',
                              fontWeight: 600
                            },
                            '&.Mui-selected:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.12)'
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.04)'
                            }
                          }
                        }
                      }
                    }}
                  >
                    {categories.map((category) => (
                      <MenuItem 
                        key={category} 
                        value={category}
                        sx={{ 
                          fontSize: '14px',
                          color: 'primary.main',
                          '&.Mui-selected': {
                            backgroundColor: 'rgba(255, 163, 102, 0.08)',
                            fontWeight: 600
                          }
                        }}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl 
                  size="small" 
                  sx={{ 
                    minWidth: 180, 
                    maxWidth: 200,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: 'background.paper',
                      '& .MuiSelect-select': {
                        color: 'primary.main'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main'
                      }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'primary.main'
                    },
                    '& .MuiSelect-icon': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <InputLabel sx={{ fontSize: '14px', color: 'primary.main' }}>Region</InputLabel>
                  <Select
                    value={filters.region || ''}
                    label="Region"
                    onChange={(e) => toggleFilter('region', e.target.value)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: 'background.paper',
                          '& .MuiMenuItem-root': {
                            color: 'primary.main',
                            '&.Mui-selected': {
                              backgroundColor: 'rgba(255, 163, 102, 0.08)',
                              color: 'primary.main',
                              fontWeight: 600
                            },
                            '&.Mui-selected:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.12)'
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.04)'
                            }
                          }
                        }
                      }
                    }}
                  >
                    {regions.map((region) => (
                      <MenuItem 
                        key={region} 
                        value={region}
                        sx={{ 
                          fontSize: '14px',
                          color: 'primary.main',
                          '&.Mui-selected': {
                            backgroundColor: 'rgba(255, 163, 102, 0.08)',
                            fontWeight: 600
                          }
                        }}
                      >
                        {region}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl 
                  size="small" 
                  sx={{ 
                    minWidth: 180, 
                    maxWidth: 200,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: 'background.paper',
                      '& .MuiSelect-select': {
                        color: 'primary.main'
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main'
                      }
                    },
                    '& .MuiInputLabel-root': {
                      color: 'primary.main'
                    },
                    '& .MuiSelect-icon': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <InputLabel sx={{ fontSize: '14px', color: 'primary.main' }}>Difficulty</InputLabel>
                  <Select
                    value={filters.difficulty || ''}
                    label="Difficulty"
                    onChange={(e) => toggleFilter('difficulty', e.target.value)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: 'background.paper',
                          '& .MuiMenuItem-root': {
                            color: 'primary.main',
                            '&.Mui-selected': {
                              backgroundColor: 'rgba(255, 163, 102, 0.08)',
                              color: 'primary.main',
                              fontWeight: 600
                            },
                            '&.Mui-selected:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.12)'
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 163, 102, 0.04)'
                            }
                          }
                        }
                      }
                    }}
                  >
                    {difficulties.map((difficulty) => (
                      <MenuItem 
                        key={difficulty} 
                        value={difficulty}
                        sx={{ 
                          fontSize: '14px',
                          color: 'primary.main',
                          '&.Mui-selected': {
                            backgroundColor: 'rgba(255, 163, 102, 0.08)',
                            fontWeight: 600
                          }
                        }}
                      >
                        {difficulty}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {dietaryFilters.map(({ label, key }) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          size="small"
                          checked={filters[key] === 'true'}
                          onChange={(e) => toggleFilter(key, e.target.checked ? 'true' : '')}
                          sx={{
                            py: 0.5,
                            color: 'primary.main',
                            '&.Mui-checked': {
                              color: 'primary.main'
                            },
                            '&:hover': {
                              color: 'primary.main'
                            }
                          }}
                        />
                      }
                      label={
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontSize: '14px',
                            color: 'primary.main',
                            fontWeight: filters[key] === 'true' ? 600 : 400
                          }}
                        >
                          {label}
                        </Typography>
                      }
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: 'primary.main'
                        }
                      }}
                    />
                  ))}
                </Box>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<ClearAllIcon sx={{ color: 'primary.main' }} />}
                  onClick={clearAllFilters}
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'rgba(255, 163, 102, 0.04)'
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: '14px', color: 'primary.main' }}>
                    Clear All
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Paper>
        </FilterContainer>
      </SearchSection>

      {isLoading ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography>Loading recipes...</Typography>
        </Box>
      ) : recipes.length > 0 ? (
        <RecipeGrid>
          {recipes.map((recipe: Recipe) => (
            <RecipeCard 
              key={recipe.id}
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <Box
                className="image"
                sx={{
                  backgroundImage: `url(https://res.cloudinary.com/drzlks4sk/image/upload/${recipe.imageId})`,
                }}
              />
              <Box className="content">
                <Typography variant="h4" component="h4">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>
                <Box className="tags">
                  <Chip 
                    label={recipe.category} 
                    size="small" 
                    sx={{ 
                      mr: 1,
                      backgroundColor: (() => {
                        switch(recipe.category) {
                          case 'Breakfast':
                            return '#FFF3E0'; // Light Orange
                          case 'Lunch':
                            return '#E3F2FD'; // Light Blue
                          case 'Dinner':
                            return '#F3E5F5'; // Light Purple
                          case 'Snack':
                            return '#E8F5E9'; // Light Green
                          default:
                            return 'background.paper';
                        }
                      })(),
                      color: (() => {
                        switch(recipe.category) {
                          case 'Breakfast':
                            return '#E65100'; // Dark Orange
                          case 'Lunch':
                            return '#1565C0'; // Dark Blue
                          case 'Dinner':
                            return '#6A1B9A'; // Dark Purple
                          case 'Snack':
                            return '#2E7D32'; // Dark Green
                          default:
                            return 'text.primary';
                        }
                      })(),
                      borderRadius: '16px',
                      '& .MuiChip-label': {
                        fontSize: '12px',
                        fontWeight: 500
                      }
                    }} 
                  />
                  {recipe.isVegetarian && (
                    <Chip 
                      label="Vegetarian" 
                      size="small"
                      sx={{ 
                        backgroundColor: '#E8F5E9', // Light Green
                        color: '#2E7D32', // Dark Green
                        borderRadius: '16px',
                        '& .MuiChip-label': {
                          fontSize: '12px',
                          fontWeight: 500
                        }
                      }}
                    />
                  )}
                  {recipe.isGlutenFree && (
                    <Chip 
                      label="Gluten Free" 
                      size="small"
                      sx={{ 
                        ml: 1,
                        backgroundColor: '#FFF8E1', // Light Amber
                        color: '#FF8F00', // Dark Amber
                        borderRadius: '16px',
                        '& .MuiChip-label': {
                          fontSize: '12px',
                          fontWeight: 500
                        }
                      }}
                    />
                  )}
                  {recipe.containsEgg && (
                    <Chip 
                      label="Contains Egg" 
                      size="small"
                      sx={{ 
                        ml: 1,
                        backgroundColor: '#FCE4EC', // Light Pink
                        color: '#C2185B', // Dark Pink
                        borderRadius: '16px',
                        '& .MuiChip-label': {
                          fontSize: '12px',
                          fontWeight: 500
                        }
                      }}
                    />
                  )}
                </Box>
              </Box>
            </RecipeCard>
          ))}
        </RecipeGrid>
      ) : (
        <EmptyState>
          <Box
            component="img"
            src="/assets/empty-recipes.png"
            alt="No recipes found"
            sx={{ width: 200, height: 200, objectFit: 'contain' }}
          />
          <Typography variant="body1" color="text.secondary">
            No recipes found. Try changing your filters
          </Typography>
        </EmptyState>
      )}

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalContent>
          <Typography variant="h2">Add New Recipe</Typography>
          {/* Add Recipe form will be implemented here */}
        </ModalContent>
      </Modal>
    </RecipesContainer>
  );
};

export default Recipes; 
