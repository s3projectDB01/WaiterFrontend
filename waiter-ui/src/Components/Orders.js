import React from "react";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [], loading: true };
  }

  componentDidMount() {
    this.getOrders();
  }

  static getOrders(orders) {
    return (
      <center>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>orderList</th>
              <th>price</th>
              <th>date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderList}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <span>Loading...</span>
    ) : (
      Orders.getOrders(this.state.orders)
    );

    return (
      <div>
        {contents}
        <button onClick={() => this.getOrders()}>Reload!</button>
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

export default Orders;
