import React, { useContext } from "react";
import "../../../App.css";
import { FileContext } from "../../../Context/FileContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import LayerComponent from "./LayerComponent";

//This is the component that creates the drag and drop list for layers.
//This components will be "filled" with layerComponents
//Implements react-beautiful-dnd and is mostly a boiler plate set up of the component
function Layers() {
  const [layerList, setLayerList] = useContext(FileContext);

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
                  maxHeight: 350,
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
                            <LayerComponent item={item} />
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
