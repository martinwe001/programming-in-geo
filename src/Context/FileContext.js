import React, { createContext, useState } from "react";
import "../App.css";

export const FileContext = createContext();

// This is a context to share the layers between each component. This is done by importing the list
// containing all the layers in all components that needs them.

export const FileProvider = (props) => {
  const [layerList, setLayerList] = useState([]);

  return (
    <FileContext.Provider value={[layerList, setLayerList]}>
      {props.children}
    </FileContext.Provider>
  );
};
