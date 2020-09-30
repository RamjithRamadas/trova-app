import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PaymentSection from "../PaymentSection/PaymentSection";
import RequestSection from "../RequestSection/RequestSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import CarouselPage from "../Slider/CarouselPage";
import "./Tabs.css";

export default function Tabs() {
  return (
    <div className="tab-container">
      <div className="tab-row">
        <nav className="tab-nav">
          <ul className="tab-menuItems">
            <li className="tab-toggle">
              <Link to="/" className="tab-menuItem">
                Requests
              </Link>
            </li>
            <li className="tab-toggle">
              <Link to="/servicesection" className="tab-menuItem">
                Service
              </Link>
            </li>
            <li className="tab-toggle">
              <Link to="/paymentsection" className="tab-menuItem">
                Payment
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* SLIDER*/}
      <CarouselPage />

      <Switch>
        <Route path="/" exact>
          <RequestSection />
        </Route>
        <Route path="/servicesection" exact>
          <ServiceSection />
        </Route>
        <Route path="/paymentsection" exact>
          <PaymentSection />
        </Route>
      </Switch>
    </div>
  );
}
