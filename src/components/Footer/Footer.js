import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css'
import { FaEye } from "react-icons/fa";
import { FaLightbulb} from "react-icons/fa";


function Footer(props) {
// const getCurrentActivites = props.getCurrentActivites

  return (
    <div>
      <Card id='bottom'>

        <Card.Body id='footer'>
          <Card.Title id='title'><FaLightbulb /> Need some new ideas?</Card.Title>

          <Button id='footerButton' onClick={props.getCurrentActivites} 
          // variant="primary"
          >See more <FaEye /></Button>
        </Card.Body>
      </Card>
    </div>
  )
}



export default Footer;