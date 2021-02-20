const EventEmmiter = require('events');

class MeuEmissor extends EventEmmiter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click){
  console.log('um usuario clicou', click)
})

/*
let count = 1;
setInterval(() => {
  meuEmissor.emit(nomeEvento, 'no ok ' + (count++))
}, 1000)*/

const stdin = process.openStdin()
stdin.addListener('data', (value) =>{
console.log(`Você digitou: ${value.toString().trim()}`)
} )