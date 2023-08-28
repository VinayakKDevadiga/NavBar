const express=require('express')
const app=express()
const path=require('path')

app.use(express.urlencoded()); // Middleware to parse form data

app.post('/users',(req,res)=>{
    console.log(req.body); // Log the form data to the console
    res.send("Form data received"); // Send a response to the client

    
})

app.get('/',(req,res)=>{
    console.log('server is responding as axpected')
  //  res.send("server touched")
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(4000,()=>{
    console.log('connected to server port on 4000')
})
