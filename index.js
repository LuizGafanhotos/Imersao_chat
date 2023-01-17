const express = require('express')

const app = express()
const PORT = 8000;

app.get('/', (req, res)=>{
    res.send("Ola mundo belo e lindo");
})

app.listen(PORT, ()=>{
    console.log("Server Running on port: " + PORT)
})