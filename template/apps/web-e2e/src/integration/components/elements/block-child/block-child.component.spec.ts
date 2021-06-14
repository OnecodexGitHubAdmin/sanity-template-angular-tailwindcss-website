describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blockchildcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-block-child').should('exist');
  });
});
