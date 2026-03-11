const express = require('express')
const cors = require('cors')

const app = express()

// Middlewares globais
app.use(cors())
app.use(express.json())

// Rota teste
app.get('/', (req, res) => {
  res.json({ message: 'HI Mama Connect' })
})

module.exports = app