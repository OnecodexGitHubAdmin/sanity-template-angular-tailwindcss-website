describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topnavigationcomponent--primary&knob-items&knob-addShoppingCardIcon'));

  it('should render the component', () => {
    cy.get('template-top-navigation').should('exist');
  });
});
