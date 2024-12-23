const express = require("express");
const { getEvents, addEvents, editEvent, deleteEvent } = require("../controller/event");
const router = express.Router();


router.get("/", getEvents) //get all events
router.post("/", addEvents) // add new events
router.put("/:id", editEvent) // edit events
router.delete("/:id", deleteEvent) // delete events


module.exports=router;