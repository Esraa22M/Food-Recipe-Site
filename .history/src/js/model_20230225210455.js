import { BASE_URL, RECIPES_PER_PAGE } from './config';
import { getRecipe } from './helper';
export const state = {
  recipe: {},
  serachRecipe: {
    query: '',
    searchResults: [],
    currentPage: 1,
    resultsPerPage: RECIPES_PER_PAGE,
  },
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
    state.serachRecipe.query = query;
    const data = await getRecipe(`${BASE_URL}?search=${query}`);
    state.serachRecipe.searchResults = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};
export const getSearchResultsPage = function (
  page = state.serachRecipe.currentPage
) {
  state.serachRecipe.currentPage = page;
  const start = (page - 1) * state.serachRecipe.resultsPerPage;
  const end = page * state.serachRecipe.resultsPerPage;
  return state.serachRecipe.searchResults.slice(start, end);
};
/* updating servings number */
export const updatingServings = newServingNumber => {
  //ingredients
  console.log('esraa');
  const { recipe } = state;
  recipe.ingredients.forEach(element => {
    element.quantity =
      (element.quantity * newServingNumber) / recipe.newServingNumber;
  });
  recipe.servings = newServingNumber;
};
