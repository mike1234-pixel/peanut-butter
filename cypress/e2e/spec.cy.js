/// <reference types="Cypress" />
// cypress intellisense

describe("empty spec", () => {
  it("visits local server", () => {
    cy.visit("http://localhost:3000");

    cy.contains("loading..."); // query element containing text 'loading...'

    cy.contains("golden").click();
  });
});

// what else can i test so far?
