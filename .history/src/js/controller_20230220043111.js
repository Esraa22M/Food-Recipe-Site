/* helper libraries for code bundling */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/* import model function */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
/* handle query one single recipe */
const getRecipe = async () => {
  /*load recipe */
  let recipeId = window.location.hash.slice(1);
  if (!recipeId) return;
  try {
    recipeView.renderSpinner();

    await model.loadRecipe(recipeId);
    /* rendering recipe */
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
/*------handle search for recipe------- */
const controlSearchRecipe = async () => {
  try {
    resultsView.renderSpinner();
    /* get search data */
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResult(query);
    console.log(model.state.serachRecipe.searchResults);
    /* clear input field */
    model;
  } catch (err) {
    console.log(err);
  }
};
controlSearchRecipe();
const init = () => {
  searchView.addHandlerSearch(controlSearchRecipe);
  recipeView.addHandlerRender(getRecipe);
};
init();
