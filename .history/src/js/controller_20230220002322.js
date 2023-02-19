/* helper libraries for code bundling */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/* import model function */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
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

const init = () => {
  recipeView.addHandlerRender(getRecipe);
};
init();
