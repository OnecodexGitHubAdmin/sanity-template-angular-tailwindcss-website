describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productcollectioncomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-product-collection').should('exist');
  });
});
