import { BASE_URL } from './config';
import { getRecipe } from './helper';
export const state = {
  recipe: {},
};
/*--load recipe from forkify api-- */
export const loadRecipe = async recipeId => {
  try {
    const data = await getRecipe(`${BASE_URL}${recipeId}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      coookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
/* search for recipe */
export const loadSearchResult = async query => {
  try {
    const data = await getRecipe(`${BASE_URL}?search=${query}`);
    recipes = data.data.recipes;
    console.log(recipes);
  } catch (err) {
    throw err;
  }
};
loadSearchResult('pizza');
