import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieList = ({ movies, onMoreDetails }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie, index) => (
        <Card
          key={index}
          style={{
            width: "18rem",
            margin: "10px",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src={movie.posterURL}
            alt={movie.title}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title style={{color:'mediumpurple'}}><strong>{movie.title}</strong></Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text style={{color:"mediumpurple"}}>Note: {movie.note}/10</Card.Text>
            <Button variant="primary" style={{backgroundColor:'mediumpurple'}} onClick={() => onMoreDetails(movie.videoURL)}>
              Voir la Bande
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
