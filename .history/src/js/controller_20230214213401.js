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
      'https://forkify-api.herokuapp.com/api/get?rId=47746'
    );

    const data = await recipesResponse.json().data;
    if (!recipesResponse.ok) {
      throw new Error(`${data.statusText}`);
    }
  } catch (err) {
    console.log(err);
  }
};
getAllRecipes();
