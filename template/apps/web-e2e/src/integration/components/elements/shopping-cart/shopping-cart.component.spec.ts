describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shoppingcartcomponent--primary&knob-cart&knob-show'));

  it('should render the component', () => {
    cy.get('template-shopping-cart').should('exist');
  });
});
