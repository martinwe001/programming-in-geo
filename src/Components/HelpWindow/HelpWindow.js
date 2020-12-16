import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import Information from "./Information";
import Tools from "./Tools";
import General from "./General";

function HelpWindow() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tool, setTool] = useState("Information");

  const changeState = (value) => {
    setTool(value);
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{}}>
        Help
        <HelpOutlineIcon style={{ fontSize: 18, marginLeft: "20px" }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
          <div style={{ width: 100 }}></div>
          <div style={{ width: 100 }}></div>
          <DropdownButton
            id="dropdown-variants-Warning"
            variant="info"
            title={tool}
          >
            <Dropdown.Item onSelect={() => changeState("Information")}>
              Information
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => changeState("General")}>
              General
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => changeState("Tools")}>
              Tools
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Header>
        <Modal.Body>
          {tool === "Information" ? <Information /> : null}
          {tool === "General" ? <General /> : null}
          {tool === "Tools" ? <Tools /> : null}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HelpWindow;
