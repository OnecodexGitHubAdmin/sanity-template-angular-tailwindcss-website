describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blockcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-block').should('exist');
  });
});
