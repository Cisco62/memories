import  express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
//setting up body parser to properly send a request
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
dotenv.config();

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to memories API');
})

// const CONNECTION_URL = 'mongodb+srv://memories:QVTzEetBJjU8bAgJ@cluster0.cod4b.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);//Making sure we dont get any warning from the console








