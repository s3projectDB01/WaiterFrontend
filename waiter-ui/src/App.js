import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./css/App.scss";
import OrderList from "./components/OrderList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";


function App() {
  return (
    <div className="container">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
