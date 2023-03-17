import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FirstPage.css'

function FirstPage() {
  return (

    <div id='frame'>
      <Card id='card-container'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

          <Button href='#activity-card' variant="primary">Try This</Button>
        </Card.Body>
      </Card>
      <p>"There are no uninteresting things, only uninterested people."
        G.K. Chesterton</p>
    </div>
  )
}

export default FirstPage;