class CategoryPage {
    clickShopByCategory() {
      cy.contains('Shop by Category').click();
    }
  
    clickMP3Player() {
      cy.contains('MP3 Player').click();
    }
  }
  
  export default new CategoryPage();
  