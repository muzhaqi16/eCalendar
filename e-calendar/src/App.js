import React from 'react';
import Calendar from './components/Calendar';
import './main.scss';
import Button from 'react-bootstrap/Button';
import { Row, Container, Col } from 'react-bootstrap';
class App extends React.Component {

  constructor(props) {
    super(props);
    // there is a bug with getting current data according to the timezone
    this.state = { date: new Date() };
  }
  changeDate = (date) => {
    this.setState({
      date: new Date(date)
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
              <Calendar changeDate={this.changeDate} />
            </Col>
            <Col>
              <h2>{days[this.state.date.getDay()]}</h2>
              <h1>{months[this.state.date.getMonth()]} {this.state.date.getDate()}</h1>
              <Button>Add</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
