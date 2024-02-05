const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const connectToDatabase = () => {
    const dbURI = "mongodb+srv://gopalduttvishwakarma:root1503@patientmanagement.mq9ghcb.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(dbURI, {useNewUrlParser: true})
    .then(() => console.log("Database connection established"))
    .catch((error) => console.log("Database connection error : ", error));
}

const startApp = () => {
    const app = express();
    const handlers = require("./handlers/handler");
    app.use(bodyParser.json());
    app.post("/login", handlers.login);
    app.listen(8001, () => { console.log(`server is running on port : 8001`); });
}

connectToDatabase();
startApp();