class RegistrationPage {
  generateDynamicEmail() {
    const timestamp = new Date().getTime();
    return `user${timestamp}@example.com`;
  }
  clickRegister() {
    cy.contains('Register').click({ force: true });
  }
    
    fillRegistrationForm(username,lastname,telephone, password) {
      const dynamicEmail = this.generateDynamicEmail();
      cy.get('#input-firstname').type(username);
      cy.get('#input-lastname').type(lastname);
      cy.get('#input-email').type(dynamicEmail);
      cy.get('#input-telephone').type(telephone);
      cy.get('#input-password').type(password);
      cy.get('#input-confirm').type(password);
      cy.get('#input-agree').check({force: true} );

    }
  
    completeRegistration() {
      cy.contains('Continue').click();
    }
  }
  
  export default new RegistrationPage();
