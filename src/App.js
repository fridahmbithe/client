import React from "react";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useRoutes} from "react-router";

// import Home from "./components/pages/Home";
// import Services from "./components/pages/Services";
// import About from "./components/pages/About";
// import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// import Login from "./components/pages/Login";


function App() {
const routing = useRoutes(routes);

  return (
    <>
      {/* <Router> */}
        <Navbar />
        {/* <Routes> */}
         {routing}
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/About" component={About} />
          <Route path="/sign-up" component={SignUp} />
          <Route exact path="/src/components/pages/Login.js" component={Login} /> */}
          {routing}
        {/* </Routes> */}
        <HeroSection />
        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
