import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import difference from "@turf/difference";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import Button from "react-bootstrap/Button";

function Difference() {
  const [layerList, setLayerList] = useContext(FileContext);

  const handleSubmit = () => {
    var layer1name = document.getElementById("differenceSelect1").value;
    var layer2name = document.getElementById("differenceSelect2").value;
    var layer1 = layerList.filter((e) => e.name === layer1name)[0];
    var layer2 = layerList.filter((e) => e.name === layer2name)[0];
    try {
      if (layer1.features.length === 1 && layer2.features.length === 1) {
        console.log(layer1.features[0], layer2);
        var json = difference(layer1.features[0], layer2.features[0]);
        console.log(json);
        json["id"] = uuidv4();
        json["name"] = "Diff" + layer1name + layer2name;
        json["index"] = layerList.length;
        json["color"] = randomColor();
        setLayerList((prevLayer) => [...prevLayer, json]);
        document.getElementById("differenceSelect1").value = "";
        document.getElementById("differenceSelect2").value = "";
      } else {
        console.log("More than 1 polygon");
      }
    } catch (error) {
      console.log("No layers");
    }
  };

  return (
    <div>
      <h5>Difference</h5>
      <div>
        <select id="differenceSelect1" className="form">
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
        <select id="differenceSelect2" className="form2">
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
      <Button onClick={handleSubmit} className="form">
        Difference
      </Button>
    </div>
  );
}

export default Difference;
