const express = require('express')
const app = express()
const port = 10000

app.get('/',(req,res) =>{
   res.sendFile('frontendChallenge\responsive\API'+"api.html");
})

app.listen(port,()=>{
    console.log("This app is working homie")
})

