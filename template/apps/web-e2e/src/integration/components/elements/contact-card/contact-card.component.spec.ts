describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contactcardcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-contact-card').should('exist');
  });
});
