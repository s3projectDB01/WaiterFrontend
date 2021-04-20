import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OrderCard = ({ tableNumber, status, handleShow }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> TableNumber: {tableNumber}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Order Details
          </Card.Subtitle>
          <Card.Text>Status: {status}</Card.Text>
          <Button onClick={handleShow}>View Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;
