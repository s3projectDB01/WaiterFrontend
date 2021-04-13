import React from "react";
import Order from "./Order";
import { Grid } from "@material-ui/core/";

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
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Order
                key={order.id}
                date={order.date}
                price={order.price}
                id={order.id}
                status={order.status}
                orderList={order.OrderList}
              ></Order>
            </Grid>
          </Grid>
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
