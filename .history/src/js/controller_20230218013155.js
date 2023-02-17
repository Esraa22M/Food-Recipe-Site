import icons from '../img/icons.svg';

/* helper libraries for code bundling */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
/* import model function */
import * as model from './model.js';
import recipeView from './views/recipeView.js';
const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const getRecipe = async () => {
  /*load recipe */
  let recipeId = window.location.hash.slice(1);
  if (!recipeId) return;
  try {
    recipeView.renderSpinner(recipeContainer);

    await model.loadRecipe(recipeId);
    /* rendering recipe */
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, getRecipe)
);
