import mongoose from "mongoose";


const apiSchema = new mongoose.Schema({
    flight_id: String,
    flight_source:String,
    flight_destination: String,
    flight_date: String
}, { minimize: false })


export default mongoose.model("Api", apiSchema)