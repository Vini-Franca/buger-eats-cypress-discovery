import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";
import SignupPage from "../pages/SignupPage";

describe("Signup", function () {
  it.skip("User should be deliver", function () {
    var deliver = signupFactory.deliver();

    signup.go();
    signup.filform(deliver);
    signup.submit();

    const expectedMessage =
      "×\n       \n       \n      \n    Aí Sim...Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.FecharNoCancel";
    signup.modalContentShouldBe(expectedMessage);
  });

  it.skip("Invalid document", function () {
    var deliver = signupFactory.deliver();
    deliver.cpf = "0001231asd";

    signup.go();
    signup.filform(deliver);
    signup.submit();
    signup.alertMessagemShouldBe("Oops! CPF inválido");
  });

  it.skip("Invalid email", function () {
    var deliver = signupFactory.deliver();
    deliver.email = "vinicius.com.br";

    signup.go();
    signup.filform(deliver);
    signup.submit();
    signup.alertMessagemShouldBe("Oops! Email com formato inválido.");
  });

  it("Required fields", function () {
    signup.go();
    signup.submit();
    signup.alertMessagemShouldBe("É necessário informar o nome");
    signup.alertMessagemShouldBe("É necessário informar o CPF");
    signup.alertMessagemShouldBe("É necessário informar o email");
    signup.alertMessagemShouldBe("É necessário informar o CEP");
    signup.alertMessagemShouldBe("É necessário informar o número do endereço");
    signup.alertMessagemShouldBe("Adicione uma foto da sua CNH");
    signup.alertMessagemShouldBe("Selecione o método de entrega");
  });
});
