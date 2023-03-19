import React from 'react';
import Button from 'react-bootstrap/Button';
import Animation from '../Animation/Animation';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col'
import Container from 'react-bootstrap/Container';

import './FirstPage.css'

function FirstPage(props) {
  // const getCurrentActivites = props.getCurrentActivities

  return (
    // add in some rows and columns?
    <div >
      <div id="frame">
        <Animation></Animation>
      </div>
      <div id="buttonDiv" >
        <Button id='button' onClick={props.getCurrentActivites}
        ><FaArrowRight />  Click Here  <FaArrowLeft /></Button>
      </div>
      <p>"There are no uninteresting things, only uninterested people."
        G.K. Chesterton</p>
    </div>
  )
}

export default FirstPage;