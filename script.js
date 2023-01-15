const meals = [
  {
    name: "Lasanha de berinjela",
    ingredients: ["berinjela", "molho de tomate", "queijo vegano", "massa de lasanha"],
    type: "hot"
  },
  {
    name: "Salada de quinoa",
    ingredients: ["quinoa", "tomate", "pimentão", "abacate", "limão", "coentro"],
    type: "salad"
  },
  {
    name: "Espaguete de abobrinha",
    ingredients: ["abobrinha", "tomate", "manjericão", "azeite", "massa de espaguete"],
    type: "hot"
  },
  {
    name: "Sopa de legumes",
    ingredients: ["cenoura", "abóbora", "cebola", "temperos"],
    type: "soup"
  },
  {
    name: "Sanduíche de grão-de-bico",
    ingredients: ["pão integral", "grão-de-bico", "tomate", "alface"],
    type: "sandwich"
  }
];

const mealName = document.getElementById("meal-name");
const ingredientsLabel = document.getElementById("ingredients-label");
const ingredientsList = document.getElementById("ingredients-list");
const generateMealButton = document.getElementById("generate-meal-button");
const mealTypeFilter = document.getElementById("meal-type-filter");

let filteredMeals = [...meals];

mealTypeFilter.addEventListener("change", e => {
  const selectedType = e.target.value;
  if (selectedType === "all") {
    filteredMeals = [...meals];
  } else {
    filteredMeals = meals.filter(meal => meal.type === selectedType);
  }
});

function generateMeal() {
  const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
  mealName.innerHTML = `Refeição: ${randomMeal.name}`;
  ingredientsList.innerHTML = "";
  for (const ingredient of randomMeal.ingredients) {
    const listItem = document.createElement("li");
    ingredientsLabel.innerHTML = "Ingredientes:"
    listItem.innerHTML = ingredient;
    ingredientsList.appendChild(listItem);
  }
}

window.onload = () => {
  generateMeal();
};

generateMealButton.addEventListener("click", generateMeal);
