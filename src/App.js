import React from "react";
import Home from './components/Home';
import CardSection from "./components/CardSection";
import DataAnalytics from "./components/DataAnalytics";
import CardSectionWithBackground from "./components/CardSectionWithBackground";
function App() {
  return (
    <div className="App">
      <Home />
      <CardSection />
      <DataAnalytics />
      <CardSectionWithBackground />
    </div>
  );
}

export default App;
