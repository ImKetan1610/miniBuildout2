describe('3-column Preview Card Component', () => {
  beforeEach(() => {
    cy.visit('../../index.html'); // Adjust the path to your HTML file
  });

  it('should load the page and display the main elements', () => {
    cy.get('main').should('be.visible');
    cy.get('article.sedan').should('be.visible');
    cy.get('article.suv').should('be.visible');
    cy.get('article.luxury').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('should display correct content in the sedan card', () => {
    cy.get('article.sedan h1').should('have.text', 'SEDANS');
    cy.get('article.sedan p').should('have.text', 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.');
    cy.get('article.sedan button').should('have.text', 'Learn More');
  });

  it('should display correct content in the suv card', () => {
    cy.get('article.suv h1').should('have.text', 'SUVS');
    cy.get('article.suv p').should('have.text', 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.');
    cy.get('article.suv button').should('have.text', 'Learn More');
  });

  it('should display correct content in the luxury card', () => {
    cy.get('article.luxury h1').should('have.text', 'LUXURY');
    cy.get('article.luxury p').should('have.text', 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.');
    cy.get('article.luxury button').should('have.text', 'Learn More');
  });

  it('should display correct creator and challenge information in the footer', () => {
    cy.get('footer a').first().should('have.attr', 'href', 'https://crio.do').and('have.attr', 'target', '_blank');
    cy.get('footer a').last().then(($a) => {
      const href = $a.attr('href');
      expect(href).to.match(/^https:\/\/github\.com\/\w+$/);
      cy.wrap($a).should('have.attr', 'target', '_blank');
    });
  });

  it('should use the correct font family', () => {
    cy.get('body').should('have.css', 'font-family', '"Lexend Deca", sans-serif');
  });

  it('should have correct colors for each card', () => {
    cy.get('article.sedan').should('have.css', 'background-color', 'rgb(229, 124, 34)'); // hsl(31, 77%, 52%)
    cy.get('article.suv').should('have.css', 'background-color', 'rgb(0, 39, 95)'); // hsl(184, 100%, 22%)
    cy.get('article.luxury').should('have.css', 'background-color', 'rgb(11, 32, 56)'); // hsl(179, 100%, 13%)
  });

  it('should have buttons with correct styles and functionality', () => {
    cy.get('article button').each(($btn) => {
      cy.wrap($btn).should('have.css', 'border-radius', '25px');
      // cy.wrap($btn).should('have.css', 'border', '2px solid rgb(242, 242, 242)'); 
    });

    cy.get('article.sedan button').should('have.css', 'background-color', 'rgb(242, 242, 242)'); 
    cy.get('article.suv button').should('have.css', 'background-color', 'rgb(242, 242, 242)'); 
    cy.get('article.luxury button').should('have.css', 'background-color', 'rgb(242, 242, 242)'); 

  });

  it('should adapt layout for mobile view', () => {
    cy.viewport(500, 800);
    cy.get('main').should('have.css', 'flex-direction', 'column');
    cy.get('article.sedan').should('have.css', 'border-radius', '7px 7px 0px 0px');
    cy.get('article.luxury').should('have.css', 'border-radius', '0px 0px 7px 7px');
  });
});
