import React, { createContext, useState } from "react";
import "../App.css";

export const StyleContext = createContext();

export const StyleProvider = (props) => {
  const [style, setStyle] = useState({
    fillColor: "red",
    color: "red",
    opacity: 0.5,
    weight: 2,
    fillOpacity: 0.5,
  });

  return (
    <StyleContext.Provider value={[style, setStyle]}>
      {props.children}
    </StyleContext.Provider>
  );
};
