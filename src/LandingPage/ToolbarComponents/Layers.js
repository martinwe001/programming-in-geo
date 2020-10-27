import React, { useContext } from "react";
import "../../App.css";
import { FileContext } from "../../Context/FileContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import randomColor from "randomcolor";

function Layers() {
  const [layerList, setLayerList] = useContext(FileContext);

  const deleteLayer = (id) => {
    setLayerList(layerList.filter((e) => e.id !== id));
  };

  const changeStyle = (id) => {
    var layer = document.getElementsByClassName(id);
    for (let item of layer) {
      item.style.fill = randomColor();
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
    <div>
      <h3>Layers</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"1"}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? "lightgrey" : "white",
                  padding: 10,
                  minHeight: 100,
                }}
              >
                {layerList.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                      style={{ color: "red" }}
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
                            }}
                          >
                            <h5>{item.name}</h5>
                            <IconButton
                              aria-label="delete"
                              onClick={() => changeStyle(item.id)}
                              style={{ justifySelf: "center" }}
                            >
                              <SettingsIcon style={{ fontSize: 14 }} />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => deleteLayer(item.id)}
                              style={{ justifySelf: "center" }}
                            >
                              <DeleteIcon style={{ fontSize: 14 }} />
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
