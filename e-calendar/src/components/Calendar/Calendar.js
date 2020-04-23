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
                    columnHeaderHtml={
                        "Hello"
                    }
                    dateClick={this.handleDateClick}
                    defaultView="dayGridMonth"
                    ref={this.calendarComponentRef}
                    header={{
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={this.props.events != null ? this.props.events : ""}
                />
                {/* <FontAwesomeIcon icon={faChevronRight} size="5x" /> */}
            </div>
        )
    }
}
export default Calendar;