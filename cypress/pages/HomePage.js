class HomePage {
    visit() {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
    }
  }
  
  export default new HomePage();
  