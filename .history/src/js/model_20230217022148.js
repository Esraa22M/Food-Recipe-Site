export const state = {
  recipe: {},
};
/*--load recipe from forkify api-- */
const loadRecipe = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};
const recipesResponse = await fetch(
  `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
);
if (!recipesResponse.ok) {
  throw new Error(`${data.statusText}`);
}
const data = await recipesResponse.json();
let { recipe } = data.data;
recipe = {
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  coookingTime: recipe.cooking_time,
  ingredients: recipe.ingredients,
};
