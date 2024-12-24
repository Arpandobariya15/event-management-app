import React,{useState ,useEffect } from 'react';
import "../src/components/EventList.css"
import EventForm from './components/EventForm';
import axios from 'axios';

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




  return (

    <div className='main-container'>
      <h1 className='gfg'>
        GFG
      </h1>
      <h2>Event Management App</h2>
      <EventForm  onEventAdd={handleEventAdd} />
      {/* <EventList
        events={events}
        onEventDelete={handleEventDelete}
        onToggleReminder={handleToggleReminder}
        onEventEdit={onEventEdit}
      /> */}
    </div>

  );
}

export default App;
