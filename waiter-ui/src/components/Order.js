import React, { useState } from "react";
import OrderPopUpMessage from "./OrderPopUpMessage";
import OrderCard from "./OrderCard";

function Order({ orderList, status, price, date, tableNumber }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <OrderPopUpMessage
        show={show}
        handleClose={handleClose}
        orderList={orderList}
      ></OrderPopUpMessage>
      <OrderCard
        tableNumber={tableNumber}
        status={status}
        handleShow={handleShow}
      ></OrderCard>
    </div>
  );
}

export default Order;
