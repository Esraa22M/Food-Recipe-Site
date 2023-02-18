/* handles bad internet connection */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
/* fetch function that fetch recipe from api */
export const getRecipe = async url => {
  try {
    const recipesResponse = await fetch(url);
    if (!recipesResponse.ok) {
      throw new Error(`${data.statusText}`);
    }
    return await recipesResponse.json();
  } catch (err) {
    throw err;
  }
};
