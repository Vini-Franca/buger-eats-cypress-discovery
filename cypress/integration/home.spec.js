describe("home page", () => {
  it("app deve estar online", () => {
    cy.viewport(1440, 900);
    cy.visit("https://buger-eats.vercel.app/");
    cy.get(".signup").should("have.text", "Ou se cadastre  ");
  });
});
