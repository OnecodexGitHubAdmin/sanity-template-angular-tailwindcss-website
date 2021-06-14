describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-card').should('exist');
  });
});
