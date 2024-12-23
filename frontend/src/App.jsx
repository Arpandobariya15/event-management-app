import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

const App = () => {

    return (
        <div className='main-container'>
            <h1 className='gfg'>
                GFG
            </h1>
            <h2>Event Management App</h2>
            <EventForm onEventAdd={handleEventAdd} />
            <EventList
                events={events}
                onEventDelete={handleEventDelete}
                onToggleReminder={handleToggleReminder}
                onEventEdit={onEventEdit}
            />
        </div>
    )
}

export default App

