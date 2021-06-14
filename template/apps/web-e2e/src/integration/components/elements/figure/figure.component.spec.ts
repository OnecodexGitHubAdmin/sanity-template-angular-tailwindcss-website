describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=figurecomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-figure').should('exist');
  });
});
