import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Animation from "../Animation/Animation";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import "./FirstPage.css";

function FirstPage(props) {
  // const getCurrentActivites = props.getCurrentActivities

  return (
    //returns the animation/logo, quote and button on the first page

    <div>
      <div id="frame">
        <Animation></Animation>
      </div>
      <div class="context">
        <h4>
          "There are no uninteresting things, only uninterested people." G.K.
          Chesterton
        </h4>
        <Container className="btnContainer">
          <Row>
            <Col className="text-center" style={{ marginTop: "auto" }}>
              <Button id="button" onClick={props.getCurrentActivites}>
                <span>
                  <FaArrowRight /> Click Here <FaArrowLeft />
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default FirstPage;
