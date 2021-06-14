describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contentcomponent--primary'));

  it('should render the component', () => {
    cy.get('template-content').should('exist');
  });
});
