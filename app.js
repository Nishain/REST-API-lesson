const express = require('express') 
const logging = require('./middleware/logging')
const functions =  require ('./functionality')
const port = process.env.port || 3000
const app = express()
const avengersRoutes = require('./avengers')
app.use(express.json())
app.use(logging)
app.use((req,res,next)=>{
    console.log('middleware executing...')
    next()
})
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/avengers/',avengersRoutes)
app.listen(port,()=>console.log('server started on '+port))
