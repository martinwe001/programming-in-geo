import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StylingWindow from "../../Components/StylingWindow/StylingWindow";

function Layers() {
  const [layerList, setLayerList] = useContext(FileContext);

  const deleteLayer = (id) => {
    setLayerList(layerList.filter((e) => e.id !== id));
  };

  const hide = (id) => {
    var layer = document.getElementsByClassName(id);
    for (let item of layer) {
      if (item.style.opacity === "") {
        item.style.opacity = 1;
      }
      if (item.style.opacity == 1) {
        item.style.opacity = 0;
      } else {
        item.style.opacity = 1;
      }
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(layerList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLayerList(items);
  };

  return (
    <div
      style={{
        width: "90%",
        textAlign: "center",
        maxHeight: "70%",
        marginTop: "20px",
      }}
    >
      <h3>Layers</h3>
      <DragDropContext onDragEnd={onDragEnd} style={{ width: "100%" }}>
        <Droppable droppableId={"1"} style={{ width: "100%" }}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? "#4D4D4D" : "white",
                  padding: 10,
                  minHeight: 350,
                  width: "100%",
                  overflowY: "scroll",
                  maxHeight: "70%",
                  borderRadius: "5px",
                }}
              >
                {layerList.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                      style={{ background: "red" }}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            key={item.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: "none",
                              padding: 0,
                              display: "flex",
                              flexDirection: "row",
                              ...provided.draggableProps.style,
                              backgroundColor: "lightgrey",
                              borderRadius: "5px",
                              marginBottom: "5px",
                            }}
                          >
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
                              {item.name}
                            </h6>
                            <StylingWindow layerId={item.id}></StylingWindow>
                            <IconButton
                              aria-label="delete"
                              onClick={() => deleteLayer(item.id)}
                              style={{ justifySelf: "center", padding: "3px" }}
                            >
                              <DeleteIcon style={{ fontSize: 14 }} />
                            </IconButton>
                            <IconButton
                              aria-label="visibility"
                              onClick={() => hide(item.id)}
                              style={{
                                justifySelf: "center",
                                padding: "3px",
                                marginRight: "5px",
                              }}
                            >
                              <VisibilityIcon style={{ fontSize: 14 }} />
                            </IconButton>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Layers;
