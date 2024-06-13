// cypress/support/index.js or cypress/support/e2e.js
import 'cypress-real-events/support';

describe('Responsive Layout and Interactive Elements', () => {

  beforeEach(() => {
    cy.visit('../../index.html'); // path to my HTML file in project
  });


  it('should display the optimal layout for desktop', () => {
    cy.viewport(1280, 800);
    cy.get('.main').should('have.css', 'flex-direction', 'row');
    cy.get('.main').should('have.css', 'width', '600px');
  });



  it('should display the optimal layout for mobile', () => {
    cy.viewport(373, 669);
    cy.get('.main').should('have.css', 'flex-direction', 'column');
    // cy.get('.main').should('have.css', 'width', '90%');
    cy.get('.main').invoke('width').should('be.closeTo', 300, 50);// Check if width is approximately (70 to 90)% of 375px
  });


  it('should display the correct conclusion text case insensitively', () => {
    const conclusionText = 'you scored higher than 65% of the people who have taken these tests';
    cy.get('.conclusion').invoke('text').then((text) => {

      //making the check case-insesitive
      const trimmedText = text.trim();
      expect(trimmedText).to.match(new RegExp(conclusionText, 'i'));
    });
  });


  it('should apply hover states to interactive elements', () => {
    // Test hover state for button
    // cy.get('.btn').trigger('mouseover');
  
    //implemented a real hover event using cypress-real-event, mouseover is not working here
    cy.get('.btn').realHover();
    cy.get('.btn').should('have.css', 'background-color', 'rgb(28, 26, 138)');
  });


  it('should apply focus states to interactive elements', () => {
    // Test focus state for button
    cy.get('.btn').focus();
    cy.get('.btn').should('have.css', 'outline-style', 'none');
  });

});