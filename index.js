const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const schema = require('./orderSchema')
const model = mongoose.model('order',schema)
const Consul = require('consul')


const app = express()
const serviceKey = "order-service"
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const consul = new Consul()

//register order service in consul discovery server
consul.agent.service.register({
    id:serviceKey,
    name:serviceKey,
    address:"localhost",
    port:9092
},
(err)=>{
    if(err)
        throw err;
    console.log('order Service successfully registered')
})
// deregister from consul discovery server whenever ctrl+c/ interruption happens
process.on("SIGINT",async()=>{
    consul.agent.service.deregister(serviceKey,()=>{
        if(err)
            throw err
        console.log("order service deregistered")
    })
})


// MongoDB connection
mongoose.connect('mongodb+srv://rohinimahalingam:rohini@cluster.fm6nl.mongodb.net/taskmicroservice?retryWrites=true&w=majority&appName=Cluster')

// CRUD
// create
app.post('/',async(req,res)=>{
    // destructure
    const obj = new model({
        orderId:req.body.orderId,
        userName:req.body.userName,
        orderedDate:req.body.orderedDate,
        itemName:req.body.itemName,
        itemPrice:req.body.itemPrice,
        paymentMethod:req.body.paymentMethod
    })

    const received = await obj.save()
    res.json(received)
})

// read
app.get('/',async(req,res)=>{
    const order = await model.find()
    res.json(order)
})

// read by unique field
app.get('/:unique',async(req,res)=>{
    const fetched = await model.findById(id=req.params.unique)
    res.json(fetched)
})

// read by other fields
app.get('/order/:name',async(req,res)=>{
    // const list = await model.findOne({fullName:req.params.name})
    const list = await model.find({userName:req.params.name})
    res.json(list)
})

// update
app.put('/',async(req,res)=>{
    const result = await model.updateOne({_id:req.body._id},req.body,{upsert:true})
    res.json(result)
})

// delete
app.delete('/:id',async(req,res)=>{
    await model.findOneAndDelete(id=req.params.id)
    res.json("Deleted")
})

app.listen(9092,async()=>{
    console.log("My express js server running @ 9092!!")
})