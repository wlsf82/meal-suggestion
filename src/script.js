const mealEnum = Object.freeze({
  hot: 'prato quente',
  salad: 'salada',
  sandwich: 'sanduíche',
  soup: 'sopa'
})

const mealName = document.getElementById('meal-name')
const ingredientsLabel = document.getElementById('ingredients-label')
const ingredientsList = document.getElementById('ingredients-list')
const generateMealButton = document.getElementById('generate-meal-button')
const mealTypeFilter = document.getElementById('meal-type-filter')

// eslint-disable-next-line no-undef
let filteredMeals = [...meals]

mealTypeFilter.addEventListener('change', e => {
  const selectedType = e.target.value
  if (selectedType === 'all') {
    // eslint-disable-next-line no-undef
    filteredMeals = [...meals]
  } else {
    // eslint-disable-next-line no-undef
    filteredMeals = meals.filter(meal => meal.type === selectedType)
  }
})

function generateMeal() {
  const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)]
  mealName.innerHTML = `Refeição: ${randomMeal.name} (${mealEnum[randomMeal.type]})`
  ingredientsList.innerHTML = ''
  for (const ingredient of randomMeal.ingredients) {
    const listItem = document.createElement('li')
    ingredientsLabel.innerHTML = 'Ingredientes:'
    listItem.innerHTML = ingredient
    ingredientsList.appendChild(listItem)
  }
}

window.onload = () => {
  generateMeal()
}

generateMealButton.addEventListener('click', generateMeal)
