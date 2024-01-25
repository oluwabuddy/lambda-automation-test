class RegistrationPage {
    clickRegister() {
      cy.contains('Register').click({force: true});
    }
    
    fillRegistrationForm(username,lastname, email,telephone, password,  ) {
      cy.get('#input-firstname').type(username);
      cy.get('#input-lastname').type(lastname);
      cy.get('#input-email').type(email);
      cy.get('#input-telephone').type(telephone);
      cy.get('#input-password').type(password);
      cy.get('#input-confirm').type(password);
      cy.get('.custom-control-label').click();

    }
  
    completeRegistration() {
      cy.contains('Register').click();
    }
  }
  
  export default new RegistrationPage();
  