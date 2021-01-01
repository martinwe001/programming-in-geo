import React, { useContext, useState } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import StylingWindow from "../../Components/StylingWindow/StylingWindow";

// This component is the item that the list in the toolbar consists of.
// No magic here only a component to display the box around the name with buttons
// Also handles delete, show, hide and style
function LayerComponent(item) {
  const [layerList, setLayerList] = useContext(FileContext);
  const [vis, setVis] = useState(true);

  // deletes layer from the layerlist
  const deleteLayer = (id) => {
    setLayerList(layerList.filter((e) => e.id !== id));
  };

  // Hides and shows layers on the map
  const hide = (id) => {
    var layer = document.getElementsByClassName(id);
    for (let part of layer) {
      if (part.style.opacity === "") {
        part.style.opacity = 1;
      }
      if (part.style.opacity == 1) {
        part.style.opacity = 0;
      } else {
        part.style.opacity = 1;
      }
    }
  };

  return (
    <>
      <h6
        style={{
          marginLeft: "10px",
          marginTop: "4px",
          padding: "5px",
          paddingLeft: "0",
          flex: "1",
          overflow: "hidden",
          fontSize: "90%",
          textAlign: "left",
        }}
      >
        {item.item.name}
      </h6>
      <StylingWindow layerId={item.item.id}></StylingWindow>
      <IconButton
        aria-label="delete"
        onClick={() => deleteLayer(item.item.id)}
        style={{ justifySelf: "center", padding: "3px" }}
      >
        <DeleteIcon style={{ fontSize: 14 }} />
      </IconButton>
      <IconButton
        aria-label="visibility"
        onClick={() => {
          hide(item.item.id);
          setVis(!vis);
        }}
        style={{
          justifySelf: "center",
          padding: "3px",
          marginRight: "5px",
        }}
      >
        <>{vis ? <VisibilityIcon /> : <VisibilityOffIcon />}</>
      </IconButton>
    </>
  );
}

export default LayerComponent;
