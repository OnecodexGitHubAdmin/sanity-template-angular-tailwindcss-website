describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=portabletextcomponent--primary&knob-item'));

  it('should render the component', () => {
    cy.get('template-portable-text').should('exist');
  });
});
