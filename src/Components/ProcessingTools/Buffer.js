import React, { useContext, useState } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import buffer from "@turf/buffer";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import "./Tools.css";
import Button from "react-bootstrap/Button";

function Buffer() {
  const [layerList, setLayerList] = useContext(FileContext);
  const [errorM, setErrorM] = useState();

  const handleSubmit = () => {
    var layerName = document.getElementById("bufferSelect").value;
    var bufferDistance =
      document.getElementById("buffer").value === ""
        ? 100
        : document.getElementById("buffer").value;
    var layer = layerList.filter((e) => e.name === layerName)[0];
    var name = document.getElementById("Name").value;

    try {
      var json = buffer(layer, bufferDistance / 1000);
      console.log(json);
      json["id"] = uuidv4();
      json["name"] = name === "" ? "Buffer" : name;
      json["index"] = layerList.length;
      json["color"] = randomColor();

      setLayerList((prevLayer) => [...prevLayer, json]);
      document.getElementById("bufferSelect").value = "";
    } catch (error) {
      setErrorM("No layer");
    }
  };

  return (
    <div id="tool">
      <h6 style={{ color: "red" }}>{errorM}</h6>
      <h5 style={{ justifySelf: "center" }}>Buffer</h5>
      <select id="bufferSelect" className="form">
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
      <form
        className="form"
        style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}
      >
        <input
          type="number"
          id="buffer"
          name="buffer"
          placeholder="Buffer Distance"
        />
        <h3 style={{ marginLeft: "8px" }}>m</h3>
      </form>
      <h6>Name</h6>
      <form className="form">
        <input
          type="string"
          id="Name"
          name="name"
          placeholder="Name of layer"
        />
      </form>
      <Button onClick={handleSubmit} className="form">
        Buffer
      </Button>
    </div>
  );
}

export default Buffer;
