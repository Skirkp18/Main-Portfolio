import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MainPage from "./pages/mainPage";
import './App.css';

function App() {
  return (
   <Router>
     <div>
       <Navbar />
      <Route exact path="/" component={MainPage} />
     </div>
   </Router>
  );
}

export default App;
