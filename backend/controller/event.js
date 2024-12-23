const Events = require ("../model/event")


// get all events
const getEvents = async(req,res)=>{
    const events = await Events.find()
    return res.json(events)
}

// add new events
const addEvents = async(req,res)=>{
    
    const {title,date,location,attendees,reminder}=req.body

    if(!title || !date || !location || !attendees ){
        res.json({message : "Required fields can't be empty"})
    }
    const newEvent = await Events.create({
        title,date,location,attendees,reminder
    })
    return res.json(newEvent);
}

// edit events
const editEvent = async (req,res)=>{
    const {title,date,location,attendees,reminder}=req.body;
    let event = await Events.findById(req.params.id)
    try {
        if(event){
            await Events.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({title,date,location,attendees,reminder})
        }
    } catch (error) {
        return res.status(404).json({message:"error in update recipe"})
    }
    
}

// delete event
const deleteEvent = async (req,res)=>{
    try {
		console.log('Delete route called');
		// Use findByIdAndDelete instead of findByIdAndRemove
		await Events.findByIdAndDelete(req.params.id);
		console.log('Event deleted');
		res.json({ message: 'Event deleted' });
	} catch (error) {
		console.error('Error deleting event:', error);
		res.status(500).json({ message: error.message });
	}
}

// update event


module.exports={getEvents,addEvents,editEvent,deleteEvent}