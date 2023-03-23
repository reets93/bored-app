import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Animation from '../Animation/Animation';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import './FirstPage.css'

function FirstPage(props) {
  // const getCurrentActivites = props.getCurrentActivities

  return ( //returns the animation/logo, quote and button on the first page

    <div >
      <div id="frame">
        <Animation></Animation>
        <Container className="btnContainer">
          <Row>
            <Col className="text-center" style ={{ marginTop: "30em"}}>
        <Button id='button' onClick={props.getCurrentActivites}
        >
          <span><FaArrowRight />  Click Here  <FaArrowLeft />
          </span>
        </Button>
        </Col>
          </Row>
      </Container>
        <p id='quote'>"There are no uninteresting things, only uninterested people."
          G.K. Chesterton</p>
      </div>
    </div>
  )
}

export default FirstPage;