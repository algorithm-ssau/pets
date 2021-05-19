const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pets = require('./routes/API/pets')

const application = express()

application.use(bodyParser.json())
application.use(cors())

application.use('/API/pets', pets)

const port = process.env.port || 5000

application.listen(port, () => console.log('Server started on port: ' + port))
