const express = require('express')
const cors = require('cors')
const pets = require('./routes/API/pets')

const PORT = process.env.PORT ?? 5000
const app = express()

app.use(cors())
app.use('/API/pets', pets)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))

  app.get(/.*/, (request, response) => response.sendFile(__dirname + '/public/index.html'))
}

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
