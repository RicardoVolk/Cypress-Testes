describe('Cadastro novo usuário', () => {


  it('Deve preencher o campo de cadastro', () => {
    cy.visit('https://www.amazon.com.br')
    cy.get('#nav-link-accountList > .nav-line-2').click()
    cy.get('#createAccountSubmit').click()
    cy.get('#ap_customer_name').type('Ricardo').click()
    cy.get('#ap_email').type('teste@teste.com.br').click()
    cy.get('#ap_password').type('teste123').click()
    cy.get('#ap_password_check').type('teste123').click()
  })

})
