const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Rishabh"
data.age = 22
const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataString)
console.log(dataString)