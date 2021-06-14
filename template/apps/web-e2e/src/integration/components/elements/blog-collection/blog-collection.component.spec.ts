describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=blogcollectioncomponent--primary&knob-data'));

  it('should render the component', () => {
    cy.get('template-blog-collection').should('exist');
  });
});
