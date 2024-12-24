/// <reference types="cypress" />

describe("Visit CAT TAT page", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("validate page title", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Typing in fields and send form", () => {
    cy.get("#firstName").click().clear().type("Erickson");
    cy.get("#lastName").click().clear().type("Martinez");
    cy.get("#email").click().clear().type("teste@teste.com");
    cy.get("#open-text-area")
      .click()
      .clear()
      .type("Typing in filds", { delay: 0 });
    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
  });

  it("message error, email invalid", () => {
    cy.get("#firstName").click().clear().type("Erickson");
    cy.get("#lastName").click().clear().type("Martinez");
    cy.get("#email").click().clear().type("testeteste.com");
    cy.get("#open-text-area")
      .click()
      .clear()
      .type("Typing in field", { delay: 0 });
    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("message error phone invalid", () => {
    cy.get("#phone").type("abcdefgh").should("have.value", "");
  });

  it("Clean fields in form", () => {
    cy.get("#firstName")
      .click()
      .type("Erickson")
      .should("have.value", "Erickson")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .click()
      .type("Martinez")
      .should("have.value", "Martinez")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .click()
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .click()
      .type("Typing in field", { delay: 0 })
      .should("have.value", "Typing in field")
      .clear()
      .should("have.value", "");

    it("validate require phone", () => {
      cy.get("#firstName").click().clear().type("Erickson");
      cy.get("#lastName").click().clear().type("Martinez");
      cy.get("#email").click().clear().type("teste@teste.com");
      cy.get("#open-text-area")
        .click()
        .clear()
        .type("Typing in filds", { delay: 0 });
      cy.get("#phone-checkbox").click();

      cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    });
  });
});
