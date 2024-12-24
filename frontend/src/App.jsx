import React,{useState ,useEffect } from 'react';
import "../src/components/EventList.css"
import EventForm from './components/EventForm';
import axios from 'axios';
import EventList from './components/EventList';

const App = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
		axios.get('http://localhost:5000/api/event')
			.then(response => setEvents(response.data))
			.catch(error => console.error(error));
  
	}, []);
  console.log(events);

  const handleEventAdd = (newEvent) => {
		setEvents([...events, newEvent]);
	};
  // delete event
  const handleEventDelete = (id) => {
		axios.delete(`http://localhost:5000/api/event/${id}`).then(() =>setEvents(events.filter(event => event._id !== id)))
			.catch(error => console.error(error));
	};
  // handle toggle
  const handleToggleReminder = (eventId) => {
		const selectedEvent =
			events.find(event => event._id === eventId);
		const updatedEvent =
		{
			...selectedEvent,
			reminder: !selectedEvent.reminder
		};
		axios.put(`http://localhost:5000/api/event/${eventId}`, updatedEvent)
			.then(res => {
				// If the update is successful, update the events in the state
				const updatedEvents = events.map(event =>
					event._id === eventId ? updatedEvent : event
				);
				setEvents(updatedEvents);
			})
			.catch(
				error =>
					console.error(`Error updating reminder status for
				event with ID ${eventId}:`, error));
	};
	// Update the event in the database
  const onEventEdit = (eventId, updatedData) => {
		axios.put(`http://localhost:5000/api/event/${eventId}`, updatedData)
			.then(res => {
				// If the update is successful, update the events in the state
				const updatedEvents = events.map(event =>
					event._id ===
						eventId ?
						{ ...event, ...updatedData } : event
				);
				setEvents(updatedEvents);
			})
			.catch(
				error =>
					console.error(`Error updating event with
						ID ${eventId}:`, error)
			);
	};







  return (

    <div className='main-container'>
      <h1 className='gfg'>
        GFG
      </h1>
      <h2>Event Management App</h2>
      <EventForm  onEventAdd={handleEventAdd} />
      <EventList
        events={events}
        onEventDelete={handleEventDelete}
        onToggleReminder={handleToggleReminder}
        onEventEdit={onEventEdit}
      />
    </div>

  );
}

export default App;
