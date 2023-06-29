const flightModel = require('../model/model')

function addFlight(flight){
    return new Promise(async(resolve, reject) => {
        try{
            const newflight = new flightModel();
            newflight.flightNumber = flight.flightNumber
            newflight.flightSource = flight.flightSource
            newflight.flightDestination = flight.flightDestination
            newflight.flightDate = flight.flightDate
            console.log(newflight)
            await newflight.save()
            .then(()=>{
                resolve({message:'flight added to database', data:newflight})
            })
            .catch((error)=>{
                reject({message:'failed to save flight', error})
            })
        }
        catch (error) {
            reject({message:'something wrong', error})
        }
    })
}

module.exports = {
    addFlight
}