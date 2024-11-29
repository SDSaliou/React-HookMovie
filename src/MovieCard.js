import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, posterURL, note }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Note:</strong> {note}/10
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
