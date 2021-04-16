import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import OrderList from "./components/OrderList";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";

function App() {
  function Example() {
    const [show, setShow] = useState(true);

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

  return (
    <div className="container">
      <OrderList className="list"></OrderList>
    </div>
  );
}

export default App;
