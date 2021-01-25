import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
