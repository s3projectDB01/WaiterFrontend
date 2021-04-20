import React from "react";
import Order from "./Order";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

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
      <div className="grid-container">
        {orders.map((order) => (
          <Order
            key={order.id}
            date={order.date}
            price={order.price}
            id={order.id}
            status={order.status}
            orderList={order.orderList}
            tableNumber={order.tableNumber}
          ></Order>
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
