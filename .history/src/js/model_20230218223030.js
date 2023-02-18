import { BASE_URL } from './config';
import { getRecipe } from './helper';
export const state = {
  recipe: {},
};
/*--load recipe from forkify api-- */
export const loadRecipe = async recipeId => {
  try {
    const data = await getRecipe(`${BASE_URL}/${''}`);
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
    console.error(err);
  }
};
