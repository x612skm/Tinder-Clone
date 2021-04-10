import React from "react";
import "./App.css";
import Header from "./header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //naming convection
    <div className="app">
    <Header/>
    <TinderCards/>
    <SwipeButtons />
    </div>
  );
}
 
export default App;
