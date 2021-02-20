/*
  Utilizando callbacks
  Obter usuário
  obter numero de telefone de um usuário a partir de seu ID
  obter o endereço do usuário a partir do ID
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "Bruna",
      birthdate: new Date()
    })
  }, 1000)
}

function getPhoneNumber(id, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "990012053",
      areaCode: 11
    })
  }, 2000)
}

function getAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      address: "Rua da Sorte",
      number: 212
    }, 3000)
  })
}


getUser(function resolveUser(err, User) {
  if (err) {
    console.error(err)
    return;
  }

  getPhoneNumber(User.id, function resolvePhone(erro, Phone) {
    if (erro) {
      console.error(erro)
      return;
    }
    getAddress(User.id, function resolveAddress(error, Address) {
      if (error) {
        console.log(error)
        return;
      }

      console.log(`
      Nome: ${User.name}
      Telefone:${Phone.areaCode} ${Phone.phone}
      Endereço: ${Address.address} - num: ${Address.number}
  `);
    })
  })
})
