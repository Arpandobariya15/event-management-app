const express = require("express");
const { getEvents, addEvents, editEvent } = require("../controller/event");
const router = express.Router();


router.get("/", getEvents) //get all events
router.post("/", addEvents) // add new events
router.put("/:id", editEvent) // add new events


module.exports=router;