const express = require('express')
const app = express()
const PORT = 8000

const members = {
    'Celia Cruz':{
      'musicGenre': 'Salsa, Guaracha, Rumba, Afro, Son, Bolero',
      'birthName': 'Úrsula Hilaria Celia de la Caridad Cruz Alfonso',
      'birthLocation':'Havana, Cuba',
  },
    'Pete "El Conde" Rodríguez':{
      'musicGenre':'Salsa, Jazz',
      'birthName':'Pedro Juan Rodríguez Ferrer',
      'birthLocation':'Ponce, Puerto Rico',
  },
    'unknown':{
      'musicGenre': 'unknown',
      'birthName': 'unknown',
      'birthLocation':'unknown'
    }

}

app.get('/',(request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request, response)=>{
  response.json(members)
})

app.listen(PORT,()=>{
  console.log('The server is now running on port ${PORT} Betta Go Catch It!')
})