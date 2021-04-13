import React from "react";
import Card from "react-bootstrap/Card";

const Order = ({ orderList, status, id, price, date }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> OrderID: {id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Order Details
          </Card.Subtitle>
          <Card.Text>
            Date: {date}, OrderList: {orderList}, Status: {status}, Price:{" "}
            {price}
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Order;
