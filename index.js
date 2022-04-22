import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';



const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

app.use('/students', studentRoutes);


const CONNETCION_URL = 'mongodb+srv://Agustin:Pipipiazzolla760@cluster0.d6sev.mongodb.net/studentsmern';

const PORT = process.env.PORT || 5000

mongoose.connect(CONNETCION_URL, {
    useNewUrlParser:true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
console.log(`Aplicación corriendo en el puerto: ${PORT}`)
)).catch((err) => console.log(err.message));


// mongoose.set('useFindAndModify', false);
