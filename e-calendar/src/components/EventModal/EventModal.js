import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// there is a findDomNode warning that needs to be fixed
import * as moment from 'moment';

class EventModal extends Component {
    state = { event: this.props.event };

    onChange = input => {
        const eventCopy = this.state.event;
        const { value, id } = input.target;
        eventCopy[id] = value;

        this.setState({
            event: eventCopy
        })
    }
    handleAddEvent = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        let start = moment(e.target.start.value).format('YYYY-MM-DD');
        let end = moment(e.target.end.value).format('YYYY-MM-DD');
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;
        const people = e.target.people.value;
        const location = e.target.location.value;
        const description = e.target.location.value;
        if (startTime) {
            start += `T${startTime}`;
        }
        if (endTime) {
            end += `T${endTime}`;
        }
        const event = {
            title,
            start,
            end,
            hasEnd: true,
            people,
            location,
            description
        }
        if (startTime === "" || endTime === "") {
            event.allDay = true;
        }
        this.props.addEvent(event);
        this.props.handleClose();
    }
    render() {
        const { title, start, end, startTime, endTime, people, location, description } = this.state.event;
        return (
            <>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleAddEvent}>
                            <Form.Group as={Row} controlId="title">
                                <Form.Label column sm="2">Title</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="text" placeholder="Event Title" value={title} onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Group as={Row} controlId="start">
                                        <Form.Label column sm="4">Start Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control required type="date" value={start} onChange={this.onChange} />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Group as={Row} controlId="end">
                                        <Form.Label column sm="4">End Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control required type="date" value={end} onChange={this.onChange} />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Group as={Row} controlId="startTime">
                                        <Form.Label column sm="4">Begins</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" value={startTime} onChange={this.onChange} />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Group as={Row} controlId="endTime">
                                        <Form.Label column sm="4">Ends</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" value={endTime} onChange={this.onChange} />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Row} controlId="people">
                                <Form.Label column sm="2">
                                    People
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" value={people} onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="location">
                                <Form.Label column sm="2">
                                    Location
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" value={location} onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="description">
                                <Form.Label column sm="2">
                                    Description
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" value={description} onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col align="center">
                                    <Button variant="primary" type="submit">
                                        {Object.keys(this.props.event).length === 0 ? "Add" : "Update"} Event
                                </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}
export default EventModal;
