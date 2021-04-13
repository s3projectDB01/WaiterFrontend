import React, { useState } from "react";
import logo from "./logo.svg";
import Row from "react-bootstrap/Row";
import { Counter } from "./features/counter/Counter";
import "./css/App.css";
import OrderList from "./components/OrderList";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <OrderList></OrderList>
    </div>
  );
}

export default App;
