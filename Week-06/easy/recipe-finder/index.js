let dropdown = document.querySelector("select#category-type");

fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  .then((res) => res.json())
  .then((res) => {
    res.meals.forEach(({ strCategory }) => {
      const newOption = document.createElement("option");
      newOption.setAttribute("value", strCategory);
      newOption.innerText = strCategory;
      dropdown.appendChild(newOption);
    });

    if (!categoryType) {
      categoryType = dropdown.value;
    }
  });

let categoryType = null;

dropdown.addEventListener("change", (event) => {
  categoryType = event.target.value;
});

async function submit() {
  if (!categoryType) {
    return;
  }

  const categoryRes = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryType)}`,
  );
  const categoryData = await categoryRes.json();
  const categoryMeals = categoryData?.meals || [];

  const recipes = await Promise.all(
    categoryMeals.map(async ({ idMeal }) => {
      const recipeRes = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
      );
      const recipeData = await recipeRes.json();
      return recipeData?.meals?.[0];
    }),
  );

  const displayRecipe = document.getElementById("recipe-div");
  displayRecipe.className = "";

  const recipesDiv = document.getElementById("recipes");
  recipesDiv.className = "recipes";
  recipesDiv.innerHTML = recipes
    .filter(Boolean)
    .map(
      (recipe) => `<div class="recipe">
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="height: auto; width: auto;" />
            <h4>${recipe.strMeal}</h4>
            <p>Instructions: ${recipe.strInstructions || "N/A"}</p>
            <a href="${recipe.strSource}" target="_blank">Source</a>
            <a href="${recipe.strYoutube}" target="_blank">Follow on YouTube</a>
        </div>`,
    )
    .join("");
}
