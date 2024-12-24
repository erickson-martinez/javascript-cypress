// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#firstName").click().clear().type("Erickson");
  cy.get("#lastName").click().clear().type("Martinez");
  cy.get("#email").click().clear().type("teste@teste.com");
  cy.get("#open-text-area")
    .click()
    .clear()
    .type("Typing in filds", { delay: 0 });
  cy.get("#phone-checkbox").click();
  cy.get("#phone").type("67999999999");
  cy.get('button[type="submit"]').should("have.text", "Enviar").click();
});
