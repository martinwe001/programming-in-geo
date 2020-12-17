import React from "react";

import union from "../../Pictures/union.png";
import intersect from "../../Pictures/intersect.png";
import buffer from "../../Pictures/buffer.PNG";
import difference from "../../Pictures/difference.PNG";

function Tools() {
  return (
    <div style={{ height: "400px", overflowY: "scroll" }}>
      <h6>Buffer</h6>
      <p>
        Buffer is a zone around a map feature measured in units of distance. In
        this case in meters away from the boundary of the map feature.
      </p>
      <img src={buffer} style={{ width: "100px", height: "60px" }} />
      <h6>Intersect</h6>
      <p>
        Intersect is the part of two sets that is included in both sets. In this
        case it will be the overlapping part of two layers.
      </p>
      <img src={intersect} style={{ width: "100px", height: "60px" }} />
      <h6>Difference</h6>
      <p>
        Difference is the only tool in this aplication that is dependent on
        order. The difference between set 1 and 2 is the part of set 2 that is
        not included in set 1. In this case this will be the part of the last
        layer that is not included in the first layer.
      </p>
      <img src={difference} style={{ width: "100px", height: "60px" }} />
      <h6>Union</h6>
      <p>
        Union is the the collection of all elements in a set. In this case tis
        will combine two layers together. Since the application uses single
        polygon layers only overlapping layers will be accepted.
      </p>
      <img src={union} style={{ width: "100px", height: "60px" }} />
    </div>
  );
}

export default Tools;
