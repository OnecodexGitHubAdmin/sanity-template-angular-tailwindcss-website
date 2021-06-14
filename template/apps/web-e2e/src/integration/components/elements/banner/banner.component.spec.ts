describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bannercomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-banner').should('exist');
  });
});
