import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css'
import { FaEye } from "react-icons/fa";
import { FaLightbulb} from "react-icons/fa";


function Footer(props) {
const getCurrentActivites = props.getCurrentActivites

  return (
    <div>
      <Card>

        <Card.Body id='footer'>
          <Card.Title><FaLightbulb /> Need some new ideas?</Card.Title>

          <Button onClick={props.getCurrentActivites} variant="primary">See more <FaEye /></Button>
        </Card.Body>
      </Card>
    </div>
  )
}



export default Footer;