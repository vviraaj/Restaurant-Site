import logo from "./logo.svg";
import "./App.css";
import React, { Component, Suspense } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import OTPVerification from "./Component/OTPVerification";
import Resturant from "./Component/Resturant";
import RestaurantDetails from "./Component/RestaurantDetails";

const Register = React.lazy(() => import("./Component/Register"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            name="Registration Page"
            element={<Register />}
          />
          <Route
            exact
            path="/Verification"
            name="OTP Verification"
            element={<OTPVerification />}
          />
          <Route
            exact
            path="/Restaurant"
            name="Resturant"
            element={<Resturant />}
          />
          <Route
            exact
            path="/RestaurantDetails"
            name="Resturant Details"
            element={<RestaurantDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
