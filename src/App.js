import React from "react";
import MapOslo from "./MapComponent/Map";
import Toolbar from "./LandingPage/Toolbar";
import { FileProvider } from "./Context/FileContext";
import { StyleProvider } from "./Context/StyleContext";

function App() {
  return (
    <div id="page">
      <div id="map-tool">
        <FileProvider>
          <StyleProvider>
            <Toolbar />
          </StyleProvider>
          <MapOslo />
        </FileProvider>
      </div>
    </div>
  );
}

export default App;
