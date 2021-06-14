describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-route&knob-inverse&knob-title'));

  it('should render the component', () => {
    cy.get('template-button').should('exist');
  });
});
