/// <reference types="Cypress" />
// cypress intellisense

describe("e2e tests", () => {
  it("visits and navigates through the site", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Learn everything"); // query element

    cy.contains("In the 19th century");

    cy.contains("Start Learning").click();

    cy.url().should("include", "/tips");

    cy.get(".language-select").select("Persian");

    cy.contains("اطلاعات کلی");

    cy.get(".language-select").select("English");

    cy.contains("h5", "Grooming").click();

    cy.contains("h1", "Grooming");
  });
});
