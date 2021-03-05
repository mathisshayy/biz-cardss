import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./pages/card";
import Main from "./pages/main";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import Wrapper from "./Wrapper/index";
import "./pages/savedCards"
import HeroSection from "./heroSection";
import { Carousel } from "bootstrap";

function App() {
  return (
    <Router>
      <div>
        <div>
        <Navbar />
        </div> 
        <br/>
        
        <Wrapper>
        <HeroSection />
        <br/>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/card" component={Card} />
        </Wrapper>
        <carouselCards />
        <Footer /> 
        
      </div>
     
    </Router>
  );
}

export default App;