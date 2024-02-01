//Express.js palvelin //
const path = require('path')
const express = require('express')
const fs = require('fs').promises

const app = express()

const herkut = require('./Herkut.json')

//GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {
    res.json(herkut)
})

// Pinkoodin lukeminen txt tiedostosta palvelimelta ja lähettäminen selaimelle
app.get('/api/getpin', async (req, res) => {
    try {
        // Luetaan pin.txt tiedosto palvelimelta
        const savedPin = await fs.readFile('pin.txt', 'utf8')
        // Lähetetään pin selaimelle
        res.send(savedPin)
    } catch (error) {
        console.error('Error reading file:', error)
        res.status(500).send('Internal server error')
    }
})

// Tehdään polkumääritys public kansioon
const polku = path.join(__dirname, 'public')

//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http requestin
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
