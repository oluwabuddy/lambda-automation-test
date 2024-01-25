import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';
import CategoryPage from '../../pages/CategoryPage';
import ProductPage from '../../pages/ProductPage';
import RegistrationPage from '../../pages/RegistrationPage';

Given('I visit the E-commerce Playground website', () => {
  HomePage.visit();
});

When('I click on {string}', (category) => {
  CategoryPage.clickShopByCategory();
  CategoryPage.clickMP3Player();
});

And('I hover over the product and click the add to wishlist icon', () => {
  ProductPage.hoverProductAndAddToWishlist();
});

And('I click {string} from the pop-up displayed', (action) => {
  RegistrationPage.clickRegister();
});

And('I fill in necessary details for registration', () => {
    RegistrationPage.clickRegister();
    RegistrationPage.fillRegistrationForm('John', 'Doe', '123456789', 'SecretPassword');
    RegistrationPage.completeRegistration();
});

And('I complete the registration', () => {
  RegistrationPage.completeRegistration();
});

Then('I should see a successful registration message', () => {
  cy.log('Registration successful!');
});
