/// <reference types="cypress" />

describe("Visit CAT TAT page", () => {
  it("validate page title", () => {
    cy.visit("./src/index.html");
    cy.title().should("have.text", "Central de Atendimento ao Cliente TAT");
  });
});
