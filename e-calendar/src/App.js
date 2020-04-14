import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './main.scss'

function App() {
  return (
    <div className="App">
      <FullCalendar
        dateClick={handleDateClick}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        events={[
          { title: 'event 1', date: '2020-04-01' },
          { title: 'event 2', date: '2020-04-02' }
        ]}
      />
    </div>
  );
}
const handleDateClick = (arg) => { // bind with an arrow function
  alert(arg.dateStr)
}

export default App;
