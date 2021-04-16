import React, { useState } from "react";
import product_card from "../data/product_data.js";
import { useOrder } from "react";
//import OrderMessage from "./useOrder";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// const MainContent = () => {
//   console.log(product_card);
//   const listItems = product_card.map((item) => (
//     <div className="card" key={item.id}>
//       <div className="card_header">
//         <h2>{item.product_name}</h2>
//         <p>{item.description}</p>
//         <p className="price">
//           <span>{item.currency}</span>
//           {item.price}
//         </p>
//         <div className="btn">View Order</div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="main_content">
//       <h3>Orders</h3>
//       {listItems}
//     </div>
//   );
// };

function MainContent(Boolean) {
  const [show, setShow] = useState(Boolean);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MainContent;
