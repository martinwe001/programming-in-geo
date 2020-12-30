import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import BuildIcon from "@material-ui/icons/Build";

import Buffer from "../ProcessingTools/Buffer";
import Difference from "../ProcessingTools/Differrence";
import Intersect from "../ProcessingTools/Intersect";
import Union from "../ProcessingTools/Union";

import "./GeoprocessingWindow.css";

//Window that includes the Geoprocessing tools
function GeoProcessingWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tool, setTool] = useState("Buffer");

  const changeState = (value) => {
    setTool(value);
  };

  return (
    <>
      <Button variant="info" onClick={handleShow} style={{ width: "85%" }}>
        Spatial toolbox
        <BuildIcon style={{ fontSize: 18, marginLeft: "20px" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spatial toolbox</Modal.Title>
          <div style={{ width: 100 }}></div>
          <DropdownButton
            id="dropdown-variants-Warning"
            variant="warning"
            title={tool}
          >
            <Dropdown.Item onSelect={() => changeState("Buffer")}>
              Buffer
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => changeState("Intersect")}>
              Intersect
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => changeState("Difference")}>
              Difference
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => changeState("Union")}>
              Union
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Header>
        <Modal.Body>
          {tool === "Buffer" ? <Buffer /> : null}
          {tool === "Intersect" ? <Intersect /> : null}
          {tool === "Difference" ? <Difference /> : null}
          {tool === "Union" ? <Union /> : null}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default GeoProcessingWindow;
