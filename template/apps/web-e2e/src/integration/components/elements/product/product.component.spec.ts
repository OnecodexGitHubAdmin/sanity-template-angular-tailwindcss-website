describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-product').should('exist');
  });
});
