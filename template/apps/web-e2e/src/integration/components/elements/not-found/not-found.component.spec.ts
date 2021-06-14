describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=notfoundcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-not-found').should('exist');
  });
});
