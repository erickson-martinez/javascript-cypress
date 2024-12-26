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
      cy.get("#phone-checkbox").check().should("be.checked");

      cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    });
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
  });

  it("Send form empty", () => {
    cy.get('button[type="submit"]').should("have.text", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("Send form for commands", () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });

  it(`Validate link with contains`, () => {
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("Select one product", () => {
    cy.get("select").select("YouTube").should("have.value", "youtube");
  });

  it("Select one product for value", () => {
    cy.get("select").select("mentoria").should("have.value", "mentoria");
  });

  it("Select one product for index", () => {
    cy.get("select").select(1).should("have.value", "blog");
  });

  it("Check feedback input radio", () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("Check input radio", () => {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(($radio) => {
        cy.wrap($radio).check().should("be.checked");
      });
  });

  it("Checkbox and uncheck", () => {
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox).check().should("be.checked");
    });
    cy.get('input[type="checkbox"]').last().uncheck().should("not.be.checked");
  });

  it("Upload file paste fixture", () => {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("Select file with drag and drop", () => {
    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" })
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
  it("Fixture for upload file", () => {
    cy.fixture("example.json").as("sampleFile");

    cy.get("#file-upload")
      .should("not.have.value")
      .selectFile("@sampleFile")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });
});
