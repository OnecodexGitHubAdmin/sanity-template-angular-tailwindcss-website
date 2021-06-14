describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=embedhtmlcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-embed-html').should('exist');
  });
});
