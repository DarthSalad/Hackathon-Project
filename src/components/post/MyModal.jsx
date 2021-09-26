import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import Map from '../Map';

export default function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Journey
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Last visited</h4>
          {props.show === true ? <Map lat={props.lat} lon={props.lon} /> : <h1>NO MAP</h1>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }