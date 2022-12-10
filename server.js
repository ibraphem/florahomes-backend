import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv'
import seedRoutes from "./routes/seedRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"
import uploadRoutes from "./routes/uploadRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import bodyParser from "body-parser"
import propertyRoutes from "./routes/propertyRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";



const app = express();

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("connected to DB")).catch((err) => console.log(err.message))


// app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}));

//routes
app.use('/api/seed', seedRoutes )
app.use('/api/users', userRoutes )
app.use('/api/upload', uploadRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/goal', goalRoutes);

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 7000
app.listen(port, () => {
    console.log(`serve at http:localhost:${port}`);
})
