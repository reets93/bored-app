import React from 'react';
import Button from 'react-bootstrap/Button';
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
        <Button id='button' onClick={props.getCurrentActivites}
        >
          <span><FaArrowRight />  Click Here  <FaArrowLeft />
          </span>
        </Button>
        <p id='quote'>"There are no uninteresting things, only uninterested people."
          G.K. Chesterton</p>
      </div>
    </div>
  )
}

export default FirstPage;