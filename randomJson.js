const fs = require('fs')

let object = new Object()

object['sport'] = "Calcio"
object['descrizione'] = "Classifica Calcio serie A"
object['risultati'] = []

function getRandomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for(i = 0; i<10; i++){
  let risultato = new Object()
  risultato['idPartita'] = i + 1
  risultato['squadraA'] = getRandomIntRange(1, 10)
  risultato['squadraB'] = getRandomIntRange(11, 20)
  risultato['data'] = "data"
  risultato['puntiA'] = getRandomInt(3)
  risultato['puntiB'] = getRandomInt(3)
  object['risultati'].push(risultato)
}

console.log(object)

let data = JSON.stringify(object);
fs.writeFileSync('sports/calcio.json', data);
