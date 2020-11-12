import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import union from "@turf/union";
import booleanOverlap from "@turf/boolean-overlap";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import Button from "react-bootstrap/Button";

function Union() {
  const [layerList, setLayerList] = useContext(FileContext);

  const handleSubmit = () => {
    var layer1name = document.getElementById("unionSelect1").value;
    var layer2name = document.getElementById("unionSelect2").value;
    var layer1 = layerList.filter((e) => e.name === layer1name)[0];
    var layer2 = layerList.filter((e) => e.name === layer2name)[0];

    try {
      if (layer1.features.length === 1 && layer2.features.length === 1) {
        if (booleanOverlap(layer1.features[0], layer2.features[0])) {
          var json = union(layer1.features[0], layer2.features[0]);

          json["id"] = uuidv4();
          json["name"] = layer1name + "&" + layer2name;
          json["index"] = layerList.length;
          json["color"] = randomColor();
          setLayerList((prevLayer) => [...prevLayer, json]);
          document.getElementById("unionSelect1").value = "";
          document.getElementById("unionSelect2").value = "";
        }
      } else {
        console.log("More than 1 polygon");
      }
    } catch (error) {
      console.log("No layers");
    }
  };

  return (
    <div>
      <h5>Union</h5>
      <div>
        <select id="unionSelect1" className="form">
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
        <select id="unionSelect2" className="form2">
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
        Union
      </Button>
    </div>
  );
}

export default Union;
