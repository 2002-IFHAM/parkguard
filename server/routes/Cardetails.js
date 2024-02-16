const express = require("express");
const router = express.Router();
const { CarVerification } = require("../models");

router.get("/", async (req, res) => {
  const listofdetails = await CarVerification.findAll();
  res.json(listofdetails);
});
router.post("/", async (req, res) => {
  // this will send data to the server or we can say save data to database(we will have a frontend from to take these details as input)
  console.log("yesssss");
  const details = req.body; //grabbing post data from the body we will be sending through html form
  await CarVerification.create(details);
  res.json(details);
});
module.exports = router;
