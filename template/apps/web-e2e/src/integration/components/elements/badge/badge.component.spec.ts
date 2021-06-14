describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=badgecomponent--primary&knob-tag'));

  it('should render the component', () => {
    cy.get('template-badge').should('exist');
  });
});
