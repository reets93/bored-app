import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExploreModal.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Youtube from '../Youtube/Youtube';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchBar from '../Youtube/SearchBar';


function ExploreModal(props) {
  // trying to pass through the boredData to this? 
  const modalData = props.modalData
  // console.log("MODALDATA", modalData)
  if (modalData) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title as="h6" id="contained-modal-title-vcenter">
            {modalData.type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Body>
            <Card.Title>{modalData.activity}</Card.Title>
            {/* <Card.Text> */}
              {/* Participants needed: {modalData.participants}</Card.Text> */}
            {/* <SearchBar passingFunction={this.onTermSubmit} /> */}
            <Youtube />
            <Button href={`https://www.google.com/search?q=${modalData.activity}`} target="_blank" variant="primary">Explore more on Google</Button>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ExploreModal 