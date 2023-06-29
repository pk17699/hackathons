import express from "express"
const router = express.Router();

import { PostFlight, UpdateFlights,DeleteFlightByFlightNumber, GetFlightByNumber, GetFlightByDestination, GetFlightByDate } from "../controllers/flightController.js";


//All 6 Routes
router.post("/flights" ,PostFlight )
router.put("/flights/:id",UpdateFlights)
router.delete("/flights/:id", DeleteFlightByFlightNumber)
router.get("/flights/:id", GetFlightByNumber)
router.get("/flights", GetFlightByDestination) 
router.get("/flights", GetFlightByDate)

export default router;



