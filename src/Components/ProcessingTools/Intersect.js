import React, { useContext, useState } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import intersect from "@turf/intersect";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import Button from "react-bootstrap/Button";

function Intersect() {
  const [layerList, setLayerList] = useContext(FileContext);
  const [errorM, setErrorM] = useState();

  const handleSubmit = () => {
    setErrorM("");
    var layer1name = document.getElementById("intersectSelect1").value;
    var layer2name = document.getElementById("intersectSelect2").value;
    var layer1 = layerList.filter((e) => e.name === layer1name)[0];
    var layer2 = layerList.filter((e) => e.name === layer2name)[0];
    var name = document.getElementById("Name").value;

    try {
      var json = intersect(layer1, layer2);

      json["id"] = uuidv4();
      json["name"] = name === "" ? "Intersect" : name;
      json["index"] = layerList.length;
      json["color"] = randomColor();
      setLayerList((prevLayer) => [...prevLayer, json]);
      document.getElementById("intersectSelect1").value = "";
      document.getElementById("intersectSelect2").value = "";
    } catch (error) {
      setErrorM("No layers");
    }
  };

  return (
    <div>
      <h6 style={{ color: "red" }}>{errorM}</h6>
      <h5>Intersect</h5>
      <div>
        <select id="intersectSelect1" className="form">
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
        <select id="intersectSelect2" className="form2">
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
      </div>
      <h6 style={{ marginTop: "30px" }}>Name</h6>
      <form className="form">
        <input
          type="string"
          id="Name"
          name="name"
          placeholder="Name of layer"
        />
      </form>
      <Button onClick={handleSubmit} className="form">
        Intersect
      </Button>
    </div>
  );
}

export default Intersect;
