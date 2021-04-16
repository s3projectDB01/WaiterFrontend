import React from "react";
import Order from "./Order";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /* 
              ></Order> */
}

class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [], loading: true };
  }

  componentDidMount() {
    this.getOrders();
  }

  static getOrders(orders) {
    return (
      <div>
        {orders.map((order) => (
          <Container className="list">
            <Row>
              <Col sm={12}>
                <Order
                  key={order.id}
                  date={order.date}
                  price={order.price}
                  id={order.id}
                  status={order.status}
                  orderList={order.orderList}
                  tableNumber={order.tableNumber}
                ></Order>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      OrderList.getOrders(this.state.orders)
    );

    return (
      <div>
        {contents}
        {/* <button onClick={() => this.getOrders()}>Reload!</button> */}
      </div>
    );
  }

  async getOrders() {
    //API CALL
    const response = await fetch("https://localhost:6001/Order");
    const data = await response.json();
    this.setState({ orders: data, loading: false });
  }
}

export default OrderList;
