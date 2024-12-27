describe("Privacy Page", () => {
  beforeEach(() => {
    cy.visit("./src/privacy.html");
  });
  it("Validate Page", () => {
    cy.url().should("include", "/src/privacy.html");
  });
});
