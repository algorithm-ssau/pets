import axios from 'axios'

const url = 'http://localhost:5000/API/pets'

class PetsImport {
  // get pets method
  static getPets () {
    return new Promise((resolve, reject) => 
    {
      axios.get(url).then((response) => 
      {
        const data = response.data
        resolve(
          data.map(pets => ({
            ...pets,
          }))
        )
      })
      .catch((error) => {
        reject(error)
      })
    })
  }

  // set pets placeholder

  // delete pets placeholder
}

export default PetsImport
