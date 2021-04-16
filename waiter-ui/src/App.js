import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import OrderList from "./components/OrderList";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="container">
      <OrderList className="list"></OrderList>
    </div>
  );
}

export default App;
