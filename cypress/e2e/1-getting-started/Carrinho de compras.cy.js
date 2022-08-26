describe('Carrinho de compra' , () => {

  it('Adicionar um produto no carrinho', () => {
      cy.visit('https://www.amazon.com.br')

      //Buscar item
      .get('#twotabsearchtextbox')
      .click()
      .type('console playStation 5  {enter}')
      .get(
        '[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container'
      )
      .first()
      .click()

      //existe o produto em estoque
      .get('#add-to-cart-button')
      .should('be.visible')

      //Adiciona o produto no carrinho
      .get('#add-to-cart-button')
      .click()

      //Fecha o pedido
      .get('#sw-gtc > .a-button-inner > .a-button-text').click()
  
  })

  it('Adicionando mais itens no carrinho', () => {
    cy.visit('https://www.amazon.com.br')

      //Buscar item
      .get('#twotabsearchtextbox')
      .click()
      .type('console playStation 5 {enter}')
      .get(
        '[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container'
      )
      .first()
      .click()

      //existe o produto em estoque
      .get('#add-to-cart-button').should('be.visible')
      
     
      //Adiciona o produto no carrinho
      .get('#add-to-cart-button').click()
      .get('#a-autoid-11 > .a-button-inner > .a-button-input').click()
      .get('#a-autoid-12 > .a-button-inner > .a-button-input').click()
      
      //Fecha o pedido
      .get('#sw-gtc > .a-button-inner > .a-button-text').click()    

      
      
  })  

})