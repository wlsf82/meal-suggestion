const meals = [
  {
    name: "Escondidinho",
    ingredients: ["batata ou aipim", "picado carnal", "molho de tomate", "cebola", "alho"],
    type: "hot"
  },
  {
    name: "Arroz exótico",
    ingredients: ["arroz", "tofu", "brócolis", "ervilha", "cenoura"],
    type: "hot"
  },
  {
    name: "À la minuta",
    ingredients: ["batata frita", "arroz", "proteína", "feijão"],
    type: "hot"
  },
  {
    name: "Almondegas com arroz",
    ingredients: ["almondegas", "molho de tomate", "arrox",],
    type: "hot"
  },
  {
    name: "Lasanha de berinjela",
    ingredients: ["berinjela", "molho de tomate", "molho branco", "queijo vegano", "massa de lasanha"],
    type: "hot"
  },
  {
    name: "Espaguete de abobrinha",
    ingredients: ["abobrinha", "tomate", "manjericão", "azeite", "massa de espaguete"],
    type: "hot"
  },
  {
    name: "Massa à bolonhesa",
    ingredients: ["azeite", "massa de espaguete", "molho de tomate", "cebola", "alho"],
    type: "hot"
  },
  {
    name: "Chilly",
    ingredients: ["picado carnal", "feijão vermelho", "molho de tomate", "pimenta", "milho", "abacate", "cebola", "tomate", "alho", "pimentão", "nachos"],
    type: "hot"
  },
  {
    name: "Carreteiro",
    ingredients: ["proteína", "arroz", "cebola", "alho", "molho de tomate", "tempero verde"],
    type: "hot"
  },
  {
    name: "Nhoque",
    ingredients: ["massa de nhoque", "cebola", "alho", "molho vermelho", "pimenta do reino"],
    type: "hot"
  },
  {
    name: "Strogonoff",
    ingredients: ["proteína", "arroz", "cebola", "alho", "molho de tomate", "creme vegetal", "batata palha ou frita"],
    type: "hot"
  },
  {
    name: "Galeto de frangos felizes",
    ingredients: ["maionese", "batata rosa", "cenoura", "cebola", "alho", "milho", "molho de tomate", "espagueti", "proteína"],
    type: "hot"
  },
  {
    name: "Feijão tropeiro",
    ingredients: ["feijão", "farinha de mandioca", "cenoura", "couve", "cebola", "alho"],
    type: "hot"
  },
  {
    name: "Arroz e feijão",
    ingredients: ["arroz", "feijão", "cebola", "alho"],
    type: "hot"
  },
  {
    name: "Tofu e legumes ao shoyo com arroz",
    ingredients: ["arroz", "tofu", "pimentão", "cebola", "cenoura", "abobrinha", "shoyo"],
    type: "hot"
  },
  {
    name: "Salada de quinoa",
    ingredients: ["quinoa", "tomate", "pimentão", "abacate", "limão", "coentro"],
    type: "salad"
  },
  {
    name: "Salada de falafel",
    ingredients: ["falafel", "folhas verdes", "tomate", "azeitonas", "humus"],
    type: "salad"
  },
  {
    name: "Saladão",
    ingredients: ["folhas verdes", "tomate", "azeitonas", "milho", "proteína (ex.: Heura)", "crutons", "pimenta"],
    type: "salad"
  },
  {
    name: "Salada de quinoa e pistachos",
    ingredients: ["quinoa", "pistacho", "cenoura ralada", "ervilha", "edamame", "gengibre", "agave"],
    type: "salad"
  },
  {
    name: "Iron Energy",
    ingredients: ["folhas", "quinoa", "cranberries", "nozes", "uva verde", "molho agridoce", "brocolis", "repolho"],
    type: "salad"
  },
  {
    name: "Salada de grão de bico",
    ingredients: ["grão de bico", "cenoura", "pimentão", "coentro", "suco de limão", "pimenta"],
    type: "salad"
  },
  {
    name: "Ramen",
    ingredients: ["massa de ramen", "brócolis", "cenoura", "edameme", "tofu", "cebolinha", "misô"],
    type: "soup"
  },
  {
    name: "Sopa de legumes",
    ingredients: ["cenoura", "abóbora", "cebola", "temperos"],
    type: "soup"
  },
  {
    name: "Canja sem galinha",
    ingredients: ["cenoura", "cebola", "alho", "batata", "arroz", "tempero verde", "proteína (grão de bico ou Heura)"],
    type: "soup"
  },
  {
    name: "Minestrone",
    ingredients: ["massa para sopa", "feijão", "ervilha", "cenoura", "molho de tomate"],
    type: "soup"
  },
  {
    name: "Sopa de batata doce cremosa",
    ingredients: ["batata doce", "leite de côco", "pimenta"],
    type: "soup"
  },
  {
    name: "Sopa de cenoura cremosa",
    ingredients: ["cenoura", "cebola", "alho"],
    type: "soup"
  },
  {
    name: "Sopa de moranga cremosa",
    ingredients: ["moranaga", "cebola", "alho"],
    type: "soup"
  },
  {
    name: "Caldo verde",
    ingredients: ["espinafre", "brócolis", "ervilha", "cebola", "alho", "couve"],
    type: "soup"
  },
  {
    name: "Sopa de lentilha",
    ingredients: ["lentilha", "cenoura", "cebola", "alho", "tempero verde"],
    type: "soup"
  },
  {
    name: "Sopa cremosa de brócolis",
    ingredients: ["brócolis", "batata", "cenoura", "ervilha", "creme vegetal", "grão de bico"],
    type: "soup"
  },
  {
    name: "Sanduíche de milanesa de seitan",
    ingredients: ["maionese ou humus", "pão integral", "bife à milanesa de seitan", "tomate", "alface"],
    type: "sandwich"
  },
  {
    name: "Xis Macaco",
    ingredients: ["pão de sanduíche", "pasta de amendoim", "banana", "canela"],
    type: "sandwich"
  },
  {
    name: "Subway",
    ingredients: ["maionese ou humus", "baguete", "tomate", "alface", "cebola roxa", "Heura"],
    type: "sandwich"
  },
  {
    name: "Hamburger",
    ingredients: ["maionese ou humus", "pão de hamburger", "tomate", "alface", "proteína"],
    type: "sandwich"
  },
  {
    name: "Cachorro quente",
    ingredients: ["pão de cachorro quente", "salsicha", "molho de tomate", "milho", "ervilha", "batata palha", "catchup", "mostarda"],
    type: "sandwich"
  },
  {
    name: "Sanduíche de tomate e pepino",
    ingredients: ["humus ou margarina", "pão francês", "tomate", "pepino", "pimenta do reino"],
    type: "sandwich"
  },
];

const mealEnum = Object.freeze({
  hot: 'prato quente',
  salad: 'salada',
  sandwich: 'sanduíche',
  soup: 'sopa'
})

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
