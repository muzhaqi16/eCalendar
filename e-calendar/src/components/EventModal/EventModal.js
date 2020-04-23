import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// there is a findDomNode warning that needs to be fixed
import * as moment from 'moment';

class EventModal extends Component {
    handleAddEvent = (e) => {
        e.preventDefault();
        const title = e.target.eventTitle.value;
        let start = moment(e.target.startDate.value).format('YYYY-MM-DD');
        let end = moment(e.target.endDate.value).format('YYYY-MM-DD');
        const startTime = e.target.beginHour.value;
        const endTime = e.target.endHour.value;
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
                            <Form.Group as={Row} controlId="eventTitle">
                                <Form.Label column sm="2">Title</Form.Label>
                                <Col sm="10">
                                    <Form.Control required type="text" placeholder="Event Title" />
                                </Col>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Group as={Row} controlId="startDate">
                                        <Form.Label column sm="4">Start Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control required type="date" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Group as={Row} controlId="endDate">
                                        <Form.Label column sm="4">End Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control required type="date" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Group as={Row} controlId="beginHour">
                                        <Form.Label column sm="4">Begins</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Group as={Row} controlId="endHour">
                                        <Form.Label column sm="4">Ends</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Row} controlId="people">
                                <Form.Label column sm="2">
                                    People
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="location">
                                <Form.Label column sm="2">
                                    Location
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="description">
                                <Form.Label column sm="2">
                                    Description
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col align="center">
                                    <Button variant="primary" type="submit">
                                        Add Event
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
