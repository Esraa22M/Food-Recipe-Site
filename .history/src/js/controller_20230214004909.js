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
      'https://forkify-api.herokuapp.com/api/get'
    );
    const data = await recipesResponse.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getAllRecipes();
