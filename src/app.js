import express from "express";
import cors from "cors";


const app = express()
app.use(express.json)
app.use(cors())


const users = []
const tweets = []


app.get("/", (req, res) =>{

    res.send('jorge');
})

app.get("tweets", (req, res) =>{

    res.send(tweets.slice(tweets.length -10));
})

app.post("/sign-up", (req, res) => {
    const user = req.body
    if(user.username && user.avatar){users.push(user)
    }
    else{
        return res.status(400).send("Os campos devem estar todos preenchidos");
    }
    res.status(201).send('OK')
})

app.post("/tweets", (req, res) => {
    const tweet = req.body
    tweets.push(tweet)
    res.send(tweet)
})

app.listen(5000, () => {console.log('server is connected')});
