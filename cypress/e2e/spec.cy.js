describe('prueba spec', () => {
  it('test de peso 70 y estatura 170', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('#estatura').type(170)
    cy.get('#peso').invoke('val', '70').trigger('input')
    cy.get('#imc').contains('24.2 (Normal)')
  })
})
