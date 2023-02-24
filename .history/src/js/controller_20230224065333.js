/* helper libraries for code bundling */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/* import model function */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
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
    /* get search data */
    const query = searchView.getQuery();
    /* clear input field */

    searchView._clearSearchInput();

    if (!query) return;
    resultsView.renderSpinner();

    await model.loadSearchResult(query);
    //render pagination buttons
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = async function () {
  console.log('control pagination');

  await resultsView.render(model.getSearchResultsPage(6));
  await paginationView.render(model.state.serachRecipe);
};
const init = () => {
  searchView.addHandlerSearch(controlSearchRecipe);
  recipeView.addHandlerRender(getRecipe);
  paginationView.addClickHandler(controlPagination);
};
init();
