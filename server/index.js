const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')
//const history = require('connect-history-api-fallback');
const pets = require('./routes/API/pets')

const PORT = process.env.PORT ?? 5000
const app = express()

//app.use(bodyParser.json())
app.use(cors())
//app.use(history())
app.use('/API/pets', pets)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
