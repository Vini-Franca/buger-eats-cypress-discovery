describe("home page", () => {
  it("app deve estar online", () => {
    cy.visit("/");
    cy.get(".signup").should("have.text", "Ou se cadastre  ");
  });
});
