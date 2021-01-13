const express = require('express') 
const functions =  require ('./functionality');
const port = process.env.port || 3000
const app = express()
app.get('/api/getName/:name',(req,res)=>{
    res.send(functions.echo('Hi '+req.params.name))
})
app.listen(port,()=>console.log('server started on '+port))
