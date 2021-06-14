describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customerfeedbackcomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-customer-feedback').should('exist');
  });
});
