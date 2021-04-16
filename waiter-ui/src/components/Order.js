import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import MainContent from "./MainContent";
import Button from "react-bootstrap/Button";
// import { withAlert } from "react-alert";

function Order({ orderList, status, price, date, tableNumber }) {
  //  const alert = withAlert();

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
            {"€" + price}
          </Card.Text>
          <Button
            onClick={() => {
              // alert.show("Oh look, an alert!");
            }}
          >
            View Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Order;
