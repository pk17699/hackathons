import express from "express"

import Api from "../models/flightModel.js";


//PostFlight    -->  /api/flights
export const PostFlight = async (req,res)=>{
    const { flight_id , flight_source, flight_destination} = req.body;
    try{
        const api = new Api({
            flight_id, 
            flight_source, flight_destination,flight_date:new Date().toISOString().slice(0, 10)
        })
    
        api.save(err => {
            if (err) {
                res.send(err)
            } else {
                res.send({ message: "Flight Posted Sucessfully..!!" , post:api })
            }
        })
    }
    catch(err){
        res.send({message:"error caught found..!!"})
    }
}


//Get an flight by flight id  -->>   /api/flight/{id}
export const GetFlightByNumber = async(req,res)=>{
    try{
        Api.findOne({flight_id:req.params.id},(err,result)=>{
            if(result){
                res.send(result);
            }
            else{
                res.send({message:"Flight_id not Found"})
            }
        })
    }
    catch(err){
        res.send({message:"Error triggered..!!"})
    }
}


//Get all flight for given date 
export const GetFlightByDate = async (req,res)=>{
    try{
        Api.find({flight_date:req.params.date},(err,result)=>{
            if(result){
                res.send({message:"Records :", result:result})
            }
            else{
                res.send({message:"No record found for date :"+req.params.id})
            }
        })
    }
    catch(err){
        res.send({message:"Error triggered ..!!"})
    }
}

//Get all flights for destination and source
export const GetFlightByDestination = async (req,res)=>{
    const source = req.query.source;
    const destination = req.query.destination;
    try{
        Api.find({flight_source : source , flight_destination :destination }, (err,result)=>{
            if(result){
                res.send({message:"Record :" , result:result})
            }
            else{
                res.send({message :"No result found..!!"})
            }
        })
    }
    catch(err){
        res.send({message:"Error triggered..!!"})
    }
}


//UpdateFlights -->  /api/flights
export const UpdateFlights = async (req,res)=>{
    // const { flight_id}= req.body;

    const { flight_id} = req.body;
    Api.findOneAndUpdate({ flight_id: flight_id },
    )
        .then((res) => {
            console.log("Updated sucessfull");
        })
        .catch(err => console.log("Error Triggered"))
}


//Delete a flight by flight id  ---->> /api/flights/{id}
export const DeleteFlightByFlightNumber = async (req,res)=>{
    try{
        Api.findOneAndDelete({flight_id:req.params.id},(err,result)=>{
            if(result){
                res.send({message:"Record deleted for flight_id :"+req.params.id});
            }
            else{
                res.send({message:"Flight_Id not found in record"})
            }
        })
    }
    catch(err){
        res.send({message:"Error triggered while deleting"})
    }
}

