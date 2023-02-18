/* fetch function that fetch recipe from api */
export const getRecipe = async url => {
  try {
    const recipesResponse = await fetch(`${url}/${recipeId}`);
    if (!recipesResponse.ok) {
      throw new Error(`${data.statusText}`);
    }
    return await recipesResponse.json();
  } catch (err) {
    console.log(err);
  }
};
