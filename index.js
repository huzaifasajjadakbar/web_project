

import express from "express";
import mongoose from "mongoose";
import Login from "./routes/Login.js";
import cors from "cors";
import bodyParser from "body-parser";
import "./connection.js";
const app = express();


app.use(cors());

app.use(bodyParser.json( { extended: true } ));

app.use(bodyParser.urlencoded ( { extended: true } ));


app.use("/Login", Login);




app.listen(2000);
console.log("Listening...");

