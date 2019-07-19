import express from 'express';
import bodyParser from 'body-parser';
import randomQuote from 'random-quotes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());


app.get('/', (req, res) => res.json({
  message: 'ok'
}));

app.get('/quote', (req, res) => res.json(randomQuote()));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});