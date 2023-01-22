describe('Meal suggestion', () => {
  beforeEach(() => {
    if (Cypress.env('environment') === 'prod') {
      cy.visit('https://meal-suggestion.s3.eu-central-1.amazonaws.com/index.html')
    } else {
      cy.visit('./src/index.html')
    }
    cy.title().should('be.equal', 'Sugestão de Refeição Vegana')
    cy.contains('h1', 'Refeição vegana 🌱').should('be.visible')
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
  })

  it('shows one of all meal suggestions', () => {
    cy.get('@button')
      .click()
      .blur()

    cy.get('@mealName').should('be.visible')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
  })

  it('shows a filtered meal suggestion', () => {
    cy.get('select#meal-type-filter').select('Saladas')

    cy.get('@mealName')
      .should('be.visible')
      .and('contain', ' (salada)')
    cy.get('@ingredientsLabel').should('be.visible')
    cy.get('@ingredients')
      .should('be.visible')
      .its('length')
      .should('be.at.least', 1)
  })
})
