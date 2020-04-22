import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// there is a findDomNode warning that needs to be fixed

class EventModal extends Component {
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
                        <Form>
                            <Form.Group as={Row} controlId="formTitle">
                                <Form.Label column sm="2">Title</Form.Label>
                                <Col sm="10">
                                    <Form.Control defaultValue="Event Title" />
                                </Col>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="4">Start Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="date" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="4">End Date</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="date" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="4">Begins</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="4">Ends</Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="time" />
                                        </Col>
                                    </Form.Group>

                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Row} controlId="formPlaintextPeople">
                                <Form.Label column sm="2">
                                    People
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextLocation">
                                <Form.Label column sm="2">
                                    Location
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextDescription">
                                <Form.Label column sm="2">
                                    Description
                            </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Add Event
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}
export default EventModal;
