import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import { SketchPicker } from "react-color";
import { Button } from "react-bootstrap";

function StylingWindow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (color, event) => {
    setC(color.hex);
  };
  const [c, setC] = useState("#fff");
  const changeColor = (id, color) => {
    var layer = document.getElementsByClassName(id);
    var opacity = document.getElementById("opacity").value;
    for (let item of layer) {
      setC(color);
      item.style.fill = color;
      item.style.fillOpacity = opacity;
    }
  };

  return (
    <>
      <IconButton
        aria-label="style"
        onClick={() => handleShow()}
        style={{ justifySelf: "center", padding: "3px" }}
      >
        <SettingsIcon style={{ fontSize: 14 }} />
      </IconButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Color picker</Modal.Title>
          <div style={{ width: 100 }}></div>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SketchPicker
              color="#fff"
              onChange={(color, e) => handleChange(color, e)}
            />
            <div
              style={{
                marginLeft: "20px",
                flex: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h6 style={{ marginTop: "20px" }}>Color</h6>{" "}
              <div
                style={{
                  background: c,
                  width: "50%",
                  borderRadius: "5px",
                  height: "40px",
                  border: "1px solid",
                  borderColor: "grey",
                  marginTop: "10px",
                }}
              ></div>
              <h6 style={{ marginTop: "20px" }}>Opacity</h6>
              <form
                className="form"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <input
                  type="number"
                  id="opacity"
                  name="opacity"
                  placeholder="Opacity"
                />
              </form>
              <p style={{ fontSize: "70%" }}>Number between 0.0 and 1.0</p>
              <Button
                style={{ marginTop: "10px" }}
                onClick={() => changeColor(props.layerId, c)}
              >
                Change style
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StylingWindow;
