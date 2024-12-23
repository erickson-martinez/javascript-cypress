/// <reference types="cypress" />

describe("Visit CAT TAT page", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("validate page title", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Typing in filds and send form", () => {
    cy.get("#firstName").click().clear().type("Erickson");
    cy.get("#lastName").click().clear().type("Martinez");
    cy.get("#email").click().clear().type("teste@teste.com");
    cy.get("#open-text-area")
      .click()
      .clear()
      .type("Typing in filds", { delay: 0 });
    cy.get('button[type="submit"]').should("Enviar").click();
  });
});
