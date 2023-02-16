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
const getAllRecipes = async () => {
  try {
    const recipesResponse = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/'
    );

    if (!recipesResponse.ok) {
      throw new Error(`${data.statusText}`);
    }
    const { recipe } = await recipesResponse.json();
    console.log(recipe);
    recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
    };
    console.log(recipe);
  } catch (err) {
    console.log(err);
  }
};
getAllRecipes();
