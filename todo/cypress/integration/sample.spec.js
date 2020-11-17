const { createYield } = require("typescript")
/* 
describe('Teste input', () => {
    it('Criando um todo', () => {
        cy.visit('http://localhost:4200/')

        cy.get('input.input-todo').type('lavar moto')

        cy.get('button').click()
    })
})
*/

/* 
describe('Exlcuindo um item da lista de todos', () => { 
    it('Excluindo um todo', () => {
        cy.visit('http://localhost:4200/')

        cy.get('nz-list-item:nth-child(2)>i').click()
    })
})
*/
describe('Marcando a terceira tarefa como feita ', () => {
    it('Criando um todo', () => {
        cy.visit('http://localhost:4200/')

        cy.get('nz-list-item:nth-child(2)>label').click()

    })
})