import express from 'express';
import bodyParser from 'body-parser';//something to fetch body of incoming requests
import usersRoutes from './routes/users.js';
const app = express()
const port = 5000

app.use(bodyParser.json()); //this to define that we are using json

app.use('/users',usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})