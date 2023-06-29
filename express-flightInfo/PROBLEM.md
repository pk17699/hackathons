## NodeJS/ExpressJS FlightInfo Web API Case Study

## Requirements
You are required to create a REST API for flight information for a particular Airlines. The API should allow user to perform basic CRUD operations and some additional operations based on system requirements. Below mentioned is the list of operations.

1. User should be able to add, modify & delete flight details
2. User should be able to search flight details based on source and destinations
3. User should be able to search flight details based on flight information such as flight number.
4. User should be able to search flight details based on flight schedule date.

Below is the list of some expected endpoints which needs to be created in API.

- POST https://localhost:`port`/api/flights
- PUT https://localhost:`port`/api/flights/`flight_number`
- DELETE https://localhost:`port`/api/flights/`flight_number`
- GET https://localhost:`port`/api/flights?source=`source`&dest=`dest`  (use query string for taking parameters)
- GET https://localhost:`port`/api/flights/`flight_number`
- GET https://localhost:`port`/api/flights/`flight_date`

The model for the API should have below properties
1. FlightId/FlightNumber
2. FlightSource
3. FlightDestination
4. FlightDateTime

```
- You are required to create the application from scratch.
- Application data must be stored in MongoDB Database.
- Application should use Mongoose as ORM.
- Application should have a controller.
```
