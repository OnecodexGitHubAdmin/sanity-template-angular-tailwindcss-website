describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blogcardcomponent--primary&knob-post'));

  it('should render the component', () => {
    cy.get('template-blog-card').should('exist');
  });
});
