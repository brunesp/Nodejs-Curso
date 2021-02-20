/*
  Utilizando Promises - async/await
  Obter usuário
  obter numero de telefone de um usuário a partir de seu ID
  obter o endereço do usuário a partir do ID
*/
function getUser() {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Bruna",
        birthdate: new Date()
      })
    }, 1000)
  })
}

function getPhoneNumber(id) {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: "990012053",
        areaCode: 11
      })
    }, 2000)
  })
}

function getAddress(id) {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      return resolve({
        address: "Rua da Sorte",
        number: 212
      }, 3000)
    })
  })
}
main()

async function main() {
  try {
    const User = await getUser()

    const Result = await Promise.all([
      getPhoneNumber(User.id),
      getAddress(User.id)
    ]);

    const Address = Result[1]
    const Phone = Result[0]

    console.log(`
      Nome: ${User.name}
      Telefone: (${Phone.areaCode}) ${Phone.phone}
      Endereço: ${Address.address}
      Núm: ${Address.number}
    `);
    
  } catch (error) {
    console.error(error)
  }
}