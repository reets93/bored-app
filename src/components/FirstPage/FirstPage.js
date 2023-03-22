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
      
      {/* <div id="buttonDiv" > */}
        <Button id='button' onClick={props.getCurrentActivites}
        ><span><FaArrowRight  />  Click Here  <FaArrowLeft /></span></Button>
      {/* </div> */}
      <p id='quote'>"There are no uninteresting things, only uninterested people."
        G.K. Chesterton</p>
    </div>
    </div>
  )
}

export default FirstPage;