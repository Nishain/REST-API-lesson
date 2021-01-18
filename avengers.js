const router = require('express').Router()
var avengers = [
    {id:1,name:'Iron man'},
    {id:2,name:'Captain America'},
    {id:3,name:'Thor'}
]
router.get('/',(req,res)=>{
    res.send(avengers)
})
router.get("/:id",(req,res)=>{
    let result = avengers.find((avenger)=>avenger.id==req.params.id)
    if(!result)
        res.send("cannot find avenger")   
     else
         res.send(result)
})
router.put("/:id",(req,res)=>{
    let updateAvenger = avengers.find(avenger=>avenger.id==req.params.id)
    if(!updateAvenger)
        res.status(404).send("cannot find the avenger")
    else{    
        updateAvenger.name = req.body.name
        res.send(updateAvenger)
    }
})
router.post('/',(req,res)=>{
    let newAvenger = {
        id : avengers.length+1,
        name:req.body.name
    }
    if(!newAvenger.name)
        return res.status(400).send("please define a name!")
    avengers.push(newAvenger)
    res.send(newAvenger)    
})
router.delete('/:id',(req,res)=>{
    let deleteIndex = avengers.findIndex(avenger=>avenger.id==req.params.id)
    if(deleteIndex==-1)
        return res.status(404).send("avenger is not found!")
    let deleteChild = avengers[deleteIndex]
    avengers.splice(deleteIndex,1)
    res.send(deleteChild)
})
module.exports = router