import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.scss';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Calendar extends Component {
    static propTypes = {
        prop: PropTypes
    }
    calendarComponentRef = React.createRef();

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
        // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        //   this.setState({  // add new event data
        //     calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        //       title: 'New Event',
        //       start: arg.date,
        //       allDay: arg.allDay
        //     })
        //   })
        // }
    }
    render() {
        return (
            <div>
                <FullCalendar
                    dateClick={this.handleDateClick}
                    defaultView="dayGridMonth"
                    ref={this.calendarComponentRef}
                    // header={{
                    //   left: 'prev,next today',
                    //   center: 'title',
                    //   right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                    // }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={[
                        { title: 'event 1', date: '2020-04-01' },
                        { title: 'event 2', date: '2020-04-02' }
                    ]}
                />
            </div>
        )
    }
}
export default Calendar;