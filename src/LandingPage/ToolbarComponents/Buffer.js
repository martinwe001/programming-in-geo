import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import buffer from "@turf/buffer";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

function Buffer() {
  const [layerList, setLayerList] = useContext(FileContext);

  const handleSubmit = () => {
    var layerName = document.getElementById("bufferSelect").value;
    var layer = layerList.filter((e) => e.name === layerName)[0];

    if (layerName.split(".")[1] === "json") {
      var json = buffer(layer, 0.5);

      json["id"] = uuidv4();
      json["name"] = "Buffer" + layerName;
      json["index"] = layerList.length;
      json["color"] = randomColor();

      setLayerList((prevLayer) => [...prevLayer, json]);
      document.getElementById("bufferSelect").value = "";
    }
  };

  return (
    <div>
      <h5>Buffer</h5>
      <select id="bufferSelect">
        <option value="" selected disabled hidden>
          Choose here
        </option>
        {layerList.map((data, index) => {
          return (
            <option value={data.name} key={index}>
              {" "}
              {data.name}{" "}
            </option>
          );
        })}
      </select>
      <button onClick={handleSubmit}>Buffer</button>
    </div>
  );
}

export default Buffer;
