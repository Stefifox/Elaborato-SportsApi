/*
 * Server API di test, fornisce risultati fittizi per alcuni sport (vedi file JSON)
 */
//Istallazione express
const express = require('express')
//Istallazioen file stream
const fs = require('fs');

//Definizione web app
const app = express()
const port = 3000

//Lettura dei file JSON
let rawdataCalcio = fs.readFileSync('sports/calcio.json')
let calcio = JSON.parse(rawdataCalcio)

app.get('/', (req, ris) => {
  ris.status(200).send("<h1>Sport FakeAPI</h1><p>V1.0</p>")
})

app.get('/calcio', (req, ris) => {
  ris.status(200).json(calcio)
})

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`)
})