import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.scss';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// If you need to add arrows on the side of the calendar
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Calendar extends Component {
    static propTypes = {
        props: PropTypes.object
    }
    calendarComponentRef = React.createRef();

    handleDateClick = (arg) => { // bind with an arrow function
        this.props.changeDate(arg.dateStr);
        //TO DO
        //Add event by clicking they day on the calendar
        // alert(arg.dateStr)
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
            <div className="calendar-container">
                {/* <FontAwesomeIcon icon={faChevronLeft} size="5x" /> */}
                <FullCalendar
                    dateClick={this.handleDateClick}
                    // eventClick={(args => { console.log(args) })}
                    defaultView="dayGridMonth"
                    ref={this.calendarComponentRef}
                    header={{
                        left: 'prev',
                        center: 'title',
                        right: 'today , next'
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={this.props.events != null ? this.props.events : ""}
                    eventTimeFormat={{
                        hour: '2-digit', //2-digit, numeric
                        minute: '2-digit', //2-digit, numeric
                        // second: '0-digit', //2-digit, numeric
                        meridiem: false, //lowercase, short, narrow, false (display of AM/PM)
                        hour12: true //true, false
                    }}
                />
                {/* <FontAwesomeIcon icon={faChevronRight} size="5x" /> */}
            </div>
        )
    }
}
export default Calendar;