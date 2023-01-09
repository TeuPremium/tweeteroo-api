import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body
    if(!user.username || !user.avatar){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }    
    users.push(user)
    res.status(201).send('OK')
})

app.get("/tweets", (req, res) =>{
    const tweetFeed = tweets.slice(Math.max(tweets.length -10, 0))
    res.send(tweetFeed.reverse());
})



app.post("/tweets", (req, res) => {
    const postedTweet = req.body
    const user = users.find(u => u.username === postedTweet.username)

    if(!postedTweet.username || !postedTweet.tweet){
        return res.status(400).send("BAD REQUEST")
    }
    if (!user){
        return res.status(401).send("UNAUTHORIZED")
    }

    tweets.push({... postedTweet, avatar: user.avatar})
    res.status(201).send(postedTweet)
})



app.listen(5000, () => console.log('Servidor conectado'));



