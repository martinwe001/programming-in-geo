import React, { createContext, useState } from "react";
import "../App.css";

export const FileContext = createContext();

export const FileProvider = (props) => {
  const [layerList, setLayerList] = useState([]);

  return (
    <FileContext.Provider value={[layerList, setLayerList]}>
      {props.children}
    </FileContext.Provider>
  );
};
