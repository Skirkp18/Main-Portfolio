import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/mainPage";
import Projects from "./pages/projects";
import FooterBar from "./components/footerbar/footerbar";
import './App.css';

function App() {
  return (
   <Router>
     <div>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/projects" component={Projects} />
      <FooterBar />
     </div>
   </Router>
  );
}

export default App;
