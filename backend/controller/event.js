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




module.exports={getEvents,addEvents,editEvent}