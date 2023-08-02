import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();
import cors from 'cors'

let app = express();
app.use(cors({o}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 6868;
//Port === undefined => port = 6868

app.listen(port, () => {
    console.log('backend Nodejs is runing on the port :', port);
}) ;