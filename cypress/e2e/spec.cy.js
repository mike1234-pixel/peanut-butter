/// <reference types="Cypress" />
// cypress intellisense

describe("e2e tests", () => {
  it("visits and navigates through the site", () => {
    cy.visit("");

    cy.contains("Learn everything"); // query element

    cy.contains("In the 19th century");

    cy.contains("Start Learning").click();

    cy.url().should("include", "/tips");

    // solution for custom select elements
    cy.get(".language-select").click();
    cy.get("div").each(($ele) => {
      if ($ele.text() == "Persian") {
        cy.wrap($ele).click();
      }
    });
    // cy.get(".language-select").select("Persian");

    cy.contains("اطلاعات کلی");

    cy.get(".language-select").click();
    cy.get("div").each(($ele) => {
      if ($ele.text() == "English") {
        cy.wrap($ele).click();
      }
    });

    cy.contains("h5", "Grooming").click();

    cy.contains("h1", "Grooming");
  });
});
