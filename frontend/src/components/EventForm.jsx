import React,{useState}from 'react';
import axios from 'axios';
import "./EventList.css"

const EventForm = ({ onEventAdd }) => {
    const [newEvent, setNewEvent] =useState({ title: '', date: '', reminder: false });
    const handleInputChange = (e) => {
		setNewEvent(
			{...newEvent,[e.target.name]: e.target.value}
		);
	};
    const handleSubmit = (e) => {
		e.preventDefault();

		axios.post('http://localhost:5000/api/event', newEvent)
			.then(response => {
				onEventAdd(response.data);
				setNewEvent({ title: '', date: '', reminder: false });
                console.log("data added");
                
			})
			.catch(error => console.error(error));
	};
    
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
			<label>Title:</label>
			<input type="text" name="title"
				value={newEvent.title}
				onChange={handleInputChange} required />
			<label>Date:</label>
			<input type="date"
				name="date" value={newEvent.date}
				onChange={handleInputChange} required />

			<button type="submit">Add Event</button>
		</form>
      
    </div>
  );
}

export default EventForm;
