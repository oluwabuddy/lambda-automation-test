class ProductPage {
    hoverProductAndAddToWishlist() {
      cy.get('#mz-product-grid-image-28-212408')
        .first()
        .trigger('mouseover')
        //click add to wishlist
        cy.get('button.btn.btn-cart.cart-28')
        .click({ force: true })
      
    }
  }
  
  export default new ProductPage();
