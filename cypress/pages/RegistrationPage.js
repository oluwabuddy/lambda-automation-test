class RegistrationPage {
    clickRegister() {
      cy.contains('Register').click();
    }
  
    fillRegistrationForm(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('#confirmPassword').type(password);
    }
  
    completeRegistration() {
      cy.contains('Register').click();
    }
  }
  
  export default new RegistrationPage();
  