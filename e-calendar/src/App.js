import React from 'react';
import Calendar from './components/Calendar';
import './main.scss';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap';
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
  getEvents = date => {
    const events = this.state.events.map(event => {
      if (event.start && event.start.slice(0, 10) === date) {
        return event.title;
      }
      return null;
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
      show: false
    })
  }
  render() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
      <div className="App">
        <h1 align="center">eCalendar</h1>
        <Container fluid>
          <Row>
            <Col xs={12} lg={8}>
              <Calendar changeDate={this.changeDate} events={this.state.events} />
            </Col>
            <Col>
              <h2>{days[this.state.date.getDay()]}</h2>
              {/* The wrong date is being displayed might need to use moment.js or another library */}
              <h1>{months[this.state.date.getMonth()]} {this.state.date.getDate()}</h1>
              <ul>
                {this.state.today ? this.state.today.map((event, i) => event && <li key={i}>{event}</li>) : ""}
              </ul>
              <Button onClick={this.handleShow}>Add</Button>
              <Modal show={this.state.show} handleClose={this.handleClose} addEvent={this.addEvent} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
