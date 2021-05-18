const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.get('/', async (request, response) => {
  const pets = await loadPetsCollection()
  response.send(await pets.find({}).toArray())
})

async function loadPetsCollection () {
  const uri = 'mongodb+srv://UserPets:UserPets@petscluster.2j5zm.mongodb.net/pets.pets?retryWrites=true&w=majority'
  const client = await mongodb.MongoClient.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  return client.db('pets').collection('pets')
}

module.exports = router
