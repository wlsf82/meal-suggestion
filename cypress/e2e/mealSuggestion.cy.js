describe('Meal suggestion', () => {
  beforeEach(() => {
    cy.section('Pre-conditions')
    if (Cypress.env('environment') === 'prod') {
      cy.step('Visit the production version of the app')
      cy.visit('https://meal-suggestion.s3.eu-central-1.amazonaws.com/index.html')
    } else {
      cy.step('Visit the local version of the app')
      cy.visit('./src/index.html')
    }
    cy.step('Assert a random meal is shown')
    cy.title().should('be.equal', 'Sugestão de Refeição Vegana')
    cy.contains('h1', 'Refeição vegana 🌱')
      .as('heading')
      .should('be.visible')
    cy.contains('#filter-container label', 'Tipo:').should('be.visible')
    cy.get('#meal-type-filter')
      .as('filterSelectField')
      .should('be.visible')
      .and('have.value', 'all')
    cy.contains('#search-container label', 'Busca:').should('be.visible')
    cy.get('#search-field')
      .as('searchField')
      .should('be.visible')
    cy.get('#search-container button')
      .as('searchButton')
      .should('be.visible')
    cy.contains('#meal-name', 'Refeição: ')
      .as('mealName')
      .should('be.visible')
    cy.contains('#ingredients-label', 'Ingredientes:')
      .as('ingredientsLabel')
      .should('be.visible')
    cy.get('ul li')
      .as('ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
    cy.contains('button', 'Outra sugestão')
      .as('button')
      .should('be.visible')
    cy.get('body').should('have.css', 'background-color', 'rgb(254, 246, 228)')
    cy.section('End of pre-conditions')
  })

  it('shows one of all meal suggestions', () => {
    cy.step('Click "Other suggestion" button')
    cy.get('@button')
      .click()
      .blur()

    cy.step('Assert that meal and ingredients are visible')
    cy.get('@mealName').should('be.visible')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
  })

  it('shows a filtered meal suggestion', () => {
    cy.step('Filter by salads')
    cy.get('@filterSelectField').select('Saladas')

    cy.step('Assert salad is visible')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', ' (salada)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
  })

  it('searches for a meal by typing and clicking the submit button', () => {
    cy.step('Search for a specific meal')
    cy.get('@searchField').type('Ramen')
    cy.get('@searchButton')
      .click()
      .blur()

    cy.step('Assert specific meal is shown')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', 'Ramen (sopa)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .and('contain', 'massa de ramen')
      .and('contain', 'brócolis')
      .and('contain', 'cenoura')
      .and('contain', 'edamame')
      .and('contain', 'tofu')
      .and('contain', 'cebolinha')
      .and('contain', 'misô')
      .and('contain', 'milho')
      .its('length')
      .should('equal', 8)
  })

  it('makes sure trim works when searching', () => {
    cy.step('Search for a meal with empty spaces at the end')
    cy.get('@searchField').type('pepino    ')
    cy.get('@searchButton')
      .click()
      .blur()

    cy.step('Assert that trim works')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', 'pepino (sanduíche)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .and('contain', 'humus ou margarina')
      .and('contain', 'pão francês')
      .and('contain', 'tomate')
      .and('contain', 'pepino')
      .and('contain', 'pimenta do reino')
      .its('length')
      .should('equal', 5)
  })

  it('searches for a meal by typing and pressing ENTER', () => {
    cy.step('Type meal and press ENTER')
    cy.get('@searchField')
      .type('Ramen{enter}')
      .blur()

    cy.step('Assert that the correct meal is shown')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', 'Ramen (sopa)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .and('contain', 'massa de ramen')
      .and('contain', 'brócolis')
      .and('contain', 'cenoura')
      .and('contain', 'edamame')
      .and('contain', 'tofu')
      .and('contain', 'cebolinha')
      .and('contain', 'misô')
      .and('contain', 'milho')
      .its('length')
      .should('equal', 8)
  })

  it('searches for a meal by part of its name', () => {
    cy.step('Type part of a meal and press ENTER')
    cy.get('@searchField')
      .type('Ram{enter}')
      .blur()

    cy.step('Assert that the correct meal is shown')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', 'Ramen (sopa)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .and('contain', 'massa de ramen')
      .and('contain', 'brócolis')
      .and('contain', 'cenoura')
      .and('contain', 'edamame')
      .and('contain', 'tofu')
      .and('contain', 'cebolinha')
      .and('contain', 'misô')
      .and('contain', 'milho')
      .its('length')
      .should('equal', 8)
  })

  it('filters and searches for a meal', () => {
    cy.step('Filter by soups then search for a specific one')
    cy.get('@filterSelectField').select('Sopas')
    cy.get('@searchField')
      .type('Ramen{enter}')
      .blur()

    cy.step('Assert that specifc soup is shown')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', 'Ramen (sopa)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .and('contain', 'massa de ramen')
      .and('contain', 'brócolis')
      .and('contain', 'cenoura')
      .and('contain', 'edamame')
      .and('contain', 'tofu')
      .and('contain', 'cebolinha')
      .and('contain', 'misô')
      .and('contain', 'milho')
      .its('length')
      .should('equal', 8)
  })

  it('filters and searches for a meal (negative scenario)', () => {
    cy.step('Filter by soups then search for a non-soup meal')
    cy.get('@filterSelectField').select('Sopas')
    cy.get('@searchField')
      .type('Iron Energy{enter}')
      .blur()

    cy.step('Assert that soup is still visible')
    cy.get('@mealName')
      .should('be.visible')
      .and('contain', ' (sopa)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
  })

  it('shows h1 centralized on mobile viewport', { viewportWidth: 400 }, () => {
    cy.step('Render heading centralized on mobile viewport')
    cy.get('@heading').should('have.css', 'text-align', 'center')
  })
})
