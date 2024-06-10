describe("Product Preview Card Component", () => {
  beforeEach(() => {
    cy.visit("../../index.html"); // Update this path to the correct location of your HTML file
  });

  it("should display the product image", () => {
    cy.get('img[alt="A bottle of perfume surrounded by foliage"]').should(
      "be.visible"
    );
  });

  it('should display the category as "Perfume"', () => {
    cy.get(".category").should("have.text", "Perfume");
  });

  it("should display the correct product name", () => {
    cy.get("h1").should("have.text", "Gabrielle Essence Eau De Parfum");
  });

  it("should display the product description", () => {
    cy.get(".product-desc p").should(
      "have.text",
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
    );
  });

  it("should display the sale price", () => {
    cy.get(".sale-price").should("have.text", "$149.99");
  });

  it("should display the list price", () => {
    cy.get(".list-price").should("have.text", "$169.99");
  });

  it('should display the "Add to Cart" button', () => {
    cy.get("button").should("be.visible").and("contain.text", "Add to Cart");
  });

  it("should change button color on hover", () => {
    cy.get("button").trigger("mousemove");
    cy.get("button").should(
      "have.css",
      "background-color",
      "rgb(60, 128, 103)"
    ); // Replace with the correct RGB value for the hover state
  });

  it('should navigate to Crio website when "Challenge by Crio" is clicked', () => {
    cy.get("footer .attribution a")
      .first()
      .should("have.attr", "href", "https://www.crio.do");
  });

  // it('should navigate to GitHub profile when "Coded by Ketan" is clicked', () => {
  //   cy.get("footer .attribution a")
  //     .last()
  //     .should("have.attr", "href", "https://www.github.com/imketan1610");
  // });
});
