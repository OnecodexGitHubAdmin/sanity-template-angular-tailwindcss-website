describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productcardcomponent--primary&knob-product'));

  it('should render the component', () => {
    cy.get('template-product-card').should('exist');
  });
});
