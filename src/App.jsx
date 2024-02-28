import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AboutUS from "./Component/AboutUS";
import ContactUS from "./Component/ContactUS";
import ProductServices from "./Component/ProductServices";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Techy Software</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/ContactUS" element={<ContactUS />} />
        <Route path="/ProductServices" element={<ProductServices />} />
      </Routes>
    </Router>
  );
}
export default App;
