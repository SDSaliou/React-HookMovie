import React from "react";
import { Form } from "react-bootstrap";

const Filtre = ({ setSearchTerm, setNote }) => {
  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <Form.Control
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "300px", margin: "10px auto" }}
      />
      <Form.Control
        type="number"
        placeholder="Filtrez par note"
        onChange={(e) => setNote(Number(e.target.value))}
        style={{ width: "300px", margin: "10px auto" }}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filtre;
