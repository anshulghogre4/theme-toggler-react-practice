import React, {useState} from "react";
import HeroSection from "./Components/HeroSection";
import Toggler from "./Components/Toggler";
import ThemeContext from "./Context/ThemeContext";

function App() {

    const themeHook = useState("light");


  return (
    
    <ThemeContext.Provider value={themeHook} >
      <div><Toggler/>
            <HeroSection/></div>
    </ThemeContext.Provider>

  );
}

export default App;
