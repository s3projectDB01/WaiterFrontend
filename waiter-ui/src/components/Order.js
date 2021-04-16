import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MainContent from "./MainContent";

const Order = ({ orderList, status, price, date, tableNumber }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> TableNumber: {tableNumber}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Order Details
          </Card.Subtitle>
          <Card.Text>
            Date: {date}, OrderList: {orderList}, Status: {status}, Price:{" "}
            {price}
          </Card.Text>
          <Button onClick={() => <MainContent></MainContent>}>
            View Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Order;
