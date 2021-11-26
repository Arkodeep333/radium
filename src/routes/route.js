const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/londontemp", cowinController.gettemp)
router.get("/citytemps", cowinController.citytemps)
router.get("/getcoin", cowinController.getcoin)


module.exports = router;