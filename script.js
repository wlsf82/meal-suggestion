const meals = [
  {
    name: "Lasanha de berinjela",
    ingredients: ["berinjela", "molho de tomate", "queijo vegano", "massa de lasanha"]
  },
  {
    name: "Salada de quinoa",
    ingredients: ["quinoa", "tomate", "pimentão", "abacate", "limão", "coentro"]
  },
  {
    name: "Espaguete de abobrinha",
    ingredients: ["abobrinha", "tomate", "manjericão", "azeite", "massa de espaguete"]
  }
];

const mealContainer = document.getElementById("meal-container");
const mealName = document.getElementById("meal-name");
const ingredientLabel = document.getElementById("ingredients-label");
const ingredientList = document.getElementById("ingredient-list");
const generateMealButton = document.getElementById("generate-meal-button");

function generateMeal() {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  mealName.innerHTML = `Refeição: ${randomMeal.name}`;
  ingredientList.innerHTML = "";
  for (const ingredient of randomMeal.ingredients) {
    const listItem = document.createElement("li");
    listItem.innerHTML = ingredient;
    ingredientLabel.innerHTML = "Ingredientes:"
    ingredientList.appendChild(listItem);
  }
}

window.onload = () => {
  generateMeal();
};
generateMealButton.addEventListener("click", generateMeal);
