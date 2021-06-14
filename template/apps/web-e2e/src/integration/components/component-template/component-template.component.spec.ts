describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=componenttemplatecomponent--primary&knob-item'));

  it('should render the component', () => {
    cy.get('template-component-template').should('exist');
  });
});
