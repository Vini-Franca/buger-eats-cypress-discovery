class SignupPage {
  go() {
    cy.visit("/");

    cy.get('a[href="/deliver').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
  }

  filform(deliver) {
    cy.get('input[name="fullName"]').type(deliver.name);
    cy.get('input[name="email"]').type(deliver.email);
    cy.get('input[name="cpf"]').type(deliver.cpf);
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);

    cy.get('input[name="postalcode"]').type(deliver.adress.postalcode);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(deliver.adress.number);
    cy.get('input[name="address-details"]').type(deliver.adress.details);
    cy.get('input[name="address"]').should("have.value", deliver.adress.street);
    cy.get('input[name="district"]').should(
      "have.value",
      deliver.adress.district
    );
    cy.get('input[name="city-uf"]').should(
      "have.value",
      deliver.adress.city_state
    );
    cy.xpath('//*[@id="page-deliver"]/form/fieldset[3]/ul/li[1]').click();
    cy.get('input[accept^="image"]').attachFile("/images/" + deliver.cnh);
  }

  submit() {
    cy.get('form button[type="submit"]').click();
  }

  modalContentShouldBe(expectedMessage) {
    cy.xpath("/html/body/div[2]/div").should("have.text", expectedMessage);
  }

  alertMessagemShouldBe(expectedMessage) {
    //cy.get(".alert-error").should("have.text", expectedMessage);
    cy.contains(".alert-error", expectedMessage).should("be.visible");
  }
}

export default new SignupPage();
