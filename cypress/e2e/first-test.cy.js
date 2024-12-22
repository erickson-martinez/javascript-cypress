/// <reference types="cypress" />

describe("Visit google page", () => {
  it("validate page title", () => {
    cy.visit("https://google.com");
    cy.title("google - Pesquisa Google");
  });
});
