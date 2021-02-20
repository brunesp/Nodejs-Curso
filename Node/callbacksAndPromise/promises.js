/*
  Utilizando Promises
  Obter usuário
  obter numero de telefone de um usuário a partir de seu ID
  obter o endereço do usuário a partir do ID
*/
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

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

function getAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      address: "Rua da Sorte",
      number: 212
    }, 3000)
  })
}

const User = getUser()
//.then manipular sucess
//.catch manipular error
User
    .then(function (usuario) {
        return getPhoneNumber(usuario.id)
            .then(function resolverPhone(result) {
                return {
                    user: {
                        name: usuario.name,
                        id: usuario.id
                    },
                    phone: result
                }
            })
    })
    .then(function (resultado) {
        const address = getAddressAsync(resultado.user.id)
        return address.then(function resolverAddress(result) {
            return {
                user: resultado.user,
                phone: resultado.phone,
                address: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.user.name}
            Endereço: ${resultado.address.address} - Número ${resultado.address.number}
            Telefone: ${resultado.phone.areaCode} ${resultado.phone.phone}
        `)
    })
    .catch(function (error) {
        console.log('Deu Ruim', error)
    })