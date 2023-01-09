import express from "express";

const app = express()

app.get("/", (req, res) =>{

    res.send('jorge');
})

app.listen(5000)
console.log("ola mundo");
