var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      email: faker.internet.email(firstName),
      cpf: cpf.generate(),
      whatsapp: "11945778545",
      adress: {
        postalcode: "04850220",
        street: "Rua Ugo Fóscolo",
        number: "200",
        details: "APTO 142",
        district: "Parque Cocaia",
        city_state: "São Paulo/SP",
      },
      cnh: "cnh-digital.jpg",
    };
    return data;
  },
};
