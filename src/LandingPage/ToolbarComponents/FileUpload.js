import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import { Button } from "react-bootstrap";

function FileUpload() {
  const [layerList, setLayerList] = useContext(FileContext);

  const onFileChange = (file) => {
    let name = file.target.files[0].name;
    const fileReader = new FileReader();
    fileReader.readAsText(file.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let json = JSON.parse(e.target.result);
      json["id"] = uuidv4();
      json["name"] = name;
      json["index"] = layerList.length;
      json["color"] = randomColor();
      setLayerList((prevLayer) => [...prevLayer, json]);
    };
  };

  return (
    <div>
      <div
        id="fileupload"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button style={{ width: "80%" }} variant="info  ">
          <input
            type="file"
            onChange={onFileChange}
            onClick={(event) => {
              event.target.value = null;
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default FileUpload;
