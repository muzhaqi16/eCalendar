import React from 'react';
import Calendar from './components/Calendar';
import './main.scss';
import Button from 'react-bootstrap/Button';
import { Row, Navbar, Container, Col, ListGroup } from 'react-bootstrap';
import Modal from './components/EventModal';
import * as moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    // there is a bug with getting current data according to the timezone
    this.state = {
      date: new Date(),
      events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
      today: [],
      loadEvent: {},
      show: false
    };
  }
  componentDidMount() {
    this.getEvents(moment(new Date()).format('YYYY-MM-DD'));
  }
  addEvent = (event) => {
    this.setState({
      events: [...this.state.events, event]
    }, () => {
      localStorage.setItem('events', JSON.stringify(this.state.events));
    })
  }
  getTime = date => {
    return moment(date).format("hh:mm");
  }
  getDate = date => {
    return moment(date).format("YYYY-MM-DD");
  }
  updateEvent = event => {
    const { people, location, description } = event.extendedProps;
    const title = event.title;
    let start = event.start;
    let end = event.end;
    const startTime = this.getTime(start);
    start = this.getDate(start);
    const endTime = this.getTime(end);
    end = this.getDate(end);
    const newEvent = {
      title, start, end, people, location, description, startTime, endTime
    }
    this.setState({
      loadEvent: newEvent,
      show: true
    })
  }
  getEvents = date => {
    const events = [];
    this.state.events.forEach(event => {
      if ((moment(event.start).isBefore(date) && moment(event.end).isAfter(date)) || moment(event.start, 'YYYY-MM-DD').isSame(date)) {
        let start = event.start.slice(11, 16);
        if (start === "") {
          start = 'All Day'
        }
        events.push({ title: event.title, start });
      }
    })
    this.setState({
      today: events
    })
  }
  changeDate = (date) => {
    this.setState({
      date: new Date(date + 'T00:00:00'),
      show: false
    })
    this.getEvents(date);
  }
  handleShow = () => {
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    this.setState({
      loadEvent: {},
      show: false
    })
  }
  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <>
        <Container fluid>
          <Row>
            <Col md={12}>
              <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand href="#"><h1>eCalendar</h1></Navbar.Brand>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Row className="main-row">
            <Col xs={12} sm={12} md={8} lg={9} xl={6}>
              <Calendar changeDate={this.changeDate} updateEvent={this.updateEvent} events={this.state.events} />
            </Col>
            <Col className="events-container" md={4} lg={3}>
              <div>
                <h2>{days[this.state.date.getDay()]}</h2>
                {/* The wrong date is being displayed might need to use moment.js or another library */}
                <h1>{months[this.state.date.getMonth()]} {this.state.date.getDate()}</h1>
              </div>
              <ListGroup className="events-list" >
                {this.state.today.length ? this.state.today.map((event, i) => <ListGroup.Item key={i}><b>{event.start} </b> - {event.title}</ListGroup.Item>) : <ListGroup.Item>No Appoinments</ListGroup.Item>}
              </ListGroup>
              <Button onClick={this.handleShow}>Add</Button>
              <Modal event={this.state.loadEvent} show={this.state.show} handleClose={this.handleClose} addEvent={this.addEvent} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
