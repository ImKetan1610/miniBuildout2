import 'cypress-real-events/support';

describe('Order Summary Page Content', () => {
  beforeEach(() => {
    cy.visit('index.html'); // Adjust the path if necessary
  });

  it('should display the correct summary paragraph', () => {
    const summaryText = 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!';
    cy.get('.summary-para').invoke('text').then((text) => {
      //making the check case-insesitive
      const trimmedText = text.trim();
      expect(trimmedText).to.match(new RegExp(summaryText, 'i'));
    });
  });

//all checks below are case sensitive

  it('should display the correct heading', () => {
    cy.get('.heading').should('contain.text', 'Order Summary');
  });

  it('should display the correct plan details', () => {
    cy.get('.plan-text > h3').should('contain.text', 'Annual Plan');
    cy.get('.plan-text > p').should('contain.text', '$59.99/year');
  });

  it('should have a functional change link', () => {
    cy.get('.change-link > a').should('have.attr', 'href', '#').and('contain.text', 'Change');
  });

  it('should display the Proceed to Payment button', () => {
    cy.get('.proceed-btn').should('contain.text', 'Proceed to Payment');
  });

  it('should change background color on hover for Proceed to Payment button', () => {
// good approach is: to check only for the change in bg after hover, in place of checking for a particular RGB/HSB after hover

      cy.get('.proceed-btn').then(($btn) => {
        const initialBgColor = $btn.css('background-color');
        cy.wrap($btn)
          .realHover()
          .wait(1500) // Wait for 500ms to ensure the hover event is fully applied
          .should(($btnAfterHover) => {
            const hoverBgColor = $btnAfterHover.css('background-color');
            expect(hoverBgColor).not.to.eq(initialBgColor);
          });
      });
  });

  it('should display the Cancel Order button', () => {
    cy.get('.cancel-order').should('contain.text', 'Cancel Order');
  });

  it('should change text color on hover for Cancel Order button', () => {
    cy.get('.cancel-order').then(($btn) => {
        const initialBgColor = $btn.css('color');
        cy.wrap($btn)
          .realHover()
          .wait(1500) // Wait for 500ms to ensure the hover event is fully applied
          .should(($btnAfterHover) => {
            const hoverBgColor = $btnAfterHover.css('color');
            expect(hoverBgColor).not.to.eq(initialBgColor);
          });
      });
    });
});


describe('Order Summary Page - Responsive Background Image', () => {
  beforeEach(() => {
    cy.visit('index.html'); 
  });

  it('should use correct background image on desktop view', () => {
    // Set viewport to a desktop size
    cy.viewport(1280, 720);
  
    cy.get('body').should('have.css', 'background-image')
      .and('include', 'pattern-background-desktop.svg');
  });


  it('should change background image on mobile view', () => {
    // Set the viewport to a mobile size
    cy.viewport(375, 667); // iPhone 6/7/8 dimensions

    cy.get('body').should('have.css', 'background-image')
      .and('include', 'pattern-background-mobile.svg');
  });
});