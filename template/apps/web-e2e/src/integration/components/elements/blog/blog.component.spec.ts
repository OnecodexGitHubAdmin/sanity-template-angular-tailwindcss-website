describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blogcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-blog').should('exist');
  });
});
