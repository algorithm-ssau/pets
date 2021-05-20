const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pets = require('./routes/API/pets')

const PORT = process.env.PORT ?? 5000
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/API/pets', pets)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
