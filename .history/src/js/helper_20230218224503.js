/* handles bad internet connection request takes a long time */
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
    const fetchUrl = fetch(url);
    const recipesResponse = await Promise.race([fetchUrl, timeout(0.5)]);
    if (!recipesResponse.ok) {
      throw new Error(`${data.statusText}`);
    }
    return await recipesResponse.json();
  } catch (err) {
    throw err;
  }
};
