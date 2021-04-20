import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OrderPopUpMessage = ({ show, handleClose, orderList }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Orderlist:
          {orderList}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderPopUpMessage;
