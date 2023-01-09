import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub"
}];

app.post("/sign-up", (req, res) => {
    const user = req.body
    if(!(user.username && user.avatar)){
        return res.status(400).send("Todos os campos são obrigatórios!");
    }    
    users.push(user)
    res.status(201).send('OK')
})

app.get("/tweets", (req, res) =>{
    const tweetFeed = tweets.reverse(Math.max(tweets.length -10, 0))
    res.send(tweets.slice());
})



app.post("/tweets", (req, res) => {
    const tweet = req.body
    tweets.push(tweet)
    res.send(tweet)
})


app.listen(5000, () => console.log('Servidor conectado'));



