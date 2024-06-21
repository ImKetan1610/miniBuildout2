// CRIO_SOLUTION_AND_STUB_ONLY_START_MODULE_ONE
// CRIO_SOLUTION_AND_STUB_ONLY_END_MODULE_ONE
// cypress/support/index.js or cypress/support/e2e.js
import "cypress-real-events/support";

describe("Age Calculator App", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/"); // Adjust the path to your HTML file
  });

  it("should display the optimal layout for desktop", () => {
    cy.viewport(1280, 800);
    cy.get(".content").should("have.css", "width", "750px");
    cy.get(".input").should("have.css", "flex-direction", "row");
  });

  it("should display the optimal layout for mobile", () => {
    cy.viewport(373, 669);
    cy.get(".content").should("have.css", "width", "300px");
  });

  it("should display an error for invalid day input", () => {
    cy.get("#dayIn").type("32").blur();
    cy.get("#dayIn").next(".error").should("have.text", "Must be a valid day");
  });

  it("should display an error for empty day input", () => {
    cy.get("#dayIn").focus().blur();
    cy.get("#dayIn")
      .next(".error")
      .should("have.text", "This field is required");
  });

  it("should display an error for invalid month input", () => {
    cy.get("#monthIn").type("13").blur();
    cy.get("#monthIn")
      .next(".error")
      .should("have.text", "Must be a valid month");
  });

  it("should display an error for empty month input", () => {
    cy.get("#monthIn").focus().blur();
    cy.get("#monthIn")
      .next(".error")
      .should("have.text", "This field is required");
  });

  it("should display an error for future year input", () => {
    cy.get("#yearIn").type("3000").blur();
    cy.get("#yearIn").next(".error").should("have.text", "Must be in past");
  });

  it("should display an error for empty year input", () => {
    cy.get("#yearIn").focus().blur();
    cy.get("#yearIn")
      .next(".error")
      .should("have.text", "This field is required");
  });

  it("should calculate the correct age for valid inputs", () => {
    // Set a specific date for testing consistency
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear() - 25);

    cy.get("#dayIn").type(day);
    cy.get("#monthIn").type(month);
    cy.get("#yearIn").type(year);
    cy.get("#calculateBtn").click();

    cy.get("#yearOut").should("have.text", "25");
    cy.get("#monthOut").should("have.text", "0");
    cy.get("#dayOut").should("have.text", "0");
  });

  it("should not calculate age for invalid inputs", () => {
    cy.get("#dayIn").type("32");
    cy.get("#monthIn").type("13");
    cy.get("#yearIn").type("3000");
    cy.get("#calculateBtn").click();

    cy.get("#yearOut").should("have.text", "--");
    cy.get("#monthOut").should("have.text", "--");
    cy.get("#dayOut").should("have.text", "--");
  });
});
