import React from "react";
// Importing Routes from Routes.js
import Routes from "./Routes";
// Importing components NAVIGATION, FOOTER
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import './css/App.css';

function App() {
  return (
      <div className="App">
          <div className="BackImage">
            <Navigation />
            <Routes/>
          </div>
        <Footer/>
    </div>
  );
}

export default App;
