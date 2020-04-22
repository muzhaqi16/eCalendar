import React from 'react';
import Calendar from './components/Calendar';
import './main.scss';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap';
import Modal from './components/EventModal';

class App extends React.Component {

  constructor(props) {
    super(props);
    // there is a bug with getting current data according to the timezone
    this.state = {
      date: new Date(),
      events: [
        { title: 'event 1', date: '2020-04-01' },
        { title: 'event 2', date: '2020-04-02' }
      ],
      show: true
    };
  }
  addEvent = (event) => {
    this.setState({
      events: [...this.state.events, event]
    })
  }
  changeDate = (date) => {
    this.setState({
      date: new Date(date),
      show: false
    })
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
        <Container fluid>
          <Row>
            <Col xs={12} lg={8}>
              <Calendar changeDate={this.changeDate} events={this.state.events} />
            </Col>
            <Col>
              <h2>{days[this.state.date.getDay()]}</h2>
              {/* The wrong date is being displayed might need to use moment.js or another library */}
              <h1>{months[this.state.date.getMonth()]} {this.state.date.getDate()}</h1>
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
