import express from "express";
import mongoose from "mongoose";
import flightRoutes from "./routes/flightRoutes.js";

//middleware
const app = express()
app.use(express.json())

//mongodb connect
mongoose.connect("mongodb://localhost:27017/FlightDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

//Routes middleware
app.use("/api", flightRoutes);

//listen on PORT 9999
app.listen(9999, () => {
    console.log("BE started at port 9999")
})
