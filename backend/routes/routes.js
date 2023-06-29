const router = require('express').Router()
const flightController = require('../controllers/controllers')

router.post("/flights", (req, res) => {
    try {
        flightController.addFlight(req.body)
        .then((response) => {
          res.send(response);
        })
        .catch((error) => {
          res.send(error);
        });
    }
    catch (error) {
      res.status(500).send({ message: "some error occured while adding the data" });
    }
  });

module.exports = router