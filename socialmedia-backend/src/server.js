const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8000
const users = require("./routes/users")
const Logs = require("./middleware/logs")
const bodyParser = require('body-parser') 
require('./utils/database')

app.use(bodyParser.json())
app.use(Logs)
app.use(cors())
app.use(express.json())

app.use('/api/v1/users', users)

app.get('/',(req,res)=> {
    res.send("Welcome to Lucky Database")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}` )
})