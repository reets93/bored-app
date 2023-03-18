import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css'

function Footer(props) {
const getCurrentActivites = props.getCurrentActivites

  return (
    <div>
      <Card>

        <Card.Body id='footer'>
          <Card.Title>Need some new ideas?</Card.Title>

          <Button onClick={props.getCurrentActivites} variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </div>
  )
}



export default Footer;